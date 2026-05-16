const services = [
  {
    icon: "🌙",
    title: "Overnight Boarding",
    description:
      "Tucked in and tucked away — your pup gets their own cozy sleeping spot with fresh bedding, evening walks, and all the bedtime cuddles they deserve.",
    badge: "Most Popular",
  },
  {
    icon: "☀️",
    title: "Doggy Daycare",
    description:
      "Drop off in the morning, pick up one very tired and happy dog in the evening. Supervised play, outdoor time, and lots of new friends all day long.",
  },
  {
    icon: "🛁",
    title: "Bath & Groom",
    description:
      "Shampoo, blow-dry, nail trim, and a spritz of something lovely. Your pup will come home looking (and smelling) absolutely fabulous.",
  },
  {
    icon: "🐾",
    title: "Puppy Play Groups",
    description:
      "Carefully matched small groups so every pup plays comfortably. Great for socialisation and burning off that endless puppy energy.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F0EBE0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-[#E8EDE3] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2C3321] mb-4">
            How We Care for Your Pup
          </h2>
          <p className="text-[#6B7260] text-base leading-relaxed">
            Every service is designed with one thing in mind — making your dog
            feel safe, loved, and completely at home.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative bg-[#FAF7F0] rounded-3xl p-7 border border-[#E8EDE3] hover:border-[#C4A882] hover:shadow-sm transition-all"
            >
              {s.badge && (
                <span className="absolute top-5 right-5 bg-[#3B5323] text-[#FAF7F0] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {s.badge}
                </span>
              )}
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-display font-bold text-[#2C3321] text-xl mb-3">
                {s.title}
              </h3>
              <p className="text-[#6B7260] text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
