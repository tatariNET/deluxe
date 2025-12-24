import { useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";
import QuoteDialog from "@/components/QuoteDialog";

const navLinks = {
  en: [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  am: [
    { name: "መነሻ", href: "#" },
    { name: "ምርቶች", href: "#products" },
    { name: "ክምችቶች", href: "#collections" },
    { name: "ስለ እኛ", href: "#about" },
    { name: "አግኙን", href: "#contact" },
  ],
} as const;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = navLinks[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-soft py-4">
      <div className="luxury-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Deluxe Furniture Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="luxury-link text-sm font-body font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-sm transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <a
              href="tel:+251974656565"
              className="flex items-center gap-2 text-sm font-body text-foreground/80 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+251 974 656 565</span>
            </a>
            <QuoteDialog>
              <Button variant="luxury" size="sm">
                {language === "en" ? "Get a Quote" : "ግዢ ጥያቄ"}
              </Button>
            </QuoteDialog>
            <div className="flex items-center gap-1 text-xs font-body">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={
                  language === "en"
                    ? "px-2 py-1 rounded-sm bg-secondary text-foreground"
                    : "px-2 py-1 rounded-sm text-foreground/70 hover:bg-secondary"
                }
              >
                EN
              </button>
              <span className="text-muted-foreground">/</span>
              <button
                type="button"
                onClick={() => setLanguage("am")}
                className={
                  language === "am"
                    ? "px-2 py-1 rounded-sm bg-secondary text-foreground"
                    : "px-2 py-1 rounded-sm text-foreground/70 hover:bg-secondary"
                }
              >
                አማ
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 pb-4 border-t border-border pt-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-2 text-base font-body text-foreground hover:bg-secondary rounded-sm transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border mt-2">
              <a
                href="tel:+251974656565"
                className="flex items-center gap-2 py-3 px-2 text-base font-body text-foreground"
              >
                <Phone className="w-4 h-4" />
                +251 974 656 565
              </a>
            </li>
            <li className="pt-2 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-body text-muted-foreground">
                  {language === "en" ? "Language" : "ቋንቋ"}
                </span>
                <div className="flex items-center gap-1 text-xs font-body">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={
                      language === "en"
                        ? "px-2 py-1 rounded-sm bg-secondary text-foreground"
                        : "px-2 py-1 rounded-sm text-foreground/70 hover:bg-secondary"
                    }
                  >
                    EN
                  </button>
                  <span className="text-muted-foreground">/</span>
                  <button
                    type="button"
                    onClick={() => setLanguage("am")}
                    className={
                      language === "am"
                        ? "px-2 py-1 rounded-sm bg-secondary text-foreground"
                        : "px-2 py-1 rounded-sm text-foreground/70 hover:bg-secondary"
                    }
                  >
                    አማ
                  </button>
                </div>
              </div>
              <QuoteDialog>
                <Button variant="luxury" className="w-full">
                  {language === "en" ? "Get a Quote" : "ግዢ ጥያቄ"}
                </Button>
              </QuoteDialog>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
