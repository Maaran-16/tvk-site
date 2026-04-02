"use client";

import { promises } from "@/lib/tvk-data";
import { cn } from "@/lib/utils";

export default function PromisesSection() {
  return (
    <section id="promises" className="py-24 px-4 md:px-8"
      style={{ background: "linear-gradient(180deg, #fff7ed 0%, #fff 100%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary text-primary-foreground font-bold px-5 py-1.5 rounded-full text-sm mb-4 tracking-wide shadow">
            வாக்குறுதி · Election Promises
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-balance">
            TVK வாக்குறுதிகள்
          </h2>
          <p className="text-muted-foreground text-lg mt-3">
            மக்களுக்கான உறுதிமொழி — Our Promises to the People
          </p>
        </div>

        {/* Promises grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {promises.map((p, idx) => (
            <PromiseCard key={p.id} promise={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PromiseCard({
  promise,
  index,
}: {
  promise: (typeof promises)[0];
  index: number;
}) {
  const isRed = promise.color === "red";

  return (
    <article
      className={cn(
        "group relative rounded-2xl p-6 cursor-default shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border",
        isRed
          ? "bg-primary border-primary/20 text-primary-foreground"
          : "bg-secondary border-secondary/40 text-secondary-foreground"
      )}
    >
      {/* Background number watermark */}
      <span className="absolute -bottom-3 -right-2 text-8xl font-black opacity-[0.07] select-none leading-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-md",
        isRed ? "bg-white/20" : "bg-primary/15"
      )}>
        {promise.icon}
      </div>

      {/* Title */}
      <h3 className="font-extrabold text-lg leading-tight mb-1">{promise.titleTa}</h3>
      <p className={cn(
        "text-xs font-semibold mb-3 uppercase tracking-widest",
        isRed ? "text-secondary" : "text-primary"
      )}>
        {promise.titleEn}
      </p>

      {/* Description */}
      <p className={cn(
        "text-sm leading-relaxed",
        isRed ? "text-white/85" : "text-foreground/80"
      )}>
        {promise.descTa}
      </p>

      {/* Hover accent line */}
      <div className={cn(
        "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 rounded-b-2xl",
        isRed ? "bg-secondary" : "bg-primary"
      )} />
    </article>
  );
}
