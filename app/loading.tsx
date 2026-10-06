import Logo from "@/components/Logo";
import { Sparkle } from "@/components/Doodles";

// Route-level splash (DESIGN.md §4.17): shown while a page streams in on slow networks.
export default function Loading() {
  return (
    <div className="splash" role="status" aria-label="Loading">
      <div className="space-y-8 text-center">
        <div className="orbit mx-auto">
          <div className="sp"><Sparkle c="#FFD23F" className="!static" /></div>
          <div className="sp b"><Sparkle c="#fff" className="!static" /></div>
          <div className="scale-75"><Logo /></div>
        </div>
        <div className="dots"><i /><i /><i /></div>
      </div>
    </div>
  );
}
