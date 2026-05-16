"use client";

import { useState } from "react";
import { PawPrint, Heart, Sparkle } from "./PawPrint";

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
          {/* Decorative animated paws & sparkles */}
          <PawPrint className="absolute top-6 left-8 opacity-25 -rotate-12 animate-float-slow" color="#E8C9B5" size={28} />
          <PawPrint className="absolute top-12 right-12 opacity-25 rotate-12 animate-float-slow delay-200" color="#E8C9B5" size={22} />
          <PawPrint className="absolute bottom-8 left-16 opacity-25 rotate-45 animate-float-slow delay-300" color="#E8C9B5" size={20} />
          <PawPrint className="absolute bottom-14 right-8 opacity-25 -rotate-45 animate-float-slow delay-400" color="#E8C9B5" size={26} />
          <Sparkle className="absolute top-1/2 left-12 animate-pulse-soft" color="#E8C9B5" size={14} />
          <Sparkle className="absolute top-1/4 right-1/4 animate-pulse-soft delay-300" color="#E8C9B5" size={12} />
          <Heart className="absolute top-8 right-1/3 animate-float" color="#E8C9B5" size={18} />

          <div className="relative">
            {/* Illustration */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FAF7F0] mb-6 shadow-sm animate-float">
              <span className="text-4xl inline-block animate-wag">💌</span>
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
              <div className="inline-flex items-center gap-3 bg-[#FAF7F0] rounded-full px-6 py-3 text-[#3B5323] font-bold text-sm animate-fade-up">
                <PawPrint color="#3B5323" size={18} className="animate-wag" />
                You're on the list — welcome to the pack!
                <Heart color="#E8C9B5" size={18} className="animate-heart-pop" />
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
                  className="flex-1 rounded-full bg-[#FAF7F0] border-2 border-transparent px-5 py-3 text-sm text-[#2C3321] placeholder-[#a0a89a] focus:outline-none focus:border-[#3B5323] transition-colors"
                />
                <button
                  type="submit"
                  className="group bg-[#3B5323] text-[#FAF7F0] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#5C7A3E] transition-all hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap inline-flex items-center justify-center gap-2"
                >
                  Subscribe
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
