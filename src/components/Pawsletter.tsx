"use client";

import { useState } from "react";

export default function Pawsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-[#FAF7F0] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#FBE9DC] rounded-[2.5rem] px-6 py-12 md:px-16 md:py-16 text-center relative overflow-hidden">
          {/* Decorative paw prints */}
          <span className="absolute top-6 left-8 text-2xl opacity-30 select-none">🐾</span>
          <span className="absolute top-12 right-12 text-xl opacity-30 select-none">🐾</span>
          <span className="absolute bottom-8 left-16 text-xl opacity-30 select-none">🐾</span>
          <span className="absolute bottom-14 right-8 text-2xl opacity-30 select-none">🐾</span>

          <div className="relative">
            {/* Illustration */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FAF7F0] mb-6 shadow-sm">
              <span className="text-4xl">💌</span>
            </div>

            <span className="inline-block bg-[#FAF7F0] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              The Pawsletter
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3321] mb-4 leading-tight max-w-xl mx-auto">
              Wagging tales, straight to your inbox
            </h2>
            <p className="text-[#6B7260] text-base leading-relaxed mb-8 max-w-md mx-auto">
              Monthly updates from the pack — guest stories, pup-care tips, and
              the occasional shameless photo dump. No spam, just snuggles.
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-3 bg-[#FAF7F0] rounded-full px-6 py-3 text-[#3B5323] font-bold text-sm">
                <span className="text-xl">🐾</span>
                You're on the list — welcome to the pack!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-full bg-[#FAF7F0] border-2 border-transparent px-5 py-3 text-sm text-[#2C3321] placeholder-[#a0a89a] focus:outline-none focus:border-[#3B5323]"
                />
                <button
                  type="submit"
                  className="bg-[#3B5323] text-[#FAF7F0] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#5C7A3E] transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
