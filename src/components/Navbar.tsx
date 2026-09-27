"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/#about" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Visit Us", href: "/#visit" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[var(--color-page-bg)] shadow-md py-2" : "bg-[var(--color-page-bg)] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-heading font-bold text-2xl text-[var(--color-navy)] leading-none">
              Wild Thing
            </span>
            <span className="text-[10px] tracking-widest text-[var(--color-colombian-blue)] font-bold mt-1">
              COLOMBIAN COFFEE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-body font-bold text-[var(--color-navy)] hover:text-[var(--color-colombian-blue)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a
              href="tel:+447710580743"
              className="bg-[var(--color-colombian-blue)] hover:bg-[var(--color-colombian-blue-hover)] text-white font-bold py-2 px-6 rounded-2xl transition-colors shadow-sm"
            >
              Call us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-navy)] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-page-bg)] shadow-lg border-t border-gray-100 flex flex-col py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body font-bold text-lg text-[var(--color-navy)] hover:text-[var(--color-colombian-blue)] block"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+447710580743"
              onClick={() => setIsOpen(false)}
              className="bg-[var(--color-colombian-blue)] text-white text-center font-bold py-3 rounded-2xl w-full block"
            >
              Call us
            </a>
          </div>
        )}

        {/* Tricolour Stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-1 flex">
          <div className="h-full bg-[var(--color-colombian-yellow)] w-1/3"></div>
          <div className="h-full bg-[var(--color-colombian-blue)] w-1/3"></div>
          <div className="h-full bg-[var(--color-colombian-red)] w-1/3"></div>
        </div>
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-[88px]"></div>
    </>
  );
}
