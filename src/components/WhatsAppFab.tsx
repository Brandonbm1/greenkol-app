import { LuMessageCircle } from "react-icons/lu";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export const WhatsAppFab = () => (
  <a
    className="whatsapp-fab"
    href={buildWhatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escríbenos por WhatsApp"
  >
    <LuMessageCircle />
  </a>
);
