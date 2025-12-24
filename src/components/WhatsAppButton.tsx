import { Facebook } from "lucide-react";
import { useLanguage } from "@/lib/language";

const FACEBOOK_URL = "https://www.facebook.com/Deluxe-Furniture-2116243088652426";

const WhatsAppButton = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-blue-700 transition-colors"
    >
      <Facebook className="w-4 h-4" />
      <span className="hidden sm:inline">
        {isEn ? "Message us on Facebook" : "በፌስቡክ መልእክት ይላኩልን"}
      </span>
    </a>
  );
};

export default WhatsAppButton;
