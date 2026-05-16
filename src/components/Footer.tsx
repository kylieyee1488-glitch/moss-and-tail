import Image from "next/image";

const links = {
  Services: [
    "Overnight Boarding",
    "Doggy Daycare",
    "Bath & Groom",
    "Puppy Play Groups",
  ],
  Company: ["About Us", "How It Works", "FAQs", "Careers"],
};

export default function Footer() {
  return (
    <footer className="bg-[#2C3321] text-[#FAF7F0]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="Moss & Tail logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="leading-tight">
                <span className="block font-display font-bold text-[#FAF7F0] text-lg tracking-wide">
                  Moss &amp; Tail
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#C4A882] font-semibold">
                  Pet Hotel &amp; Retreat
                </span>
              </div>
            </div>
            <p className="text-[#a0a89a] text-sm leading-relaxed max-w-xs mb-6">
              A warm, loving retreat for your dog. Because every pup deserves a
              holiday too.
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2 text-[#a0a89a]">
                <span>📍</span> Jalan 11/12, Seksyen 11, Petaling Jaya
              </li>
              <li className="flex items-center gap-2 text-[#a0a89a]">
                <span>📞</span> 011 3350 1618
              </li>
              <li className="flex items-center gap-2 text-[#a0a89a]">
                <span>✉️</span> mossandtail@gmail.com
              </li>
              <li className="flex items-center gap-2 text-[#a0a89a]">
                <span>🕐</span> Mon – Sun, 9 AM – 9 PM
              </li>
            </ul>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-bold text-sm uppercase tracking-widest text-[#C4A882] mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#a0a89a] hover:text-[#FAF7F0] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#3B5323] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7260] text-xs">
            © {new Date().getFullYear()} Moss &amp; Tail. All rights reserved. Made with 🐾
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-[#6B7260] hover:text-[#a0a89a] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
