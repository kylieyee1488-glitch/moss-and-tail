import Image from "next/image";

const reviews = [
  {
    name: "Felicia",
    dog: "Hero, Pomeranian",
    photo: "/guest-7.jpeg",
    rating: 5,
    text: "Hero had a good time at Kylie's place! I can feel he is really happy there and upset when going home. He has his new buddies, Cooper and Thena. They played and went for walk together. Kylie cooked his dinner everyday and concerns about his condition and his food allergy. Constant updates on Hero and a peace of mind when I boarded Hero at her place.",
  },
  {
    name: "Preetha Raaj",
    dog: "Buddy, Poodle",
    photo: "/guest-6.jpeg",
    rating: 5,
    text: "Kylie took excellent care of my dog, Buddy. She was patient, attentive, and followed all feeding instruction carefully. Buddy can be a little particular, but he was comfortable and happy with her. I truly appreciate the updates and the peace of mind she gave me. Highly recommended!",
  },
  {
    name: "Adeline Ng",
    dog: "Sparkle, Mix",
    photo: "/guest-4.jpeg",
    rating: 5,
    text: "Kylie was very friendly and helpful. Sparkle as very attached to her throughout her stay. Her place has huge garden for Sparkle to run around, which is what I love too. Will definitely be back again. Thank you for everything Kylie.",
  },
  {
    name: "Tay C.C",
    dog: "Crystal, Shih Tzu",
    photo: "/guest-2.jpeg",
    rating: 5,
    text: "Spacious and clean space, my shihtzu definitely enjoyed her time there. Daily videos and pictures to keep me assured. Accommodating to help my dog medicated on her eyes 3 times a day. Will definitely visit again!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#C4A882] text-base">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#FAF7F0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-[#E8EDE3] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Happy Families
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2C3321] mb-4">
            What Dog Parents Are Saying
          </h2>
          <p className="text-[#6B7260] text-base leading-relaxed">
            Don't just take our word for it — hear from the families (and the
            tails) who keep coming back.
          </p>
        </div>

        {/* Review grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#F0EBE0] rounded-3xl p-7 border border-[#E8EDE3]"
            >
              <Stars count={r.rating} />
              <p className="text-[#2C3321] text-sm leading-relaxed mt-4 mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FAF7F0]">
                  <Image
                    src={r.photo}
                    alt={`${r.dog} photo`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#2C3321] text-sm">{r.name}</p>
                  <p className="text-[#6B7260] text-xs">{r.dog}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating strip */}
        <div className="mt-12 bg-[#3B5323] rounded-3xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-[#FAF7F0] text-2xl">
              5.0 out of 5
            </p>
            <p className="text-[#C4A882] text-sm mt-1">Based on 150+ reviews</p>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-[#C4A882] text-2xl">★</span>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-[#FAF7F0] text-[#3B5323] font-bold text-sm px-7 py-3 rounded-full hover:bg-[#E8EDE3] transition-colors whitespace-nowrap"
          >
            Join Our Happy Families
          </a>
        </div>
      </div>
    </section>
  );
}
