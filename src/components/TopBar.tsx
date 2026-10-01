import React, { useState, useEffect } from 'react';
import { SindbadLogo } from './SindbadLogo';
import { Phone, Mail, MapPin, Menu, X, Globe, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface TopBarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenConsultation: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  lang,
  onToggleLang,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { href: '#products', labelAr: 'المنتجات', labelEn: 'Products' },
    { href: '#about', labelAr: 'عن السندباد', labelEn: 'About Us' },
    { href: '#why-us', labelAr: 'لماذا السندباد', labelEn: 'Why Us' },
    { href: '#showrooms', labelAr: 'الفروع', labelEn: 'Showrooms' },
    { href: '#catalog', labelAr: 'الكتالوج', labelEn: 'Catalog' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Utility Top Bar - Authentic Sindbad contact ribbon */}
      <div className="bg-[#07333B] text-[#DCEAEB] text-xs py-2 px-4 sm:px-8 border-b border-[#0A414A]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5 text-[11px] sm:text-xs">
            <a
              href="tel:+96871155500"
              className="flex items-center gap-1.5 hover:text-[#00D1E0] transition-colors whitespace-nowrap"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#009AA6]" />
              <span className="font-semibold">+968 71155500</span>
              <span className="opacity-60">/</span>
              <span>71155577</span>
            </a>
            <a
              href="mailto:info@sindbadom.com"
              className="hidden md:flex items-center gap-1.5 hover:text-[#00D1E0] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#009AA6]" />
              <span>info@sindbadom.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="hidden sm:flex items-center gap-1.5 text-[#BBD7DC]">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{isAr ? 'المعبيلة · العذيبة · عبري · صلالة' : 'Al Ma\'abela · Al Adhiba · Ibri · Salalah'}</span>
            </div>
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-white bg-[#0A454F] hover:bg-[#0E5460] transition-colors"
              title="Change Language"
            >
              <Globe className="w-3 h-3 text-[#009AA6]" />
              <span className="font-bold">{isAr ? 'English' : 'عربي'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Following strict 3-Zone Contract */}
      <div
        className={`bg-white/95 backdrop-blur-md border-b transition-all duration-200 ${
          isScrolled
            ? 'border-[#E2E9EC] shadow-[0_4px_20px_rgba(7,51,59,0.06)] py-3'
            : 'border-[#EEF2F4] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single Brand Title Element */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus-visible:outline-2 focus-visible:outline-[#009AA6] rounded"
          >
            <SindbadLogo variant="light" size="md" showSubtitle />
          </a>

          {/* Zone 2: 4-6 Clean Text Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#1A454E]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 transition-colors hover:text-[#009AA6] whitespace-nowrap group"
              >
                {isAr ? link.labelAr : link.labelEn}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009AA6] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-200" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#009AA6] hover:bg-[#00818B] active:scale-[0.98] rounded-lg transition-all duration-150 shadow-[0_2px_8px_rgba(0,154,166,0.25)] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009AA6]"
            >
              <span>{isAr ? 'احجز استشارتك المجانية' : 'Book Free Consultation'}</span>
              {isAr ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#07333B] hover:bg-[#F0F6F7] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#009AA6]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E9EC] shadow-xl px-6 py-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#07333B]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 border-b border-[#F0F4F5] hover:text-[#009AA6] transition-colors"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#009AA6] hover:bg-[#00818B] rounded-lg shadow-sm"
              >
                {isAr ? 'احجز استشارتك المجانية' : 'Book Free Consultation'}
              </button>
              <div className="flex items-center justify-between text-xs text-[#5C7982] pt-2">
                <span>{isAr ? 'هاتف الاستفسارات:' : 'Hotline:'}</span>
                <a href="tel:+96871155500" className="font-bold text-[#07333B]" dir="ltr">
                  +968 71155500
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
