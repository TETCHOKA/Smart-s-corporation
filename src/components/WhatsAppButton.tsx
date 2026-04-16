import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "237655785620"; // Placeholder – replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour Smart's Corporation ! Je souhaite avoir des informations sur vos formations (différents concours, les centres de preparations et les modalités)."
);

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(145,63%,42%)] hover:bg-[hsl(145,63%,36%)] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
