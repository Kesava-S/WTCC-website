"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [openStatusText, setOpenStatusText] = useState("");

  useEffect(() => {
    const checkOpenStatus = () => {
      // Create a date object for the current time in UK timezone
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/London" }));
      const hour = now.getHours();

      if (hour >= 9 && hour < 17) {
        setIsOpen(true);
        setOpenStatusText("Open now · until 5pm");
      } else {
        setIsOpen(false);
        const day = now.getDay();
        // If it's after 5pm, it opens tomorrow at 9am
        // If it's before 9am, it opens today at 9am
        const when = hour >= 17 ? "tomorrow" : "today";
        setOpenStatusText(`Closed · opens 9am ${when}`);
      }
    };

    checkOpenStatus();
    // Update every minute
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 animate-fade-up">
        {/* Eyebrow */}
        <p className="font-eyebrow text-3xl md:text-4xl text-[var(--color-colombian-red)]">
          Single-origin Colombian coffee · Roasted in London
        </p>

        {/* Headline */}
        <h1 className="font-heading font-bold text-5xl md:text-6xl text-[var(--color-navy)] leading-tight">
          A taste of Colombia in West Ealing
        </h1>

        {/* Sub-line */}
        <p className="text-lg md:text-xl text-[var(--color-charcoal)] max-w-lg leading-relaxed">
          Artisan coffee, homemade arepas and empanadas, and fresh tropical juices.
        </p>

        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 bg-[var(--color-soft-band)] px-4 py-2 rounded-full shadow-sm">
          <Star className="text-[var(--color-colombian-blue)] fill-[var(--color-colombian-blue)]" size={18} />
          <span className="font-bold text-sm text-[var(--color-navy)]">
            4.9 <span className="font-normal opacity-90">from 170+ Google reviews</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/menu"
            className="bg-[var(--color-colombian-blue)] hover:bg-[var(--color-colombian-blue-hover)] text-white font-bold py-3 px-8 rounded-2xl text-center transition-colors shadow-md"
          >
            View Menu
          </Link>
          <a
            href="https://maps.google.com/?q=Wild+Thing+Colombian+Coffee,+148+Broadway,+London+W13+0TL"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[var(--color-colombian-blue)] text-[var(--color-colombian-blue)] hover:bg-[var(--color-colombian-blue)] hover:text-white font-bold py-3 px-8 rounded-2xl text-center transition-colors"
          >
            Get Directions
          </a>
        </div>

        {/* Live Status */}
        <div className="flex items-center gap-2 text-sm pt-2">
          <div className={`w-2.5 h-2.5 rounded-full ${isOpen ? "bg-green-500" : "bg-gray-400"}`}></div>
          <span className="font-medium opacity-80">{openStatusText}</span>
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-lg mx-auto md:max-w-none">
        {/* Yellow Blob Behind */}
        <div className="absolute -inset-4 bg-[var(--color-colombian-yellow)]/20 rounded-[2rem] transform rotate-3 scale-105 z-0"></div>
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[5/4]">
          <Image
            src="/images/hero.jpg"
            alt="Colombian coffee and arepa on a cafe table"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
