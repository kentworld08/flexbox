import HeroSection from "@/components/hero-section";
import Channel from "@/components/Channels";
import PremiumScrollingLogos from "@/components/premium-scrolling-logos";
import MovieShowsCarousel from "@/components/movieShows";
import AboutIPTV from "@/components/AboutIptv";
import FAQSection from "@/components/FAQ";
import FeatureSection from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/PricingSection";
export default function Page() {
  return (
    <div className="min-h-screen max-w-[1520px] mx-auto">
      <HeroSection />
      <Channel />
      <PremiumScrollingLogos />
      <MovieShowsCarousel />
      <AboutIPTV />
      <FeatureSection />
      <Pricing />
      <FAQSection />
      <ContactForm />
    </div>
  );
}
