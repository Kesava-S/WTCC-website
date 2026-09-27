"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuData } from "@/data/menuData";

export default function MenuContent() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.map(group => document.getElementById(group.id));
      const scrollPosition = window.scrollY + 200; // offset for nav and tabs

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(menuData[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 140; // offset
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-[var(--color-soft-band)] py-12 px-4 text-center">
        <p className="font-eyebrow text-4xl text-[var(--color-colombian-red)] mb-2">
          Our menu
        </p>
        <h1 className="font-heading font-bold text-5xl md:text-6xl text-[var(--color-navy)] mb-4">
          ¡Buen provecho!
        </h1>
        <p className="text-lg text-[var(--color-charcoal)]">
          Everything made with love, the Colombian way.
        </p>
        <div className="mt-4 flex justify-center gap-4 text-sm font-bold text-[var(--color-muted)]">
          <span className="flex items-center gap-1">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-[10px] text-gray-700">H</span> Halal
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-[10px] text-gray-700">V</span> Vegetarian
          </span>
        </div>
      </section>

      {/* Sticky Tabs */}
      <div className="sticky top-[72px] md:top-[88px] z-40 bg-[var(--color-page-bg)]/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {menuData.map((group) => (
              <button
                key={group.id}
                onClick={() => scrollToSection(group.id)}
                className={`flex-none py-4 px-4 sm:px-6 font-bold text-sm md:text-base whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === group.id
                    ? "border-[var(--color-colombian-blue)] text-[var(--color-colombian-blue)]"
                    : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-navy)]"
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        {menuData.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-40">
            {/* Banner Image */}
            <div className="relative h-48 md:h-56 w-full rounded-[18px] overflow-hidden shadow-sm mb-8">
              <Image src={group.bannerImage} alt={group.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <h2 className="font-heading font-bold text-4xl text-white drop-shadow-md text-center px-4">
                  {group.title}
                </h2>
              </div>
            </div>

            {/* Subcategories or direct items */}
            <div className="space-y-10">
              {group.subcategories?.map((sub) => (
                <div key={sub.title}>
                  <h3 className="font-heading font-bold text-2xl text-[var(--color-colombian-blue)] mb-6 pb-2 border-b border-gray-200">
                    {sub.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {sub.items.map((item, i) => (
                      <MenuItemCard key={i} item={item} />
                    ))}
                  </div>
                </div>
              ))}

              {group.items.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {group.items.map((item, i) => (
                    <MenuItemCard key={i} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Notes */}
            {group.notes && (
              <p className="mt-8 text-sm italic text-[var(--color-muted)] border-t border-gray-100 pt-4">
                {group.notes}
              </p>
            )}
          </section>
        ))}
      </div>

      {/* Bottom */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-16 pt-8 border-t border-gray-200">
        <p className="text-sm text-[var(--color-muted)] mb-6">
          Prices and availability may change. Please tell our team about any allergies before ordering.
        </p>
        <Link
          href="/#visit"
          className="inline-block bg-[var(--color-colombian-blue)] hover:bg-[var(--color-colombian-blue-hover)] text-white font-bold py-3 px-10 rounded-2xl transition-colors shadow-sm"
        >
          Visit us
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

function MenuItemCard({ item }: { item: any }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-start gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-bold text-[var(--color-navy)]">{item.name}</h4>
          {item.weekendOnly && (
            <span className="bg-[var(--color-colombian-red)] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
              Weekends only
            </span>
          )}
          {item.tags?.map((tag: string) => (
            <span key={tag} className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-[10px] font-bold text-gray-700 shrink-0">
              {tag}
            </span>
          ))}
        </div>
        <span className="font-bold text-[var(--color-colombian-blue)] whitespace-nowrap shrink-0">
          {item.price}
        </span>
      </div>
      {item.desc && (
        <p className="text-sm text-[var(--color-muted)] mt-1 leading-relaxed">
          {item.desc}
        </p>
      )}
    </div>
  );
}
