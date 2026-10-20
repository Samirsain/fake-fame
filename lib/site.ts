// Site-wide constants.
export const PUB = "pub-7946202742657930"; // Google AdSense publisher id (public: it is in every page's ad tag); also in public/ads.txt
export const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fakefame.online").replace(/\/$/, "");
export const OLD_HOST = "fake-fame.vercel.app"; // the first home: quiz links shared from it still circulate

// Inline <head> script. On OLD_HOST it forwards to SITE (same path), carrying this device's localStorage
// (creator tokens, played quizzes, language) in the URL fragment because localStorage is per domain; on SITE it unpacks it.
export const MOVE = `(function(){var S=${JSON.stringify(SITE)},O=${JSON.stringify(OLD_HOST)},h=location.hash;
if(location.hostname===O){if(S.indexOf("//"+O)>=0)return;var d={};
try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);d[k]=localStorage.getItem(k)}}catch(e){}
location.replace(S+location.pathname+location.search+"#"+(h.length>1?h.slice(1)+"&":"")+"mv="+encodeURIComponent(JSON.stringify(d)));return}
var m=h.match(/(^#|&)mv=([^&]*)/);if(!m)return;
try{var o=JSON.parse(decodeURIComponent(m[2]));for(var k in o)if(localStorage.getItem(k)===null)localStorage.setItem(k,o[k])}catch(e){}
var r=h.replace(m[0],"").replace(/^#?&?/,"");history.replaceState(null,"",location.pathname+location.search+(r?"#"+r:""))})()`;
export const DESCRIPTION = "Free friendship quiz (dosti quiz) in English, Hindi and Hinglish. Answer 10 questions, share the link on WhatsApp or Instagram, and see which friends really know you.";
export const EMAIL ="info@zenviqdigital.in"; // Zenviq Digital's public contact address (shown on zenviqdigital.in)

// Zenviq Digital's WhatsApp + call number. The prefilled message names the spot the lead came from.
export const TEL = "+919311908389";
export const wa = (from: string) =>
  `https://wa.me/${TEL.slice(1)}?text=${encodeURIComponent(`Hi Zenviq! I found you through Fake or Fam (${from}). I'd like to discuss a project.`)}`;
