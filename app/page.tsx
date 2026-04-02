"use client";

import Navbar from "@/components/tvk/Navbar";
import HeroSection from "@/components/tvk/HeroSection";
import WhistleSection from "@/components/tvk/WhistleSection";
import AboutSection from "@/components/tvk/AboutSection";
import PromisesSection from "@/components/tvk/PromisesSection";
import TimelineSection from "@/components/tvk/TimelineSection";
import GallerySection from "@/components/tvk/GallerySection";
import ContactSection from "@/components/tvk/ContactSection";
import Footer from "@/components/tvk/Footer";

/**
 * TVK - Tamizhaga Vetri Kazhagam
 * Official Election Promises (Vakkurudhi) Website
 */
export default function TVKHomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhistleSection />
      <AboutSection />
      <PromisesSection />
      <TimelineSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
