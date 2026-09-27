import { Coffee, Utensils, ShieldCheck, Leaf } from "lucide-react";

export default function About() {
  const features = [
    { icon: <Coffee size={24} />, label: "Single-origin Colombian coffee", color: "text-[var(--color-colombian-blue)]" },
    { icon: <Utensils size={24} />, label: "Homemade Colombian food", color: "text-[var(--color-colombian-yellow)]" },
    { icon: <ShieldCheck size={24} />, label: "Halal options", color: "text-[var(--color-colombian-red)]" },
    { icon: <Leaf size={24} />, label: "Vegetarian friendly", color: "text-[var(--color-colombian-blue)]" },
  ];

  return (
    <section id="about" className="bg-[var(--color-soft-band)] relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative leaf shapes optional, skipping for cleanliness or adding subtle blobs */}
      
      <div className="max-w-3xl mx-auto text-center">
        {/* Tricolour mini line */}
        <div className="h-1 w-24 mx-auto flex mb-6">
          <div className="h-full bg-[var(--color-colombian-yellow)] w-1/3"></div>
          <div className="h-full bg-[var(--color-colombian-blue)] w-1/3"></div>
          <div className="h-full bg-[var(--color-colombian-red)] w-1/3"></div>
        </div>

        <p className="font-eyebrow text-3xl md:text-4xl text-[var(--color-colombian-red)] mb-2">
          Our story
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-[var(--color-navy)] mb-8">
          Colombian flavour, roasted in London
        </h2>
        
        <div className="space-y-6 text-lg text-[var(--color-charcoal)] leading-relaxed text-left md:text-center">
          <p>
            At Wild Thing, Mauricio and the team bring a little piece of Colombia to West Ealing. Our coffee is single-origin Colombian, artisanally roasted in London, and made the way it&apos;s enjoyed back home, from a bold Wild Americano to our Wild Campesino, sweetened with homemade sugarcane and cinnamon syrup, just like Colombian farmers drink it.
          </p>
          <p>
            Alongside the coffee, we make proper Colombian food: crispy empanadas, warm arepas topped with hogao, patacones, pandebono and, at weekends, a full Bandeja Paisa. Add a fresh lulo or passion fruit juice, some Latin music and a warm welcome, and you&apos;ve found your new favourite spot.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className={`p-4 bg-white rounded-full shadow-sm ${f.color}`}>
                {f.icon}
              </div>
              <span className="text-sm font-bold text-[var(--color-navy)] max-w-[120px]">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm italic text-[var(--color-muted)]">
          Loved on Google for great coffee · great desserts · great tea
        </p>
      </div>
    </section>
  );
}
