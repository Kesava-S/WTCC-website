export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  tags?: string[];
  weekendOnly?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  subTitle?: string;
  bannerImage: string;
  notes?: string;
  items: MenuItem[];
  subcategories?: {
    title: string;
    items: MenuItem[];
  }[];
};

export const menuData: MenuCategory[] = [
  {
    id: "coffee-tea",
    title: "Coffee & Tea",
    bannerImage: "/images/coffee.jpg",
    subcategories: [
      {
        title: "Coffee",
        items: [
          { name: "Espresso", desc: "Rich and intense shot of our Wild Blend. Make it a double for 40p more", price: "£2.80" },
          { name: "Macchiato", desc: "Double shot of espresso with a dash of foamed milk", price: "£3.20" },
          { name: "Flat White", desc: "Double shot of espresso with steamed milk and a thin layer of foam", price: "£3.50" },
          { name: "Wild Americano", desc: "Double shot of espresso, brewed twice for maximum strength", price: "£3.50" },
          { name: "Latte", desc: "Double shot of espresso with steamed milk", price: "£3.50" },
          { name: "Cappuccino", desc: "Double shot of espresso with steamed and foamy milk", price: "£3.50" },
          { name: "Mocha", desc: "Double shot of espresso with chocolate and steamed milk", price: "£3.50" },
          { name: "French Pressed Coffee", desc: "Our special blend, 70% medium roast and 30% high roast", price: "£2.50" },
          { name: "Tricolore Macchiato", desc: "Three layers: honey, double espresso and foamed milk with coffee cream. Stir to sweeten", price: "£3.50" },
          { name: "Wild Campesino", desc: "Double espresso brewed twice, sweetened with homemade sugarcane and cinnamon syrup. How farmers drink it in Colombia", price: "£3.50" }
        ]
      },
      {
        title: "Specialty Tea & Hot Drinks",
        items: [
          { name: "Chai Latte", price: "£3.50" },
          { name: "Spiced Chai Latte Dirty", price: "£3.50" },
          { name: "Matcha Latte", price: "£3.80" },
          { name: "Hot Chocolate", price: "£3.70" },
          { name: "Vanilla Frappe", price: "£3.50" },
          { name: "Breakfast Tea", price: "£3.50" },
          { name: "Earl Grey Tea", price: "£3.00" },
          { name: "Green Tea", price: "£3.00" },
          { name: "Peppermint Tea", price: "£3.00" },
          { name: "Red Berries Tea", price: "£3.00" },
          { name: "Ginger & Sugarcane Tea", price: "£3.00" },
          { name: "Camomile Tea", price: "£3.00" },
          { name: "Tea of the Day", price: "£3.00" }
        ]
      }
    ],
    items: [],
    notes: "Coffee is made with our Wild Blend of medium and high roast Colombian beans. Add syrup 50p (caramel, vanilla, sugarcane, hazelnut) · Milk alternatives 30p (almond, coconut, soya, oat) · Decaf available · Any hot drink iced at no extra cost."
  },
  {
    id: "breakfast-lunch",
    title: "Breakfast & Lunch",
    bannerImage: "/images/bandeja_paisa.jpg",
    items: [
      { name: "Bandeja Paisa", desc: "Colombia's iconic dish: red kidney beans, white rice, shredded beef, Colombian chorizo, fried egg, fried ripe plantain, pork belly and avocado", price: "£18.00", weekendOnly: true },
      { name: "Colombian Arepa Breakfast", desc: "Milled-corn arepa with cheese and your choice of chicken, beef or beans, seasoned with Colombian hogao. Served with crispy bacon, hash brown, fried egg, avocado slices and fries", price: "£12.00" },
      { name: "English or Colombian Breakfast", desc: "White rice, avocado, fried egg and arepa, with a choice of red kidney beans or British baked beans, and a choice of Colombian chorizo or pork belly", price: "£12.00" }
    ]
  },
  {
    id: "arepas",
    title: "Arepas",
    bannerImage: "/images/arepa.jpg",
    items: [
      { name: "Beef Arepa", desc: "Corn bread arepa topped with shredded beef and traditional Colombian hogao (vegetables and spices)", price: "£7.50", tags: ["H"] },
      { name: "Chicken Arepa", desc: "Corn bread arepa topped with shredded chicken cooked in Colombian hogao", price: "£7.50", tags: ["H"] },
      { name: "Mushrooms & Chicken Arepa", price: "£7.50", tags: ["H"] },
      { name: "Veggie Arepa", desc: "Corn bread arepa topped with your choice of cheese and mushrooms, aubergine and cheese, or red kidney beans and cheese", price: "£7.50", tags: ["V"] },
      { name: "Cheese Arepa", desc: "Traditional corn bread topped with cheese", price: "£6.00", tags: ["H", "V"] },
      { name: "Plain Arepa", desc: "Cornmeal flatbread with cheese", price: "£4.00" }
    ]
  },
  {
    id: "empanadas",
    title: "Empanadas",
    bannerImage: "/images/empanadas.jpg",
    items: [
      { name: "Beef Empanada", desc: "Authentic Colombian empanada with a crispy cornmeal crust, filled with shredded beef", price: "£3.50", tags: ["H"] },
      { name: "Chicken Empanada", desc: "Crispy corn crust filled with seasoned chicken", price: "£3.50", tags: ["H"] },
      { name: "Chicken & Mushroom Empanada", desc: "Crispy cornmeal crust filled with shiitake mushrooms and seasoned chicken", price: "£3.50" },
      { name: "Veggie Empanada", desc: "Crispy cornmeal crust with your choice of aubergine, mushroom and peppers; mushrooms and cheese; or red kidney beans and cheese", price: "£3.50", tags: ["H", "V"] },
      { name: "Empanada Deal", desc: "3 mini empanadas", price: "£5.00" },
      { name: "Frozen Empanadas to take home", price: "3 for £10.00" }
    ]
  },
  {
    id: "starters-bakery",
    title: "Starters & Bakery",
    bannerImage: "/images/bakery.jpg",
    subcategories: [
      {
        title: "Patacones & Starters",
        items: [
          { name: "Patacones con Guacamole", desc: "4 fried green plantains topped with homemade guacamole", price: "£6.00", tags: ["V"] },
          { name: "Patacón con Hogao y Queso", desc: "4 fried green plantains topped with cheese and Colombian sauce", price: "£6.00", tags: ["V"] },
          { name: "Patacón with Beef or Chicken", desc: "4 fried green plantains topped with beef or chicken, Colombian sauce and cheese", price: "£7.50" },
          { name: "Nachos", desc: "Topped with red onion and tomato, served with melted cheese, salsa and fresh guacamole", price: "£4.00" },
          { name: "Chicharrón with Guacamole", desc: "Crispy pork belly pieces with handmade guacamole and lemon slices", price: "£6.00" }
        ]
      },
      {
        title: "Bakery",
        items: [
          { name: "Pandebono", desc: "Colombian cheese bread made with mozzarella and cheddar", price: "£2.50" },
          { name: "Cake of the day (slice)", desc: "Ask us for today's cakes", price: "£4.00" }
        ]
      },
      {
        title: "Extras",
        items: [
          { name: "Plantains (portion of 4)", price: "£3.00" },
          { name: "Chicharrón (pork belly)", price: "£5.00" },
          { name: "Shredded Beef", price: "£3.00" },
          { name: "Shredded Chicken", price: "£3.00" },
          { name: "Beans (frijoles)", price: "£3.00" }
        ]
      }
    ],
    items: []
  },
  {
    id: "drinks",
    title: "Drinks",
    bannerImage: "/images/juice.jpg",
    subcategories: [
      {
        title: "Tropical Fresh Juices",
        items: [
          { name: "Sugarcane with Lemon", price: "£2.50" },
          { name: "Mango", price: "£4.50" },
          { name: "Guanábana (Soursop)", price: "£4.50" },
          { name: "Lulo", price: "£4.50" },
          { name: "Maracuyá (Passion Fruit)", price: "£4.50" },
          { name: "Mora (Blackberry)", price: "£4.50" }
        ]
      },
      {
        title: "Soft Drinks & Juices",
        items: [
          { name: "Coke or Diet Coke", price: "£2.00" },
          { name: "Coke Zero", price: "£2.00" },
          { name: "Fanta", price: "£2.00" },
          { name: "Sprite", price: "£2.00" },
          { name: "Red Bull", price: "£3.00" },
          { name: "Water", price: "£1.50" },
          { name: "Cranberry Juice", price: "£2.00" },
          { name: "Orange Juice", price: "£2.00" },
          { name: "Manzana Postobón", price: "£3.50" },
          { name: "Uva Postobón", price: "£3.50" },
          { name: "Colombiana Postobón", price: "£3.50" }
        ]
      }
    ],
    items: []
  },
  {
    id: "beer-wine-spirits",
    title: "Beer, Wine & Spirits",
    bannerImage: "/images/beer.jpg",
    subcategories: [
      {
        title: "Beer & Cider",
        items: [
          { name: "Club Colombia", price: "£5.00" },
          { name: "Desperados", price: "£5.00" },
          { name: "Peroni Nastro Azzurro", price: "£4.00" },
          { name: "Corona", price: "£4.00" },
          { name: "Kopparberg Cider", price: "£5.00" }
        ]
      },
      {
        title: "Spirits & Shots",
        items: [
          { name: "Aguardiente (bottle)", price: "£50.00" },
          { name: "Aguardiente (single shot)", price: "£3.00" },
          { name: "Rum, Vodka, Gin, Whiskey or Tequila (single shot)", price: "£3.00" }
        ]
      },
      {
        title: "Wine",
        items: [
          { name: "Red Wine (Merlot or Cabernet Sauvignon)", price: "£4.00" },
          { name: "White Wine (Chardonnay or Sauvignon Blanc)", price: "£4.00" },
          { name: "Prosecco", price: "£5.00" }
        ]
      }
    ],
    items: [],
    notes: "Spirits: Make it a double for £2 more. Please drink responsibly. Over 18s only."
  }
];
