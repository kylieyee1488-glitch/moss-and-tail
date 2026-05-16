import Image from "next/image";

export default function Spotlight() {
  return (
    <section className="bg-[#FAF7F0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#F4E2D8] rounded-[2.5rem] overflow-hidden grid md:grid-cols-2 gap-0 items-stretch relative">
          {/* Decorative dots */}
          <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-[#E8C9B5]" />
          <div className="absolute top-10 left-12 w-1.5 h-1.5 rounded-full bg-[#E8C9B5]" />
          <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-[#E8C9B5]" />

          {/* Photo side */}
          <div className="relative h-80 md:h-auto md:min-h-[520px]">
            <Image
              src="/my-dog-1.jpeg"
              alt="Thena, the resident border collie at Moss & Tail"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Text side */}
          <div className="p-8 md:p-14 flex flex-col justify-center">
            <span className="inline-block self-start bg-[#FAF7F0] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              ✦ Meet the Crew
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
              <span className="bg-[#FAF7F0] text-[#3B5323] text-xs font-bold px-4 py-2 rounded-full">
                🐾 Border Collie
              </span>
              <span className="bg-[#FAF7F0] text-[#3B5323] text-xs font-bold px-4 py-2 rounded-full">
                🎂 4 years young
              </span>
              <span className="bg-[#FAF7F0] text-[#3B5323] text-xs font-bold px-4 py-2 rounded-full">
                ⭐ Resident greeter
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
