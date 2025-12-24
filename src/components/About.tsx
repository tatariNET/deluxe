import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={heroImage}
                alt="Deluxe Furniture showroom"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary hidden md:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="luxury-subheading mb-4">Our Story</p>
            <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Crafting Luxury
              <br />
              <span className="italic font-normal">Since 2018</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-body text-muted-foreground leading-relaxed">
                Deluxe Furniture has been Ethiopia's premier destination for luxury 
                home and office furnishings. We curate the finest pieces from around 
                the world, bringing European elegance and modern design to discerning 
                customers across the nation.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our commitment to quality, craftsmanship, and customer satisfaction 
                has established us as a trusted name in premium furniture. Each piece 
                in our collection is carefully selected to meet the highest standards 
                of design and durability.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-border">
              <div>
                <p className="font-heading text-3xl md:text-4xl font-medium text-foreground">
                  6+
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl font-medium text-foreground">
                  8
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Showrooms
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl font-medium text-foreground">
                  10K+
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Happy Clients
                </p>
              </div>
            </div>

            <Button variant="luxury" size="lg">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
