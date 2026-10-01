import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface WhatsAppFloatProps {
  lang: Language;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const omaniWhatsAppNumber = '96871155500';
  const defaultMessage = encodeURIComponent(
    isAr
      ? 'مرحباً شركة السندباد، أود الاستفسار عن تفصيل مطبخ / خزائن ملابس لمنزلي.'
      : 'Hello Sindbad OP, I would like to inquire about kitchen and wardrobe design for my home.'
  );

  const whatsappUrl = `https://wa.me/${omaniWhatsAppNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Sindbad on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] transition-all duration-200 active:scale-95 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6 fill-current shrink-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.026-.067-1.161-.357-2.316-1.503-3.08-2.614-.764-1.111-.806-1.745-.806-2.148 0-.403.208-.601.282-.676.074-.075.163-.094.218-.094.054 0 .109.001.155.006.05.005.116-.019.182.138.068.163.234.571.254.613.02.042.033.091.006.146-.027.054-.041.088-.082.135-.041.047-.087.106-.124.142-.041.041-.084.086-.036.168.048.083.213.351.458.568.315.281.58.368.662.409.083.042.131.036.18-.02.048-.057.208-.242.264-.326.055-.083.11-.069.186-.041.076.027.48.226.562.267.083.041.138.062.158.096.02.034.02.502-.124.907z" />
        <path d="M12 2C6.486 2 2 6.486 2 12c0 1.942.559 3.754 1.523 5.284L2 22l4.877-1.488C8.368 21.464 10.124 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.737 0-3.364-.515-4.735-1.399l-.339-.217-2.894.883.896-2.823-.238-.378C3.784 14.673 3.2 12.879 3.2 12c0-4.852 3.948-8.8 8.8-8.8s8.8 3.948 8.8 8.8-3.948 8.8-8.8 8.8z" />
      </svg>
      <span className="hidden sm:inline text-xs font-bold whitespace-nowrap">
        {isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
      </span>
    </a>
  );
};
