import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#FAF7F0] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#E8EDE3] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#F0EBE0] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-[#E8EDE3] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            🐾 Dog Boarding &amp; Retreat
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3321] leading-tight mb-6">
            Where Every Tail{" "}
            <span className="text-[#3B5323]">Wags a Little</span>{" "}
            Longer
          </h1>
          <p className="text-[#6B7260] text-lg leading-relaxed mb-10 max-w-md">
            A cozy home-away-from-home for your beloved pup. We treat every dog
            like family — because that's exactly what they are.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#3B5323] text-[#FAF7F0] font-bold px-8 py-3.5 rounded-full hover:bg-[#5C7A3E] transition-colors text-sm"
            >
              Book a Stay
            </a>
            <a
              href="#services"
              className="border-2 border-[#3B5323] text-[#3B5323] font-bold px-8 py-3.5 rounded-full hover:bg-[#E8EDE3] transition-colors text-sm"
            >
              Our Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { icon: "🏡", label: "Home-like environment" },
              { icon: "❤️", label: "Loved like family" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-[#6B7260] font-semibold">
                <span className="text-base">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Hero photo */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Background blob */}
            <div className="absolute inset-0 bg-[#E8EDE3] rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] -rotate-3" />
            {/* Photo, slightly offset */}
            <div className="absolute inset-3 rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] overflow-hidden shadow-md">
              <Image
                src="/my-dog-1.jpeg"
                alt="A happy black-and-white border collie wearing a duck-print bandana"
                fill
                priority
                sizes="(max-width: 768px) 18rem, 24rem"
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-md px-5 py-3 flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-display font-bold text-[#2C3321] text-sm">5-Star Care</p>
                <p className="text-[#6B7260] text-xs">150+ happy pups</p>
              </div>
            </div>
            {/* Floating accent card 2 */}
            <div className="absolute -top-4 -right-6 bg-[#3B5323] text-[#FAF7F0] rounded-2xl shadow-md px-5 py-3">
              <p className="font-bold text-sm">Open 7 days</p>
              <p className="text-[10px] opacity-80">9 AM – 9 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
