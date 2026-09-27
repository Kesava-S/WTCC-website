import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      text: "The best Colombian coffee I've ever had. A great choice of breakfast and lunch, and such a warm, welcoming atmosphere.",
      name: "Muhammad K.",
    },
    {
      text: "Homemade food and brilliant service. The aubergine arepa, empanada and lemon cake were all delicious, and the coffee is marvellous.",
      name: "Tina S.",
    },
    {
      text: "Excellent coffee, super fun music and fantastic service. The sugarcane juice was so refreshing.",
      name: "Briony G.",
    },
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="font-heading font-bold text-6xl text-[var(--color-navy)] leading-none mb-2">4.9</span>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-[var(--color-colombian-yellow)] fill-[var(--color-colombian-yellow)]" size={24} />
            ))}
          </div>
          <span className="text-sm font-bold text-[var(--color-muted)]">from 170+ Google reviews</span>
        </div>

        <p className="font-eyebrow text-3xl md:text-4xl text-[var(--color-colombian-red)] mb-2">
          Kind words
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-[var(--color-navy)]">
          What our guests say
        </h2>
      </div>

      {/* Swipeable container on mobile, grid on desktop */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex-none w-[85vw] md:w-auto snap-center flex flex-col justify-between">
            <div>
              <Quote className="text-[var(--color-colombian-yellow)] opacity-30 mb-4" size={48} />
              <p className="text-[var(--color-charcoal)] text-lg leading-relaxed mb-8">
                &quot;{review.text}&quot;
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-soft-band)] flex items-center justify-center font-bold text-[var(--color-colombian-blue)]">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-[var(--color-navy)] text-sm">{review.name}</p>
                <p className="text-xs text-[var(--color-muted)] flex items-center gap-1">
                  <Star className="text-gray-400 fill-gray-400" size={10} /> Google review
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 md:mt-12">
        <a
          href="https://maps.google.com/?q=Wild+Thing+Colombian+Coffee,+148+Broadway,+London+W13+0TL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bold text-[var(--color-colombian-blue)] hover:text-[var(--color-colombian-blue-hover)] transition-colors"
        >
          Read all reviews on Google &rarr;
        </a>
      </div>
      
      {/* Hide scrollbar styles inline */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
