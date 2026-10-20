// Self-check for the old-domain handoff script. Run: node lib/site.test.mjs
import assert from "node:assert/strict";
import { MOVE, OLD_HOST, SITE } from "./site.ts";

// Runs MOVE against a fake page at `url` with the given localStorage; returns where it went and what it stored.
function run(url, store) {
  const u = new URL(url), out = { store };
  const location = { hostname: u.hostname, pathname: u.pathname, search: u.search, hash: u.hash, replace: (to) => (out.replaced = to) };
  const localStorage = {
    get length() { return Object.keys(store).length; },
    key: (i) => Object.keys(store)[i],
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => (store[k] = String(v)),
  };
  const history = { replaceState: (_s, _t, to) => (out.url = to) };
  new Function("location", "localStorage", "history", MOVE)(location, localStorage, history);
  return out;
}

// 1. old domain: forwards to the new one, same path and query, keeps an existing #k= and packs storage
const old = { mine: JSON.stringify({ slug: "abc", token: "t-1" }), "tok:abc": "t-1", "done:xyz": "{\"score\":7}", lang: "hx" };
const a = run(`https://${OLD_HOST}/s/abc?x=1#k=t-1`, { ...old });
assert.ok(a.replaced.startsWith(`${SITE}/s/abc?x=1#k=t-1&mv=`), a.replaced);

// 2. new domain: unpacks into empty storage and scrubs only the mv part
const b = run(a.replaced, {});
assert.deepEqual(b.store, old);
assert.equal(b.url, "/s/abc?x=1#k=t-1");

// 3. new domain data wins over what is carried in
const c = run(`${SITE}/#mv=${encodeURIComponent(JSON.stringify({ lang: "hx", mine: "old" }))}`, { mine: "new" });
assert.deepEqual(c.store, { mine: "new", lang: "hx" });
assert.equal(c.url, "/");

// 4. plain visits do nothing
const d = run(`${SITE}/q/abc`, {});
assert.equal(d.replaced, undefined);
assert.equal(d.url, undefined);

console.log("MOVE ok");
