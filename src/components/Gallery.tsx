import Image from "next/image";
import { PawPrint, Heart } from "./PawPrint";

const photos = [
  { src: "/guest-1.jpeg", alt: "Golden retriever resting happily", span: "row-span-2" },
  { src: "/my-dog-2.jpeg", alt: "Three happy guest dogs sitting together", span: "col-span-2" },
  { src: "/guest-2.jpeg", alt: "A little Shih Tzu sitting on the lawn" },
  { src: "/guest-5.jpeg", alt: "Border collie relaxing with toys" },
  { src: "/guest-6.jpeg", alt: "A bright apricot poodle on the way over" },
  { src: "/guest-7.jpeg", alt: "Fluffy black and tan Pomeranian smiling" },
  { src: "/guest-9.jpeg", alt: "A black Labrador with a plush toy" },
];

export default function Gallery() {
  return (
    <section className="relative bg-[#F0EBE0] py-20 md:py-28 overflow-hidden">
      {/* Decorative paws */}
      <PawPrint className="absolute top-12 left-12 opacity-15 rotate-12 animate-float-slow" color="#3B5323" size={32} />
      <Heart className="absolute top-24 right-1/4 animate-float opacity-60" color="#E8C9B5" size={20} />
      <PawPrint className="absolute bottom-20 right-8 opacity-15 -rotate-12 animate-float-slow delay-300" color="#C4A882" size={40} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF7F0] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <PawPrint color="#3B5323" size={12} />
            Our Guests
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2C3321] mb-4">
            Meet the Happy Tails
          </h2>
          <p className="text-[#6B7260] text-base leading-relaxed">
            A few of the wonderful pups who've called Moss &amp; Tail their
            home-away-from-home.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden bg-[#E8EDE3] animate-fade-up delay-${Math.min((i + 1) * 100, 500)} ${p.span ?? ""}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Heart on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#FAF7F0]/90 backdrop-blur rounded-full p-2">
                  <Heart color="#E8C9B5" size={16} className="animate-heart-pop" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
