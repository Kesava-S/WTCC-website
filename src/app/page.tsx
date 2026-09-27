import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Specials from "@/components/Specials";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Wild Thing Colombian Coffee",
    "image": "https://www.wildthing.coffee/images/hero.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "148 Broadway",
      "addressLocality": "West Ealing",
      "addressRegion": "London",
      "postalCode": "W13 0TL",
      "addressCountry": "UK"
    },
    "telephone": "+447710580743",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "servesCuisine": ["Colombian", "Latin American"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Highlights />
      <About />
      <Specials />
      <Reviews />
      <Visit />
    </>
  );
}
