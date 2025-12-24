import { useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Collections", href: "#collections" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            {navLinks.map((link) => (
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
            <Button variant="luxury" size="sm">
              Get a Quote
            </Button>
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
            {navLinks.map((link) => (
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
            <li className="pt-2">
              <Button variant="luxury" className="w-full">
                Get a Quote
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
