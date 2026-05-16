import Image from "next/image";
import { Heart, Sparkle, PawPrint } from "./PawPrint";

export default function Spotlight() {
  return (
    <section className="bg-[#FAF7F0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#F4E2D8] rounded-[2.5rem] overflow-hidden grid md:grid-cols-2 gap-0 items-stretch relative">
          {/* Floating decorative elements */}
          <Heart className="absolute top-6 right-1/2 translate-x-32 animate-float" color="#E8C9B5" size={24} />
          <Sparkle className="absolute top-10 left-1/2 -translate-x-24 animate-pulse-soft" color="#E8C9B5" size={14} />
          <PawPrint className="absolute bottom-6 right-8 opacity-30 -rotate-12 animate-float-slow" color="#E8C9B5" size={32} />
          <PawPrint className="absolute top-1/2 left-1/2 -translate-x-32 opacity-20 rotate-45 animate-float-slow delay-200" color="#E8C9B5" size={24} />

          {/* Photo side */}
          <div className="relative h-80 md:h-auto md:min-h-[520px] group overflow-hidden">
            <Image
              src="/my-dog-1.jpeg"
              alt="Thena, the resident border collie at Moss & Tail"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Text side */}
          <div className="p-8 md:p-14 flex flex-col justify-center relative z-10">
            <span className="inline-flex items-center self-start gap-1.5 bg-[#FAF7F0] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Sparkle color="#3B5323" size={12} className="animate-pulse-soft" />
              Meet the Crew
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3321] mb-5 leading-tight">
              Say hi to Thena, our resident greeter
            </h2>
            <p className="text-[#6B7260] text-base leading-relaxed mb-4">
              Thena is the heart of Moss &amp; Tail. She welcomes every guest
              with a wagging tail, shows the shy ones around, and makes sure
              everyone has a buddy by bedtime.
            </p>
            <p className="text-[#6B7260] text-base leading-relaxed mb-8">
              Her favourite things? Duck-print bandanas, kitchen sunbeams, and
              gently herding the smaller pups towards the play yard.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: "🐾", label: "Border Collie" },
                { icon: "🎂", label: "4 years young" },
                { icon: "⭐", label: "Resident greeter" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="group/tag bg-[#FAF7F0] text-[#3B5323] text-xs font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 cursor-default hover:-translate-y-0.5 transition-transform"
                >
                  <span className="inline-block group-hover/tag:animate-wiggle">{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
