import { config } from "../config/config";

const COUNTRY_CODE = "57"; // Colombia
const LOCAL_NUMBER_LENGTH = 10;
const DEFAULT_MESSAGE = "Hola GREENKOL, quiero cotizar un proyecto en madera plástica.";

/**
 * wa.me requires the full international number without "+".
 * A local Colombian number ("3161690629") would be read as a Dutch one ("+31..."),
 * so WhatsApp could not show the business name and photo.
 */
export const getInternationalPhone = (phone: string = String(config.CONTACT_PHONE ?? "")) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length === LOCAL_NUMBER_LENGTH ? `${COUNTRY_CODE}${digits}` : digits;
};

export const buildWhatsAppUrl = (message: string = DEFAULT_MESSAGE) =>
  `https://wa.me/${getInternationalPhone()}?text=${encodeURIComponent(message)}`;

export const openWhatsApp = (message?: string) => {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
};
