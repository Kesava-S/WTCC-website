import Image from "next/image";
import Link from "next/link";

export default function Highlights() {
  const highlights = [
    {
      name: "Wild Campesino",
      desc: "Double espresso brewed twice, sweetened with homemade sugarcane and cinnamon syrup, just like Colombian farmers drink it",
      price: "£3.50",
      image: "/images/coffee.jpg",
      signature: true,
      tag: null,
    },
    {
      name: "Tricolore Macchiato",
      desc: "Three layers: honey, double espresso and foamed milk with coffee cream",
      price: "£3.50",
      image: "/images/coffee.jpg",
      signature: true,
      tag: null,
    },
    {
      name: "Colombian Arepa Breakfast",
      desc: "Corn arepa with cheese and chicken, beef or beans, hogao, bacon, hash brown, fried egg, avocado and fries",
      price: "£12.00",
      image: "/images/arepa.jpg",
      signature: false,
      tag: null,
    },
    {
      name: "Beef Empanada",
      desc: "Crispy cornmeal crust filled with shredded beef",
      price: "£3.50",
      image: "/images/empanadas.jpg",
      signature: false,
      tag: "H",
    },
    {
      name: "Patacones con Guacamole",
      desc: "Four fried green plantains topped with homemade guacamole",
      price: "£6.00",
      image: "/images/patacones.jpg",
      signature: false,
      tag: "V",
    },
    {
      name: "Lulo Fresh Juice",
      desc: "A tangy, tropical Colombian favourite",
      price: "£4.50",
      image: "/images/juice.jpg",
      signature: false,
      tag: null,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="font-eyebrow text-3xl md:text-4xl text-[var(--color-colombian-red)] mb-2">
          Straight from Colombia
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-[var(--color-navy)]">
          Guest favourites
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <div key={i} className="bg-white rounded-[18px] overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col group">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {item.signature && (
                <div className="absolute top-4 left-4 bg-[var(--color-colombian-yellow)] text-[var(--color-navy)] font-bold text-xs px-3 py-1 rounded-full shadow-sm z-10">
                  Signature
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2 gap-4">
                <h3 className="font-heading font-bold text-xl text-[var(--color-navy)] flex items-center gap-2">
                  {item.name}
                  {item.tag && (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-[10px] font-bold text-gray-600">
                      {item.tag}
                    </span>
                  )}
                </h3>
                <span className="font-bold text-[var(--color-colombian-blue)] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed flex-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center flex flex-col items-center">
        <Link
          href="/menu"
          className="inline-block border-2 border-[var(--color-colombian-blue)] text-[var(--color-colombian-blue)] hover:bg-[var(--color-colombian-blue)] hover:text-white font-bold py-3 px-10 rounded-2xl transition-colors mb-4"
        >
          See the full menu
        </Link>
        <p className="text-[var(--color-muted)] text-xs italic opacity-80">
          Halal (H) & vegetarian (V) options · Any hot drink iced at no extra cost
        </p>
      </div>
    </section>
  );
}
