import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/language";

const features = [
  {
    icon: Truck,
    titleEn: "Free Delivery",
    titleAm: "ነጻ ማጓጓዣ",
    descriptionEn: "Free shipping on all orders within Ethiopia",
    descriptionAm: "በኢትዮጵያ ውስጥ በሚደረጉ ሁሉም ግዢዎች ላይ ነጻ መጓጓዣ",
  },
  {
    icon: Shield,
    titleEn: "Quality Guarantee",
    titleAm: "የጥራት ዋስትና",
    descriptionEn: "Premium materials with 5-year warranty",
    descriptionAm: "ከፍተኛ ጥራት ያላቸው እቃዎች ከ5 ዓመት የዋስትና ጊዜ ጋር",
  },
  {
    icon: Headphones,
    titleEn: "Expert Support",
    titleAm: "የባለሙያ ድጋፍ",
    descriptionEn: "Dedicated customer service team",
    descriptionAm: "የተሟላ የደንበኛ አገልግሎት ቡድን",
  },
  {
    icon: RefreshCw,
    titleEn: "Easy Returns",
    titleAm: "ቀላል መመለሻ",
    descriptionEn: "30-day hassle-free return policy",
    descriptionAm: "በ30 ቀን ውስጥ በቀላሉ የመመለሻ አገልግሎት",
  },
];

const Features = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-16 md:py-20 bg-background border-y border-border">
      <div className="luxury-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature) => (
            <div
              key={feature.titleEn}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-5 border border-border">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                {isEn ? feature.titleEn : feature.titleAm}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {isEn ? feature.descriptionEn : feature.descriptionAm}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
