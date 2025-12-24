import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on all orders within Ethiopia",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Premium materials with 5-year warranty",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated customer service team",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-y border-border">
      <div className="luxury-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-5 border border-border">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
