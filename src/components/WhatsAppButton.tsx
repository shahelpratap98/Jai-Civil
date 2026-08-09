import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../siteConfig';

/** Floating click-to-chat button, present on every page. */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jai Civil on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-black pl-4 pr-5 py-3 font-medium text-sm shadow-lg shadow-black/40 transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle size={20} aria-hidden="true" />
      WhatsApp
    </a>
  );
}
