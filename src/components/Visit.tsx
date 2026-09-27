"use client";

import { useEffect, useState } from "react";
import { Utensils, ShoppingBag, Truck, Car, Baby, Phone, MapPin } from "lucide-react";

export default function Visit() {
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  useEffect(() => {
    // 0 = Sunday, 1 = Monday, etc.
    setCurrentDay(new Date().getDay());
  }, []);

  const days = [
    { name: "Monday", index: 1 },
    { name: "Tuesday", index: 2 },
    { name: "Wednesday", index: 3 },
    { name: "Thursday", index: 4 },
    { name: "Friday", index: 5 },
    { name: "Saturday", index: 6 },
    { name: "Sunday", index: 0 },
  ];

  const services = [
    { name: "Dine-in", icon: <Utensils size={16} /> },
    { name: "Takeaway", icon: <ShoppingBag size={16} /> },
    { name: "Delivery", icon: <Truck size={16} /> },
    { name: "Kerbside pickup", icon: <Car size={16} /> },
    { name: "Wheelchair accessible", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> },
    { name: "Good for kids", icon: <Baby size={16} /> },
  ];

  return (
    <section id="visit" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Col: Details */}
        <div>
          <p className="font-eyebrow text-3xl md:text-4xl text-[var(--color-colombian-red)] mb-2">
            Find us
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[var(--color-navy)] mb-4">
            Come and say hola!
          </h2>
          <p className="text-[var(--color-charcoal)] text-lg mb-6">
            On Broadway, in the heart of West Ealing
          </p>
          <p className="font-bold text-[var(--color-navy)] mb-8 flex items-start gap-2">
            <MapPin className="text-[var(--color-colombian-blue)] shrink-0 mt-0.5" size={20} />
            148 Broadway, West Ealing, London W13 0TL
          </p>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
            <h3 className="font-bold text-[var(--color-navy)] mb-4 text-center">Opening hours</h3>
            <div className="space-y-2 text-sm">
              {days.map((day) => (
                <div 
                  key={day.name} 
                  className={`flex justify-between py-1.5 px-3 rounded-lg ${currentDay === day.index ? 'bg-[var(--color-colombian-blue)] text-white font-bold' : 'text-[var(--color-charcoal)]'}`}
                >
                  <span>{day.name}</span>
                  <span>9:00 am – 5:00 pm</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {services.map((svc) => (
              <div key={svc.name} className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-navy)] bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                <span className="text-[var(--color-colombian-blue)]">{svc.icon}</span>
                {svc.name}
              </div>
            ))}
          </div>

          <p className="text-xs text-[var(--color-muted)] mb-8">
            Cards, contactless and Ticket Restaurant accepted
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="tel:+447710580743"
              className="flex-1 min-w-[140px] bg-[var(--color-colombian-blue)] hover:bg-[var(--color-colombian-blue-hover)] text-white font-bold py-3 px-6 rounded-2xl text-center transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call
            </a>
            <a
              href="https://wa.me/447710580743"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] border-2 border-[var(--color-colombian-blue)] text-[var(--color-colombian-blue)] hover:bg-[var(--color-colombian-blue)] hover:text-white font-bold py-3 px-6 rounded-2xl text-center transition-colors flex items-center justify-center gap-2"
            >
              {/* Simple WhatsApp SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Wild+Thing+Colombian+Coffee,+148+Broadway,+London+W13+0TL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[var(--color-colombian-yellow)] hover:opacity-90 text-[var(--color-navy)] font-bold py-3 px-6 rounded-2xl text-center transition-opacity shadow-sm flex items-center justify-center gap-2 mt-2 lg:mt-0 lg:flex-none lg:w-auto"
            >
              Get directions
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/wildthing.coffee/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold text-[var(--color-navy)] hover:text-[var(--color-colombian-blue)] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> <span className="text-sm">@wildthing.coffee</span>
            </a>
            <a href="https://www.facebook.com/p/Wild-Thing-Colombian-Coffee-100087474487922/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-navy)] hover:text-[var(--color-colombian-blue)] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.19-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Col: Map */}
        <div className="h-full min-h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.218520790892!2d-0.32353002302302383!3d51.50918111057457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760df768f54ef7%3A0xc3b4412c1b92c421!2sWild%20Thing%20Colombian%20Coffee!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Wild Thing Colombian Coffee"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
