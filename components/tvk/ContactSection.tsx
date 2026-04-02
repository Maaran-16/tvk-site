"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
          <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary text-secondary-foreground font-bold px-5 py-1.5 rounded-full text-sm mb-4 tracking-wide shadow">
            தொடர்பு கொள்ளுங்கள் · Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
            நம்மை அணுகுங்கள்
          </h2>
          <p className="text-muted-foreground text-lg mt-3">
            Reach out to us — we listen, we act
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "#FACC15" }}>
                  <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">நன்றி!</h3>
                <p className="text-muted-foreground">உங்கள் செய்தி பெறப்பட்டது. நாங்கள் விரைவில் தொடர்பு கொள்வோம்.</p>
                <p className="text-sm text-muted-foreground">Your message has been received. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-1.5">
                    பெயர் · Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="உங்கள் பெயர்"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-1.5">
                    மின்னஞ்சல் · Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-1.5">
                    செய்தி · Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="உங்கள் கருத்துக்களை தெரிவியுங்கள்..."
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-extrabold text-base py-3.5 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02] active:scale-100"
                  style={{ background: "#E11D48", color: "#fff" }}
                >
                  செய்தி அனுப்பு · Send Message
                </button>
              </form>
            )}
          </div>

          {/* Social & info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="text-2xl font-extrabold text-foreground mb-3">சமூக வலைத்தளங்கள்</h3>
              <p className="text-muted-foreground text-sm mb-6">Follow us on Social Media · எங்களை தொடர்ந்து கவனியுங்கள்</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                    style={{ background: "#E11D48", color: "#fff" }}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #9F0A2B, #E11D48)" }}>
              <h4 className="text-secondary font-extrabold text-xl mb-2">தலைமையகம்</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                TVK Party Headquarters<br />
                Chennai, Tamil Nadu — 600 001<br />
                <a href="tel:+9144123456" className="text-secondary hover:underline">+91 44 1234 5678</a><br />
                <a href="mailto:contact@tvkparty.in" className="text-secondary hover:underline">contact@tvkparty.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
