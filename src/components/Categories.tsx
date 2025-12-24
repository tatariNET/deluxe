import sofaImage from "@/assets/category-sofa.jpg";
import diningImage from "@/assets/category-dining.jpg";
import bedroomImage from "@/assets/category-bedroom.jpg";
import officeImage from "@/assets/category-office.jpg";

const categories = [
  {
    name: "Living Room",
    subtitle: "Sofas & Seating",
    image: sofaImage,
    href: "#",
  },
  {
    name: "Dining",
    subtitle: "Tables & Chairs",
    image: diningImage,
    href: "#",
  },
  {
    name: "Bedroom",
    subtitle: "Beds & Storage",
    image: bedroomImage,
    href: "#",
  },
  {
    name: "Office",
    subtitle: "Desks & Chairs",
    image: officeImage,
    href: "#",
  },
];

const Categories = () => {
  return (
    <section id="collections" className="py-20 md:py-28 bg-background">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="luxury-subheading mb-3">Our Collections</p>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl">
            Explore by Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden aspect-[3/4] bg-muted"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-background/70 text-xs uppercase tracking-widest font-body mb-1">
                  {category.subtitle}
                </p>
                <h3 className="text-background font-heading text-2xl md:text-3xl font-medium">
                  {category.name}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-background/80 text-sm font-body opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="uppercase tracking-widest text-xs">
                    Explore
                  </span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
