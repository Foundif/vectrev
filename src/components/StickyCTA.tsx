import { Phone, MessageCircle } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-end">
      <a
        href="https://wa.me/918879608428?text=Hi%20VECTREV%2C%20I%27d%20like%20a%20consultation"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white flex items-center justify-center shadow-glow hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+918879608428"
        aria-label="Call"
        className="h-14 w-14 rounded-full bg-gradient-accent text-accent-foreground flex items-center justify-center shadow-accent hover:scale-105 transition"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}