"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", labelTa: "முகப்பு", labelEn: "Home" },
  { href: "#about", labelTa: "எங்களைப் பற்றி", labelEn: "About" },
  { href: "#promises", labelTa: "வாக்குறுதி", labelEn: "Promises" },
  { href: "#timeline", labelTa: "100 நாள்", labelEn: "100 Days" },
  { href: "#gallery", labelTa: "படங்கள்", labelEn: "Gallery" },
  { href: "#contact", labelTa: "தொடர்பு", labelEn: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-foreground/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 group"
          aria-label="TVK Home"
        >
          <div className="w-21 h-21 rounded-full bg-primary flex items-center justify-center border-2 border-secondary shadow-md group-hover:scale-110 transition-transform">
        <img src="./images/site_logo.jpeg" alt="TVK Logo" className="w-20 h-20 rounded-full" />
          </div>
          <div className="hidden sm:block">
            <p className="text-secondary font-bold text-base leading-none">தமிழக வெற்றி கழகம்</p>
            <p className="text-secondary/70 text-xs">Tamizhaga Vetri Kazhagam</p>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 rounded-md text-secondary hover:text-secondary hover:bg-primary/80 transition-colors text-sm font-medium"
              >
                <span className="block text-xs leading-none">{link.labelTa}</span>
                <span className="block text-[10px] leading-none opacity-70">{link.labelEn}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex">
          <button
            onClick={() => handleNav("#promises")}
            className="bg-secondary text-secondary-foreground font-bold px-5 py-2 rounded-full text-sm hover:bg-secondary/90 transition-colors shadow"
          >
            வாக்குறுதி பார்க்க
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-secondary p-2 rounded-md hover:bg-primary/70 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-foreground/97 border-t border-primary/30 px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-secondary hover:bg-primary/50 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">{link.labelTa}</span>
                  <span className="text-sm opacity-60">{link.labelEn}</span>
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNav("#promises")}
            className="mt-4 w-full bg-secondary text-secondary-foreground font-bold px-5 py-3 rounded-full text-sm hover:bg-secondary/90 transition-colors"
          >
            வாக்குறுதி பார்க்க
          </button>
        </div>
      )}
    </header>
  );
}
