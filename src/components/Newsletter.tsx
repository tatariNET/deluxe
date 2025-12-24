import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="luxury-container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="luxury-subheading text-background/60 mb-4">
            Stay Updated
          </p>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-background">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-body text-background/70 mb-10 text-lg font-light">
            Get the latest updates on new collections, exclusive offers, and interior design inspiration.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-14 bg-transparent border-background/30 text-background placeholder:text-background/50 focus:border-background rounded-none"
            />
            <Button
              type="submit"
              variant="luxury-outline"
              size="lg"
              className="border-background text-background hover:bg-background hover:text-foreground whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
