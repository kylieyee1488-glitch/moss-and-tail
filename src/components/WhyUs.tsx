const features = [
  {
    icon: "📹",
    title: "24/7 Monitoring",
    description:
      "Eyes on your pup around the clock. Our team and live monitoring system never sleep, so we're always ready if your dog needs us.",
  },
  {
    icon: "🎥",
    title: "Full CCTV Coverage",
    description:
      "Every play area and resting space is covered by CCTV — for your peace of mind and our team's quick response.",
  },
  {
    icon: "🌳",
    title: "Big Outdoor Compound",
    description:
      "A spacious, secure compound where dogs can stretch their legs, sprint, sniff, and play to their heart's content.",
  },
  {
    icon: "🏠",
    title: "Free Roam at Home",
    description:
      "No cages. Our pups are free to roam throughout the house — couch naps, kitchen visits, and follow-the-human moments included.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#FAF7F0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-[#E8EDE3] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Why Moss &amp; Tail
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2C3321] mb-4">
            A Safer, Happier Kind of Stay
          </h2>
          <p className="text-[#6B7260] text-base leading-relaxed">
            We've built a home — not a kennel. Here's what makes Moss &amp; Tail
            a place dogs (and their humans) come back to.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#F0EBE0] rounded-3xl p-7 border border-[#E8EDE3] flex flex-col items-start hover:border-[#C4A882] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#3B5323] flex items-center justify-center text-2xl mb-5">
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-[#2C3321] text-lg mb-3">
                {f.title}
              </h3>
              <p className="text-[#6B7260] text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
