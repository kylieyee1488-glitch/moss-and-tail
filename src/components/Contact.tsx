"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#E8EDE3] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        {/* Left: text */}
        <div>
          <span className="inline-block bg-[#FAF7F0] text-[#3B5323] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2C3321] mb-5">
            Ready to Book a Stay?
          </h2>
          <p className="text-[#6B7260] text-base leading-relaxed mb-10 max-w-md">
            Fill in the form and we'll get back to you within one business day.
            Can't wait to meet your furry family member!
          </p>

          <div className="flex flex-col gap-5">
            {[
              { icon: "📍", label: "Address", value: "Jalan 11/12, Seksyen 11, Petaling Jaya" },
              { icon: "📞", label: "Phone", value: "011 3350 1618" },
              { icon: "✉️", label: "Email", value: "mossandtail@gmail.com" },
              { icon: "🕐", label: "Hours", value: "Mon – Sun, 9 AM – 9 PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F0] flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#6B7260]">
                    {item.label}
                  </p>
                  <p className="text-[#2C3321] font-semibold text-sm mt-0.5">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-[#FAF7F0] rounded-3xl p-8 border border-[#E8EDE3] shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="font-display font-bold text-[#2C3321] text-2xl mb-3">
                Paw-some!
              </h3>
              <p className="text-[#6B7260] text-sm leading-relaxed">
                We've received your message and will be in touch within one
                business day. We can't wait to welcome your pup!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7260] mb-1.5">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Kim"
                    className="w-full rounded-xl border border-[#E8EDE3] bg-[#F0EBE0] px-4 py-3 text-sm text-[#2C3321] placeholder-[#a0a89a] focus:outline-none focus:border-[#3B5323] focus:ring-1 focus:ring-[#3B5323]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7260] mb-1.5">
                    Dog's Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Mochi"
                    className="w-full rounded-xl border border-[#E8EDE3] bg-[#F0EBE0] px-4 py-3 text-sm text-[#2C3321] placeholder-[#a0a89a] focus:outline-none focus:border-[#3B5323] focus:ring-1 focus:ring-[#3B5323]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7260] mb-1.5">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-[#E8EDE3] bg-[#F0EBE0] px-4 py-3 text-sm text-[#2C3321] placeholder-[#a0a89a] focus:outline-none focus:border-[#3B5323] focus:ring-1 focus:ring-[#3B5323]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7260] mb-1.5">
                  Service Interested In
                </label>
                <select
                  className="w-full rounded-xl border border-[#E8EDE3] bg-[#F0EBE0] px-4 py-3 text-sm text-[#2C3321] focus:outline-none focus:border-[#3B5323] focus:ring-1 focus:ring-[#3B5323]"
                >
                  <option value="">Select a service…</option>
                  <option>Overnight Boarding</option>
                  <option>Doggy Daycare</option>
                  <option>Bath &amp; Groom</option>
                  <option>Puppy Play Groups</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7260] mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us a little about your pup — breed, age, anything we should know!"
                  className="w-full rounded-xl border border-[#E8EDE3] bg-[#F0EBE0] px-4 py-3 text-sm text-[#2C3321] placeholder-[#a0a89a] focus:outline-none focus:border-[#3B5323] focus:ring-1 focus:ring-[#3B5323] resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#3B5323] text-[#FAF7F0] font-bold text-sm py-3.5 rounded-full hover:bg-[#5C7A3E] transition-colors mt-1"
              >
                Send Message 🐾
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
