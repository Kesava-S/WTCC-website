import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-page-bg)] relative pt-12 pb-8 mt-12">
      {/* Tricolour Stripe Top */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="h-full bg-[var(--color-colombian-yellow)] w-1/3"></div>
        <div className="h-full bg-[var(--color-colombian-blue)] w-1/3"></div>
        <div className="h-full bg-[var(--color-colombian-red)] w-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col mb-3">
              <span className="font-heading font-bold text-2xl text-[var(--color-page-bg)] leading-none">
                Wild Thing
              </span>
              <span className="text-[10px] tracking-widest text-[var(--color-colombian-blue)] font-bold mt-1">
                COLOMBIAN COFFEE
              </span>
            </div>
            <p className="text-sm opacity-90 max-w-xs mx-auto md:mx-0">
              Single-origin Colombian coffee, artisanally roasted in London.
            </p>
          </div>

          {/* Column 2: Info */}
          <div className="flex flex-col space-y-2 text-sm opacity-90">
            <p>148 Broadway, West Ealing, London W13 0TL</p>
            <p>Open every day, 9am to 5pm</p>
            <p>
              <a href="tel:+447710580743" className="hover:text-[var(--color-colombian-yellow)] transition-colors">
                07710 580743
              </a>
            </p>
          </div>

          {/* Column 3: Social & Action */}
          <div className="flex flex-col items-center md:items-end justify-between h-full">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://www.instagram.com/wildthing.coffee/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--color-colombian-yellow)] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/p/Wild-Thing-Colombian-Coffee-100087474487922/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--color-colombian-yellow)] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.19-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* WhatsApp Icon SVG custom */}
              <a href="https://wa.me/447710580743" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[var(--color-colombian-yellow)] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
            </div>
            
            <a href="#" className="text-sm font-bold hover:text-[var(--color-colombian-yellow)] transition-colors mt-auto">
              Back to top ↑
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs opacity-75 space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center gap-4">
            <span>&copy; 2026 Wild Thing Colombian Coffee</span>
            <Link href="/privacy" className="hover:text-[var(--color-colombian-yellow)] transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-[var(--color-colombian-yellow)] transition-colors">Cookie Notice</Link>
          </div>
          <div className="opacity-50 hover:opacity-100 transition-opacity">
            <a href="https://www.selfera.co.uk" target="_blank" rel="noopener noreferrer">
              Website by Selfera
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
