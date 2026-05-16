"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-sm border-b border-[#E8EDE3]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Moss & Tail logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <div className="leading-tight">
            <span className="block font-display font-bold text-[#3B5323] text-lg tracking-wide">
              Moss &amp; Tail
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-[#6B7260] font-semibold">
              Pet Hotel &amp; Retreat
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-[#3B5323] hover:text-[#5C7A3E] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#3B5323] text-[#FAF7F0] text-sm font-bold px-5 py-2 rounded-full hover:bg-[#5C7A3E] transition-colors"
          >
            Book a Stay
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#3B5323] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#3B5323] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#3B5323] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E8EDE3] bg-[#FAF7F0] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-[#3B5323]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#3B5323] text-[#FAF7F0] text-sm font-bold px-5 py-2.5 rounded-full text-center hover:bg-[#5C7A3E] transition-colors"
          >
            Book a Stay
          </a>
        </div>
      )}
    </header>
  );
}
