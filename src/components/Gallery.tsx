import Image from "next/image";

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
    <section className="bg-[#F0EBE0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#FAF7F0] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
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
              className={`relative rounded-3xl overflow-hidden bg-[#E8EDE3] ${p.span ?? ""}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
