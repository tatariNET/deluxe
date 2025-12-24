import { Button } from "@/components/ui/button";
import productSofa from "@/assets/product-sofa-1.jpg";
import productChair from "@/assets/product-chair-1.jpg";
import productTable from "@/assets/product-table-1.jpg";
import productBed from "@/assets/product-bed-1.jpg";

const products = [
  {
    id: 1,
    name: "Milano Sectional Sofa",
    category: "Living Room",
    image: productSofa,
    isNew: true,
  },
  {
    id: 2,
    name: "Velvet Accent Chair",
    category: "Seating",
    image: productChair,
    isNew: true,
  },
  {
    id: 3,
    name: "Marble Dining Set",
    category: "Dining",
    image: productTable,
    isNew: false,
  },
  {
    id: 4,
    name: "Tufted King Bed",
    category: "Bedroom",
    image: productBed,
    isNew: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-ivory">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="luxury-subheading mb-3">Curated Selection</p>
            <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl">
              Featured Products
            </h2>
          </div>
          <Button variant="luxury-outline" size="default">
            View All Products
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <article key={product.id} className="group">
              {/* Product Image */}
              <a href="#" className="block relative overflow-hidden bg-muted mb-5">
                <div className="aspect-[4/5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1.5 font-body">
                    New
                  </span>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </a>
              
              {/* Product Info */}
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-body mb-1">
                  {product.category}
                </p>
                <h3 className="font-heading text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                  <a href="#">{product.name}</a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
