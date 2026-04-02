"use client";

const footerLinks = {
  "இயக்கம் · Party": [
    { label: "எங்களைப் பற்றி · About", href: "#about" },
    { label: "தலைமை · Leadership", href: "#about" },
    { label: "வரலாறு · History", href: "#about" },
  ],
  "திட்டங்கள் · Plans": [
    { label: "வாக்குறுதி · Promises", href: "#promises" },
    { label: "100 நாள் · 100 Days", href: "#timeline" },
    { label: "கொள்கை · Policy", href: "#promises" },
  ],
  "ஊடகம் · Media": [
    { label: "படங்கள் · Gallery", href: "#gallery" },
    { label: "செய்தி · News", href: "#gallery" },
    { label: "நிகழ்வுகள் · Events", href: "#gallery" },
  ],
};

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#1a0009", color: "#fff" }}>
      {/* Top wave */}
      <div>
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0L60 8C120 16 240 32 360 36C480 40 600 32 720 26.7C840 21.3 960 18.7 1080 21.3C1200 24 1320 32 1380 36L1440 40V50H1380C1320 50 1200 50 1080 50C960 50 840 50 720 50C600 50 480 50 360 50C240 50 120 50 60 50H0V0Z" fill="#1a0009"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b" style={{ borderColor: "rgba(250,204,21,0.15)" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 font-extrabold text-sm"
                style={{ background: "#E11D48", borderColor: "#FACC15", color: "#fff" }}>
                TVK
              </div>
              <div>
                <p className="font-extrabold text-base" style={{ color: "#FACC15" }}>தமிழக வெற்றி கழகம்</p>
                <p className="text-xs opacity-60">Tamizhaga Vetri Kazhagam</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-60">
              மக்களின் நம்பிக்கையில் ஒரு புதிய தமிழகம் கட்டுவோம்.
              <br />
              <span className="text-xs">Building a new Tamil Nadu on the trust of the people.</span>
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-extrabold text-sm mb-4 tracking-wide" style={{ color: "#FACC15" }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-sm opacity-60 hover:opacity-100 transition-opacity text-left"
                      style={{ color: "#fff" }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-40 text-center md:text-left">
            &copy; {new Date().getFullYear()} Tamizhaga Vetri Kazhagam (TVK). All rights reserved. | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
          </p>
          <p className="text-xs opacity-30">
            This is a demonstration website. · இது ஒரு மாதிரி வலைத்தளம்.
          </p>
        </div>
      </div>
    </footer>
  );
}
