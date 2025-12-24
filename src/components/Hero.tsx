import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxurious living room with elegant furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Content */}
      <div className="luxury-container relative z-10 pt-24">
        <div className="max-w-2xl">
          <p className="luxury-subheading text-background/90 mb-4 animate-fade-in">
            Premium Furniture Collection
          </p>
          <h1 className="luxury-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-background leading-[1.1] mb-6 animate-fade-in-delay-1">
            Crafted for
            <br />
            <span className="italic font-normal">Elegance</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-background/85 max-w-lg mb-8 font-light animate-fade-in-delay-2">
            Transform your space with our exquisite collection of handcrafted furniture, 
            designed for those who appreciate refined luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
            <Button variant="luxury-outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground">
              Explore Collection
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="luxury-ghost" size="lg" className="text-background hover:text-background/80">
              View Lookbook
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-background/60 text-xs uppercase tracking-widest font-body">
          Scroll
        </span>
        <div className="w-px h-12 bg-background/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-background animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
