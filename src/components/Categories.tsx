import sofaImage from "@/assets/category-sofa.jpg";
import diningImage from "@/assets/category-dining.jpg";
import bedroomImage from "@/assets/category-bedroom.jpg";
import officeImage from "@/assets/category-office.jpg";
import { useLanguage } from "@/lib/language";

const categories = [
  {
    nameEn: "Living Room",
    nameAm: "መኖሪያ ክፍል",
    subtitleEn: "Sofas & Seating",
    subtitleAm: "ሶፋዎች እና መቀመጫዎች",
    image: sofaImage,
    href: "#",
  },
  {
    nameEn: "Dining",
    nameAm: "የመብላት ክፍል",
    subtitleEn: "Tables & Chairs",
    subtitleAm: "ጠረጴዛዎች እና ወንበሮች",
    image: diningImage,
    href: "#",
  },
  {
    nameEn: "Bedroom",
    nameAm: "መኝታ ክፍል",
    subtitleEn: "Beds & Storage",
    subtitleAm: "መኝታዎች እና ማከማቻ",
    image: bedroomImage,
    href: "#",
  },
  {
    nameEn: "Office",
    nameAm: "ቢሮ",
    subtitleEn: "Desks & Chairs",
    subtitleAm: "ጠረጴዛዎች እና ወንበሮች",
    image: officeImage,
    href: "#",
  },
];

const Categories = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  return (
    <section id="collections" className="py-20 md:py-28 bg-background">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="luxury-subheading mb-3">
            {isEn ? "Our Collections" : "የእቃት ስብስቦቻችን"}
          </p>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl">
            {isEn ? "Explore by Category" : "በምድብ ይመልከቱ"}
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.nameEn}
              href={category.href}
              className="group relative overflow-hidden aspect-[3/4] bg-muted"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={isEn ? category.nameEn : category.nameAm}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-background/70 text-xs uppercase tracking-widest font-body mb-1">
                  {isEn ? category.subtitleEn : category.subtitleAm}
                </p>
                <h3 className="text-background font-heading text-2xl md:text-3xl font-medium">
                  {isEn ? category.nameEn : category.nameAm}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-background/80 text-sm font-body opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="uppercase tracking-widest text-xs">
                    {isEn ? "Explore" : "ይመልከቱ"}
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
