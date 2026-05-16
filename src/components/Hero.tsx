import Image from "next/image";
import { PawPrint, Heart, Sparkle } from "./PawPrint";

export default function Hero() {
  return (
    <section className="relative bg-[#FAF7F0] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#E8EDE3] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#F0EBE0] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Scattered decorative paws */}
      <PawPrint className="absolute top-24 left-8 opacity-15 animate-float-slow" color="#3B5323" size={28} />
      <PawPrint className="absolute top-1/2 right-12 opacity-10 animate-float-slow delay-300 rotate-45" color="#3B5323" size={36} />
      <PawPrint className="absolute bottom-16 left-1/3 opacity-15 animate-float-slow delay-200 -rotate-12" color="#C4A882" size={24} />
      <Sparkle className="absolute top-32 right-1/4 opacity-40 animate-pulse-soft" color="#C4A882" size={18} />
      <Sparkle className="absolute bottom-32 right-16 opacity-50 animate-pulse-soft delay-300" color="#C4A882" size={14} />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-1.5 bg-[#E8EDE3] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 hover-wiggle cursor-default">
            <PawPrint color="#3B5323" size={14} className="animate-wag" />
            Dog Boarding &amp; Retreat
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3321] leading-tight mb-6">
            Where Every Tail{" "}
            <span className="text-[#3B5323] relative inline-block">
              Wags a Little
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 4 Q 50 0, 100 4 T 200 4"
                  stroke="#C4A882"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Longer
          </h1>
          <p className="text-[#6B7260] text-lg leading-relaxed mb-10 max-w-md">
            A cozy home-away-from-home for your beloved pup. We treat every dog
            like family — because that's exactly what they are.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group bg-[#3B5323] text-[#FAF7F0] font-bold px-8 py-3.5 rounded-full hover:bg-[#5C7A3E] transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm inline-flex items-center gap-2"
            >
              Book a Stay
              <span className="group-hover:animate-wag inline-block">
                <PawPrint color="#FAF7F0" size={14} />
              </span>
            </a>
            <a
              href="#services"
              className="border-2 border-[#3B5323] text-[#3B5323] font-bold px-8 py-3.5 rounded-full hover:bg-[#E8EDE3] transition-all hover:-translate-y-0.5 text-sm"
            >
              Our Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { icon: "🏡", label: "Home-like environment" },
              { icon: "❤️", label: "Loved like family" },
            ].map((b, i) => (
              <div
                key={b.label}
                className={`flex items-center gap-2 text-sm text-[#6B7260] font-semibold animate-fade-up delay-${(i + 2) * 100}`}
              >
                <span className="text-base inline-block hover-bounce cursor-default">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Hero photo */}
        <div className="relative flex justify-center animate-fade-up delay-200">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Background blob */}
            <div className="absolute inset-0 bg-[#E8EDE3] rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] -rotate-3" />
            {/* Photo */}
            <div className="absolute inset-3 rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] overflow-hidden shadow-md group">
              <Image
                src="/my-dog-1.jpeg"
                alt="A happy black-and-white border collie wearing a duck-print bandana"
                fill
                priority
                sizes="(max-width: 768px) 18rem, 24rem"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-md px-5 py-3 flex items-center gap-3 animate-float">
              <Heart color="#E8C9B5" size={20} className="animate-heart-pop" />
              <div>
                <p className="font-display font-bold text-[#2C3321] text-sm">5-Star Care</p>
                <p className="text-[#6B7260] text-xs">150+ happy pups</p>
              </div>
            </div>
            {/* Floating accent card 2 */}
            <div className="absolute -top-4 -right-6 bg-[#3B5323] text-[#FAF7F0] rounded-2xl shadow-md px-5 py-3 animate-float delay-300">
              <p className="font-bold text-sm">Open 7 days</p>
              <p className="text-[10px] opacity-80">9 AM – 9 PM</p>
            </div>
            {/* Floating sparkles around photo */}
            <Sparkle className="absolute -top-2 left-8 animate-pulse-soft" color="#C4A882" size={16} />
            <Sparkle className="absolute bottom-12 -right-2 animate-pulse-soft delay-400" color="#C4A882" size={12} />
          </div>
        </div>
      </div>
    </section>
  );
}
