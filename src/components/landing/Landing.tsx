// src/components/landing/Landing.tsx
import { LandingNav } from "./LandingNav";
import { LandingFooter } from "./LandingFooter";
import LandingCTA from "./LandingCTA";


export function Landing() {
  return (
    <div className="bg-bg text-text font-sans min-h-screen">
      <LandingNav />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
