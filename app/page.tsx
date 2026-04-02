"use client";

import Navbar from "@/components/tvk/Navbar";
import HeroSection from "@/components/tvk/HeroSection";
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
      <AboutSection />
      <PromisesSection />
      <TimelineSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
