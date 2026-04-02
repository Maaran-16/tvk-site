import { timeline } from "@/lib/tvk-data";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary text-secondary-foreground font-bold px-5 py-1.5 rounded-full text-sm mb-4 tracking-wide shadow">
            100 நாள் திட்டம் · 100-Day Plan
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
            முதல் 100 நாட்களில்
          </h2>
          <p className="text-muted-foreground text-lg mt-3">
            In the First 100 Days — Our Commitment to Action
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical red line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, #E11D48, #FACC15)" }}
          />

          <ol className="flex flex-col gap-0">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <li
                  key={idx}
                  className={`relative flex ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-0 mb-10`}
                >
                  {/* Content card */}
                  <div
                    className={`w-full md:w-5/12 ml-14 md:ml-0 ${
                      isEven ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
                    }`}
                  >
                    <div className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
                      <span
                        className="inline-block text-xs font-extrabold rounded-full px-3 py-1 mb-2"
                        style={{ background: "#FACC15", color: "#1a1a1a" }}
                      >
                        {item.day}
                      </span>
                      <p className="font-bold text-foreground text-base leading-snug">{item.event}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.eventEn}</p>
                    </div>
                  </div>

                  {/* Node — absolute centered on the line */}
                  <div className="absolute left-6 md:left-1/2 top-5 -translate-x-1/2 z-10">
                    <div
                      className="w-5 h-5 rounded-full border-4 border-background shadow-md"
                      style={{ background: "#E11D48", boxShadow: "0 0 0 3px #FACC15" }}
                    />
                  </div>

                  {/* Empty spacer for the other side on desktop */}
                  <div className="hidden md:block w-5/12" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
