import Image from "next/image";
import { galleryImages } from "@/lib/tvk-data";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-4 md:px-8"
      style={{ background: "linear-gradient(180deg, #1a0009 0%, #2d0012 100%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/80 text-primary-foreground font-bold px-5 py-1.5 rounded-full text-sm mb-4 tracking-wide">
            படத்தொகுப்பு · Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-balance">
            இயக்கத்தின் தருணங்கள்
          </h2>
          <p className="text-white/60 text-lg mt-3">
            Moments of the Movement
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl aspect-video group cursor-pointer"
              style={{ border: "2px solid rgba(250,204,21,0.2)" }}
            >
              <Image
                src={img.src}
                alt={img.altEn}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(159,10,43,0.9) 0%, transparent 60%)" }}
              >
                <div>
                  <p className="text-secondary font-bold text-base">{img.altTa}</p>
                  <p className="text-white/80 text-sm">{img.altEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
