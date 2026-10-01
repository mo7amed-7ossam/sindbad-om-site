import React from 'react';
import { SindbadLogo } from './SindbadLogo';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07333B] text-[#D4E8EC] relative border-t border-[#0C4652]">
      {/* Top Footer Tier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <SindbadLogo variant="white" size="lg" showSubtitle />

            <p className="text-sm text-[#A8CCD4] leading-relaxed max-w-sm mt-3">
              {isAr
                ? 'الوكيل الحصري لأكبر مصانع العالم OPPEIN في سلطنة عمان. نقدم حلولاً متكاملة للمطابخ الحديثة وخزائن الملابس والنوافذ والأثاث بجودة أوروبية وضمان 10 سنوات.'
                : 'The exclusive agent for the world\'s largest factories in kitchens and comprehensive home solutions. Delivering European craftsmanship and 10-year warranty across Oman.'}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#FFDEAA]">
              <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
              <span className="font-semibold">
                {isAr ? 'عضوية معتمدة · رقم السجل التجاري مسجل بالسلطنة' : 'Certified Agency · Registered CR in the Sultanate'}
              </span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-[#0F4E5A] pb-2">
              {isAr ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BEDDE3]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {isAr ? 'عن السندباد' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  {isAr ? 'حلول المطابخ والخزائن' : 'Products & Collections'}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  {isAr ? 'لماذا تختار السندباد' : 'Why Sindbad'}
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  {isAr ? 'كتالوج 2026' : 'Interactive Catalog'}
                </a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-white transition-colors">
                  {isAr ? 'حجز استشارة مجانية' : 'Book Consultation'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Column (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-[#0F4E5A] pb-2">
              {isAr ? 'معلومات التواصل والفروع' : 'Contact Information'}
            </h4>
            
            <div className="space-y-3.5 text-xs text-[#BEDDE3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00D1E0] mt-0.5 shrink-0" />
                <span>
                  {isAr
                    ? 'فروع السلطنة: المعبيلة الجنوبية · العذيبة الشمالية · عبري · صلالة'
                    : 'Showrooms: Al Ma\'abela · Al Adhiba · Ibri · Salalah'}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00D1E0] shrink-0" />
                <a
                  href="tel:+96871155500"
                  className="hover:text-white font-bold text-[#E5F5F7] tracking-wider"
                  dir="ltr"
                >
                  +968 71155500 / +968 71155577
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00D1E0] shrink-0" />
                <a href="mailto:info@sindbadom.com" className="hover:text-white">
                  info@sindbadom.com
                </a>
              </div>
            </div>

            {/* Official OPPEIN Partnership Mark */}
            <div className="mt-6 p-3.5 bg-[#05262D] rounded-xl border border-[#0A414C] text-[11px] text-[#A5CAD2] flex items-center justify-between">
              <span>{isAr ? 'شريك OPPEIN الرسمي بعمان' : 'Official OPPEIN Partner in Oman'}</span>
              <span className="font-bold text-[#00D1E0]">OPPEIN 2026</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Tier */}
      <div className="bg-[#05262D] py-5 px-4 sm:px-8 border-t border-[#093C46] text-xs text-[#89B3BC]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            {isAr
              ? '© 2026 شركة السندباد لحلول المطابخ والخزائن والأثاث. جميع الحقوق محفوظة.'
              : '© 2026 Sindbad OP Kitchens & Home Solutions. All Rights Reserved.'}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[#64929C]">sindbadom.com</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#07333B] hover:bg-[#009AA6] text-white transition-colors"
              title={isAr ? 'العودة إلى الأعلى' : 'Back to top'}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
