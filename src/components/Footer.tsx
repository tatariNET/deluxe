import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language";

const footerLinks = {
  products: [
    { name: "Living Room", href: "#" },
    { name: "Bedroom", href: "#" },
    { name: "Dining", href: "#" },
    { name: "Office", href: "#" },
    { name: "Outdoor", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Story", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "Delivery Info", href: "#" },
    { name: "Returns Policy", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Size Guide", href: "#" },
  ],
};

const Footer = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  return (
    <footer id="contact" className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="luxury-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="font-heading text-2xl font-semibold text-foreground">
                Deluxe
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-body">
                Furniture
              </span>
            </a>
            <p className="font-body text-muted-foreground mb-8 max-w-sm leading-relaxed">
              {isEn
                ? "Premium furniture for discerning tastes. Crafting elegant pieces that transform houses into homes since 2018."
                : "ለተለዩ ጣዕሞች የተሰሩ ከፍተኛ የቤት እና የቢሮ ስክርናቶች። ከ 2018 ጀምሮ ቤቶችን ወደ ቤት የሚቀይሩ ውብ እቃዎችን እንፈጥራለን።"}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div className="font-body text-sm">
                  <a href="tel:+251974656565" className="text-foreground hover:text-primary transition-colors">
                    +251 974 656 565
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div className="font-body text-sm">
                  <a href="mailto:info@deluxefurniture-et.com" className="text-foreground hover:text-primary transition-colors">
                    info@deluxefurniture-et.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div className="font-body text-sm text-muted-foreground">
                  Tor Hayloch, Addis Ababa, Ethiopia
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div className="font-body text-sm text-muted-foreground">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </div>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-6">
              {isEn ? "Products" : "ምርቶች"}
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-6">
              {isEn ? "Company" : "ኩባንያ"}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-6">
              {isEn ? "Support" : "ድጋፍ"}
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="luxury-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-muted-foreground">
              {isEn
                ? "© 2024 Deluxe Furniture. All rights reserved."
                : "© 2024 ዴለክስ ፈርኒቸር። ሁሉም መብቶች የተጠበቁ ናቸው።"}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/Deluxe-Furniture-2116243088652426"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/deluxefurniture_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                href="https://t.me/Deluxefurniture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
