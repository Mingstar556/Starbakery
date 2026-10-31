import GlassNavbar from '@/components/storefront/GlassNavbar';
import MeridianHero from '@/components/storefront/MeridianHero';
import MenuAndGallerySection from '@/components/storefront/MenuAndGallerySection';
import StorySection from '@/components/storefront/StorySection';
import ContactSection from '@/components/storefront/ContactSection';
import GlassFooter from '@/components/storefront/GlassFooter';
import SecurityGuard from '@/components/storefront/SecurityGuard';
import PageLoader from '@/components/storefront/PageLoader';
import ScrollProgressAndBackToTop from '@/components/storefront/ScrollProgressAndBackToTop';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fafaf9] text-[#18181b] overflow-hidden selection:bg-[#e4e4e7] selection:text-[#09090b] pt-24 sm:pt-28">
      {/* 1. Initial Architectural Sketch Loading Animation */}
      <PageLoader />

      {/* 2. Top Glass Navigation (Permanently Fixed Everywhere You Scroll) */}
      <GlassNavbar />

      {/* 3. Hero Section with Seamless Bakery Sketch & 360° Orbiting Artisan Breads */}
      <MeridianHero />

      {/* 4. Menu and Photo Gallery with Scroll-Triggered Reveal Animations */}
      <MenuAndGallerySection />

      {/* 5. Heritage & Fermentation Story with Scroll Timeline */}
      <StorySection />

      {/* 6. Shop Info and Private Inquiry Dispatch */}
      <ContactSection />

      {/* 7. Glass Footer */}
      <GlassFooter />

      {/* 8. Interactive Scroll Progress Meter & Gliding Back-To-Top */}
      <ScrollProgressAndBackToTop />

      {/* 9. Copyright & Asset Guard */}
      <SecurityGuard />
    </main>
  );
}
