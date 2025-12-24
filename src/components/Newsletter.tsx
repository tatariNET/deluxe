import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/language";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { language } = useLanguage();
  const isEn = language === "en";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: isEn ? "Successfully subscribed!" : "በተሳካ ሁኔታ ተመዝግበዋል!",
        description: isEn
          ? "Thank you for joining our newsletter."
          : "ወደ ዜና ማስታወቂያችን ስለተቀላቀሉ እናመሰግናለን።",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="luxury-container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="luxury-subheading text-background/60 mb-4">
            {isEn ? "Stay Updated" : "በዘመኑ ይሁኑ"}
          </p>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-background">
            {isEn ? "Subscribe to Our Newsletter" : "ወደ ዜና ማስታወቂያችን ይመዝገቡ"}
          </h2>
          <p className="font-body text-background/70 mb-10 text-lg font-light">
            {isEn
              ? "Get the latest updates on new collections, exclusive offers, and interior design inspiration."
              : "ስለ አዳዲስ ስብስቦች፣ ልዩ ግብዣዎች እና የውስጥ ዲዛይን እሴቶች የቅርብ ዜና ያግኙ።"}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder={isEn ? "Enter your email" : "ኢሜል አድራሻዎን ያስገቡ"}
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
              {isEn ? "Subscribe" : "ይመዝገቡ"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
