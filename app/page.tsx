import HeroSection from "@/components/hero-section";
import ScrollingLogosSection from "@/components/scrolling-logos-section";
import PremiumScrollingLogos from "@/components/premium-scrolling-logos";
export default function Page() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <ScrollingLogosSection />
      <PremiumScrollingLogos />
    </div>
  );
}
