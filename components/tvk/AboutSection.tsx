import Image from "next/image";
import { highlights } from "@/lib/tvk-data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-1 rounded-full text-sm mb-4 tracking-wide">
            About · எங்களைப் பற்றி
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
            ஒரு புதிய தமிழகம்
          </h2>
          <p className="text-muted-foreground text-lg mt-2 font-medium">
            A New Tamil Nadu — Built on Truth, Justice & Progress
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Leader image */}
          <div className="relative flex justify-center">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm lg:max-w-full aspect-[3/4]"
              style={{ border: "4px solid #E11D48" }}
            >
              <Image
                src="/images/tvk-leader.png"
                alt="TVK Party Leader"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: "linear-gradient(to top, rgba(159,10,43,0.95) 0%, transparent 100%)" }}>
                <p className="text-secondary font-extrabold text-xl">இயக்க தலைவர்</p>
                <p className="text-white/80 text-sm">Party President, TVK</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
              style={{ background: "#FACC15", opacity: 0.5 }}
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full -z-10"
              style={{ background: "#E11D48", opacity: 0.3 }}
            />
          </div>

          {/* Vision & Mission */}
          <div>
            <h3 className="text-3xl font-extrabold text-foreground mb-4">
              எங்கள் தொலைநோக்கு
              <span className="block text-lg font-medium text-muted-foreground mt-1">Our Vision & Mission</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              தமிழக வெற்றி கழகம் (TVK) — மக்களின் நம்பிக்கையில் உருவான இயக்கம். நாங்கள் ஊழல் இல்லாத,
              நேர்மையான, வளர்ச்சி மிகுந்த தமிழகத்தை கட்டியெழுப்ப உறுதி பூண்டுள்ளோம்.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
              Tamizhaga Vetri Kazhagam is a movement born from the trust of the people — committed to building a Tamil Nadu
              free from corruption, full of opportunities, and anchored in justice.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.titleEn}
                  className="rounded-xl p-4 border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                  style={{ background: "linear-gradient(135deg, #fff9f0, #fff)" }}
                >
                  <span className="text-2xl mb-2 block">{h.icon}</span>
                  <p className="font-extrabold text-foreground text-base group-hover:text-primary transition-colors">
                    {h.titleTa}
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">{h.titleEn}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
