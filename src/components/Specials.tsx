export default function Specials() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-colombian-red)]/10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
          
          <div>
            <div className="inline-block bg-[var(--color-colombian-red)] text-white font-bold text-xs px-3 py-1 rounded-full mb-4">
              Weekends only
            </div>
            <h3 className="font-heading font-bold text-2xl text-[var(--color-navy)] mb-2">
              Bandeja Paisa
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Colombia&apos;s iconic dish: beans, rice, shredded beef, chorizo, fried egg, ripe plantain, pork belly and avocado.
            </p>
          </div>
          <div className="font-bold text-xl text-[var(--color-colombian-blue)]">
            £18.00
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-colombian-yellow)]/20 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
          
          <div>
            <div className="inline-block bg-[var(--color-colombian-yellow)] text-[var(--color-navy)] font-bold text-xs px-3 py-1 rounded-full mb-4">
              Take home
            </div>
            <h3 className="font-heading font-bold text-2xl text-[var(--color-navy)] mb-2">
              Frozen empanadas
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Enjoy them at home, just as delicious as in the café. Pop them in the oven and share the flavour.
            </p>
          </div>
          <div className="font-bold text-xl text-[var(--color-colombian-blue)]">
            3 for £10
          </div>
        </div>
      </div>
    </section>
  );
}
