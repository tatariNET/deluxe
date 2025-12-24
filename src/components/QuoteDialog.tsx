import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/language";

interface QuoteDialogProps {
  children: React.ReactNode;
}

const QuoteDialog = ({ children }: QuoteDialogProps) => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    toast({
      title: isEn ? "Request sent" : "ጥያቄዎ ተልኳል",
      description: isEn
        ? "We will contact you shortly to discuss your request."
        : "በቅርቡ እናሰማዎታለን እና ጥያቄዎን እንወያያለን።",
    });

    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEn ? "Request a Quote" : "ግዢ ጥያቄ ላክ"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={isEn ? "Name (optional)" : "ስም (በአማራጭ)"}
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={isEn ? "Phone number" : "ስልክ ቁጥር"}
            required
          />
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              isEn
                ? "Tell us what you are looking for (sofa, bed, office furniture, etc.)"
                : "ምን እቃ እንደሚፈልጉ ይግለጹ (ሶፋ፣ መኝታ፣ የቢሮ እቃዎች፣ ወዘተ)"
            }
            rows={4}
          />
          <Button type="submit" variant="luxury" className="w-full">
            {isEn ? "Send Request" : "ጥያቄውን ላክ"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
