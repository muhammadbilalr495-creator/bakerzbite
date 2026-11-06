import cake from "@/assets/cake.jpg";
import pastry from "@/assets/pastry.jpg";
import cookie from "@/assets/cookie.jpg";
import pie from "@/assets/pie.jpg";
import merch from "@/assets/merch.jpg";
import hero from "@/assets/hero.jpg";

export const images = { cake, pastry, cookie, pie, merch, hero };

export type Category = "Cakes" | "Pastries" | "Cookies" | "Pies" | "Merchandise";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  ingredients: string[];
  specs: { label: string; value: string }[];
  tags: string[]; // e.g. Eggless, Bestseller, Chocolate
};

const p = (
  id: string,
  name: string,
  category: Category,
  price: number,
  image: string,
  description: string,
  ingredients: string[],
  specs: [string, string][],
  tags: string[],
): Product => ({
  id,
  name,
  category,
  price,
  image,
  description,
  ingredients,
  specs: specs.map(([label, value]) => ({ label, value })),
  tags,
});

export const products: Product[] = [
  p("c1", "Triple Chocolate Cake", "Cakes", 2800, cake, "Three layers of moist cocoa sponge with silky dark ganache.", ["Flour", "Cocoa", "Dark chocolate", "Butter", "Eggs", "Sugar", "Cream"], [["Weight", "1 kg"], ["Serves", "8–10"], ["Shelf life", "3 days chilled"]], ["Chocolate", "Bestseller"]),
  p("c2", "Red Velvet Cake", "Cakes", 3000, cake, "Velvety crimson sponge layered with cream-cheese frosting.", ["Flour", "Buttermilk", "Cocoa", "Cream cheese", "Butter", "Eggs"], [["Weight", "1 kg"], ["Serves", "8–10"], ["Shelf life", "3 days chilled"]], ["Bestseller"]),
  p("c3", "Eggless Vanilla Cake", "Cakes", 2200, cake, "Light vanilla bean sponge, perfect for every celebration.", ["Flour", "Milk", "Vanilla bean", "Butter", "Sugar", "Yogurt"], [["Weight", "1 kg"], ["Serves", "8"], ["Shelf life", "2 days chilled"]], ["Eggless"]),
  p("p1", "Butter Croissant", "Pastries", 350, pastry, "Flaky, golden and laminated with 27 layers of French butter.", ["Flour", "French butter", "Yeast", "Milk", "Sugar", "Salt"], [["Weight", "90 g"], ["Pieces", "1"], ["Best", "Same day"]], ["Bestseller"]),
  p("p2", "Chocolate Éclair", "Pastries", 420, pastry, "Choux pastry filled with chocolate crème pâtissière.", ["Flour", "Eggs", "Butter", "Milk", "Dark chocolate", "Sugar"], [["Weight", "80 g"], ["Pieces", "1"], ["Best", "1 day chilled"]], ["Chocolate"]),
  p("p3", "Pain au Chocolat", "Pastries", 400, pastry, "Buttery viennoiserie wrapped around two batons of chocolate.", ["Flour", "Butter", "Dark chocolate", "Yeast", "Milk"], [["Weight", "95 g"], ["Pieces", "1"], ["Best", "Same day"]], ["Chocolate"]),
  p("k1", "Chocolate Chip Cookies", "Cookies", 900, cookie, "Chewy centres, crisp edges and plenty of chocolate chips.", ["Flour", "Brown sugar", "Butter", "Chocolate chips", "Eggs", "Vanilla"], [["Pack", "6 cookies"], ["Weight", "300 g"], ["Shelf life", "7 days"]], ["Chocolate", "Bestseller"]),
  p("k2", "Oatmeal Raisin Cookies", "Cookies", 850, cookie, "Wholesome oats, plump raisins and a hint of cinnamon.", ["Oats", "Flour", "Raisins", "Butter", "Cinnamon", "Brown sugar"], [["Pack", "6 cookies"], ["Weight", "300 g"], ["Shelf life", "7 days"]], ["Eggless"]),
  p("k3", "Double Choc Cookies", "Cookies", 950, cookie, "Rich cocoa dough loaded with white and dark chunks.", ["Flour", "Cocoa", "Dark & white chocolate", "Butter", "Sugar"], [["Pack", "6 cookies"], ["Weight", "320 g"], ["Shelf life", "7 days"]], ["Chocolate"]),
  p("i1", "Classic Apple Pie", "Pies", 1800, pie, "Lattice-topped pie with cinnamon-spiced apples.", ["Apples", "Flour", "Butter", "Cinnamon", "Sugar", "Lemon"], [["Size", "9 inch"], ["Serves", "6–8"], ["Shelf life", "3 days"]], ["Bestseller", "Eggless"]),
  p("i2", "Blueberry Pie", "Pies", 2000, pie, "Jammy blueberries baked in an all-butter crust.", ["Blueberries", "Flour", "Butter", "Sugar", "Cornstarch"], [["Size", "9 inch"], ["Serves", "6–8"], ["Shelf life", "3 days"]], ["Eggless"]),
  p("i3", "Pecan Pie", "Pies", 2200, pie, "Caramel-rich filling crowned with toasted pecans.", ["Pecans", "Flour", "Butter", "Eggs", "Brown sugar", "Maple syrup"], [["Size", "9 inch"], ["Serves", "8"], ["Shelf life", "4 days"]], []),
  p("m1", "Bakerz Bite Mug", "Merchandise", 1200, merch, "Glazed stoneware mug in signature cocoa brown.", ["Stoneware", "Food-safe glaze"], [["Capacity", "350 ml"], ["Care", "Dishwasher safe"]], []),
  p("m2", "Bakerz Bite Tote Bag", "Merchandise", 1500, merch, "Heavy canvas tote for your bakery runs.", ["100% cotton canvas"], [["Size", "38 × 42 cm"], ["Care", "Hand wash"]], ["Bestseller"]),
  p("m3", "Bakerz Bite Glass", "Merchandise", 800, merch, "Clear tumbler printed with the Bakerz Bite mark.", ["Tempered glass"], [["Capacity", "400 ml"], ["Care", "Dishwasher safe"]], []),
  p("m4", "Bakerz Bite Serving Tray", "Merchandise", 2500, merch, "Solid wood tray, laser-engraved with our logo.", ["Acacia wood", "Food-safe oil finish"], [["Size", "35 × 18 cm"], ["Care", "Wipe clean"]], []),
];

export const offers = [
  { title: "Weekend Cake Fest", discount: "20% OFF", details: "All whole cakes every Saturday & Sunday.", valid: "Valid every weekend", code: "WEEKEND20" },
  { title: "Cookie Combo", discount: "Buy 2 Get 1", details: "Buy any two cookie packs and get a third free.", valid: "Till 31 Dec", code: "COOKIE3" },
  { title: "Morning Pastry Deal", discount: "15% OFF", details: "All pastries before 10 AM, dine-in or takeaway.", valid: "Daily, 8–10 AM", code: "EARLYBITE" },
  { title: "Merch Bundle", discount: "Rs. 500 OFF", details: "Mug + Tote bag together at a special price.", valid: "While stocks last", code: "BBMERCH" },
  { title: "Birthday Special", discount: "Free Topper", details: "Free personalised cake topper on birthday orders.", valid: "Order 2 days ahead", code: "BDAY" },
  { title: "Pie Friday", discount: "10% OFF", details: "Every whole pie, every Friday.", valid: "Fridays only", code: "PIEDAY" },
];

export const contact = {
  email: "hello@bakerzbite.com",
  phone: "+92 300 1234567",
  address: "12 Baker Street, Clifton, Karachi, Pakistan",
  hours: "Mon–Sun, 8:00 AM – 10:00 PM",
};

export const formatPrice = (n: number) => `Rs. ${n.toLocaleString()}`;
