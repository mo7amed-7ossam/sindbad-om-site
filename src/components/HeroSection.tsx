import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Award, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { SindbadLogo } from './SindbadLogo';

interface HeroSectionProps {
  lang: Language;
  onOpenConsultation: () => void;
  onExploreCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenConsultation,
  onExploreCatalog
}) => {
  const isAr = lang === 'ar';

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#F3F8F9] via-[#FAFCFC] to-[#FFFFFF] pt-6 pb-16 lg:pt-10 lg:pb-24 border-b border-[#E6EFF1]"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#009AA6]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#EAF4F6] to-transparent rounded-full blur-2xl" />
        {/* Subtle grid hairlines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(7, 51, 59, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(7, 51, 59, 0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Content Column (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Omani Market & OPPEIN Exclusive Authority Tag (Clean text, no pill capsule) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00818B] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] shrink-0" />
              <span>{isAr ? 'الوكيل الحصري لشركة OPPEIN العالمية في سلطنة عمان' : 'Exclusive Agent for OPPEIN in the Sultanate of Oman'}</span>
              <span className="text-[#A5C3C8]" aria-hidden="true">·</span>
              <span className="text-[#07333B] font-bold">{isAr ? 'خبرة 20 عاماً' : '20 Years'}</span>
            </div>

            {/* Core Headline matching exact brand identity from reference */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.15] text-[#07333B] tracking-tight text-balance mb-5">
              {isAr ? (
                <>
                  حلول <span className="text-[#009AA6]">المطابخ والخزائن</span> والأثاث العصري
                </>
              ) : (
                <>
                  Bespoke <span className="text-[#009AA6]">Kitchens & Wardrobe</span> Architecture
                </>
              )}
            </h1>

            {/* Subtitle from the original brand */}
            <p className="text-base sm:text-lg lg:text-xl text-[#33565F] leading-relaxed max-w-2xl mb-8 font-normal">
              {isAr
                ? 'تصاميم عصرية وجودة عالمية لمنزلك. نبتكر مساحات معيشية راقية تجمع بين اللمسة الإيطالية الفاخرة وخامات أوروبية معتمدة ومقاومة لبيئة الخليج.'
                : 'Contemporary European designs and world-class craftsmanship. Transforming prestigious Omani residences with tailored ergonomics and 10-year warranted materials.'}
            </p>

            {/* Action Buttons (Strict Sindbad Button Style: Medium radius, strong typography, comfortable padding) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-bold text-white bg-[#009AA6] hover:bg-[#00818B] active:scale-[0.99] rounded-lg shadow-[0_4px_14px_rgba(0,154,166,0.3)] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009AA6]"
              >
                <span>{isAr ? 'احجز استشارتك المجانية' : 'Book Free 3D Consultation'}</span>
                {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </button>

              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-[#07333B] bg-white hover:bg-[#F3F8F9] border-2 border-[#B2D8DC] hover:border-[#009AA6] rounded-lg transition-all duration-150 shadow-xs"
              >
                <span>{isAr ? 'تصفح الكتالوج 2026' : 'Explore 2026 Catalog'}</span>
              </button>
            </div>

            {/* Trust Markers Bar (Zero-Pill discipline: unboxed text with subtle dividers) */}
            <div className="pt-6 border-t border-[#DFEAEB] w-full grid grid-cols-3 gap-4 text-[#1C4650]">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-[#07333B] tabular-nums">20+</span>
                <span className="text-xs text-[#52747D] mt-0.5">
                  {isAr ? 'عاماً بالسوق العماني' : 'Years in Oman'}
                </span>
              </div>
              <div className="flex flex-col border-x border-[#DFEAEB] px-3">
                <span className="text-xl sm:text-2xl font-black text-[#07333B] tabular-nums">10</span>
                <span className="text-xs text-[#52747D] mt-0.5">
                  {isAr ? 'سنوات ضمان كتابي' : 'Years Warranty'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-[#009AA6] tabular-nums">2,400+</span>
                <span className="text-xs text-[#52747D] mt-0.5">
                  {isAr ? 'مشروع منجز في عمان' : 'Delivered Projects'}
                </span>
              </div>
            </div>

          </div>

          {/* Architectural Showcase Visual Carrier (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#D5E5E8] shadow-[0_12px_40px_rgba(7,51,59,0.08)]">
              
              {/* Architectural Vector Rendering of Luxury Kitchen Interior */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#EBF4F5] via-[#F8FBFC] to-[#E5F1F3]">
                {/* Real Architectural Kitchen Photograph */}
                <img
                  src="/images/hero-kitchen.jpg"
                  alt={isAr ? 'مطبخ عصري فاخر بتصميم السندباد وأوبين' : 'Modern Luxury Kitchen by Sindbad OPPEIN'}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG if image missing
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.hero-svg-fallback') as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />

                {/* Subtle Brand Teal & Light Ambient Overlay (Light Premium Treatment) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07333B]/40 via-transparent to-transparent pointer-events-none" />

                {/* SVG Visual Composition as instant fallback container */}
                <div className="hero-svg-fallback hidden absolute inset-0">
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 800 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="marbleGradient" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F9FBFC" />
                      <stop offset="0.5" stopColor="#EEF4F6" />
                      <stop offset="1" stopColor="#E2ECEE" />
                    </linearGradient>
                    <linearGradient id="woodPanel" x1="0" y1="0" x2="300" y2="400" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9C7753" />
                      <stop offset="0.5" stopColor="#8A6543" />
                      <stop offset="1" stopColor="#765333" />
                    </linearGradient>
                    <linearGradient id="tealCabinet" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0B424C" />
                      <stop offset="1" stopColor="#07333B" />
                    </linearGradient>
                    <linearGradient id="quartzIsland" x1="0" y1="0" x2="500" y2="300" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFFFFF" />
                      <stop offset="0.8" stopColor="#F4F8F9" />
                      <stop offset="1" stopColor="#DDE8EB" />
                    </linearGradient>
                    <radialGradient id="pendantGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                      <stop stopColor="#FFDEAA" stopOpacity="0.85" />
                      <stop offset="1" stopColor="#FFDEAA" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Room Backdrop Wall & Architectural Floor */}
                  <rect width="800" height="600" fill="url(#marbleGradient)" />
                  
                  {/* Floor Tiles with Perspective Grid */}
                  <polygon points="0,410 800,410 800,600 0,600" fill="#E8F0F2" opacity="0.9" />
                  <line x1="160" y1="410" x2="60" y2="600" stroke="#D3E2E6" strokeWidth="1.5" />
                  <line x1="320" y1="410" x2="260" y2="600" stroke="#D3E2E6" strokeWidth="1.5" />
                  <line x1="480" y1="410" x2="500" y2="600" stroke="#D3E2E6" strokeWidth="1.5" />
                  <line x1="640" y1="410" x2="720" y2="600" stroke="#D3E2E6" strokeWidth="1.5" />
                  <line x1="0" y1="480" x2="800" y2="480" stroke="#D3E2E6" strokeWidth="1.5" />
                  <line x1="0" y1="545" x2="800" y2="545" stroke="#D3E2E6" strokeWidth="1.5" />

                  {/* Panoramic Window with Gulf Villa Garden View */}
                  <rect x="520" y="40" width="240" height="340" rx="8" fill="#D8EFF2" opacity="0.75" />
                  <line x1="640" y1="40" x2="640" y2="380" stroke="#009AA6" strokeWidth="2.5" opacity="0.4" />
                  <line x1="520" y1="210" x2="760" y2="210" stroke="#009AA6" strokeWidth="2.5" opacity="0.4" />
                  {/* Soft foliage silhouettes through the glass */}
                  <circle cx="580" cy="280" r="50" fill="#B3DFE5" opacity="0.4" />
                  <circle cx="700" cy="300" r="60" fill="#B3DFE5" opacity="0.4" />

                  {/* Rear Wall Tall Cabinetry (Deep Teal + Fluted Natural Wood) */}
                  <rect x="50" y="50" width="430" height="340" rx="4" fill="url(#tealCabinet)" />
                  
                  {/* Vertical fluted wood accent columns */}
                  <g opacity="0.85">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <rect key={i} x={360 + i * 8} y="50" width="5" height="340" fill="#C59B73" />
                    ))}
                  </g>

                  {/* Built-in European Luxury Ovens and Niche */}
                  <rect x="80" y="140" width="110" height="90" rx="3" fill="#141E22" stroke="#4A656E" strokeWidth="1.5" />
                  <rect x="90" y="152" width="90" height="66" rx="2" fill="#202F35" />
                  <line x1="100" y1="165" x2="170" y2="165" stroke="#00D1E0" strokeWidth="2" opacity="0.7" />
                  
                  <rect x="80" y="245" width="110" height="90" rx="3" fill="#141E22" stroke="#4A656E" strokeWidth="1.5" />
                  <rect x="90" y="257" width="90" height="66" rx="2" fill="#202F35" />

                  {/* Recessed Warm LED Ambient Backlight Niche */}
                  <rect x="210" y="140" width="130" height="195" rx="3" fill="#FAF6EE" />
                  <line x1="210" y1="142" x2="340" y2="142" stroke="#FFA726" strokeWidth="3" opacity="0.9" />
                  {/* Shelving accessories */}
                  <rect x="235" y="270" width="30" height="55" rx="3" fill="#009AA6" opacity="0.8" />
                  <circle cx="295" cy="295" r="18" fill="#07333B" opacity="0.7" />

                  {/* Sprawling Modern Kitchen Island with Waterfall Calacatta Edge */}
                  <ellipse cx="440" cy="515" rx="280" ry="25" fill="#07333B" opacity="0.12" />
                  <polygon points="170,360 690,360 660,500 200,500" fill="url(#tealCabinet)" />
                  <polygon points="200,380 430,380 410,480 220,480" fill="#9C7753" opacity="0.9" />

                  {/* Waterfall Marble Countertop */}
                  <polygon points="150,345 710,345 685,370 140,370" fill="#FFFFFF" stroke="#D3E2E6" strokeWidth="1" />
                  <polygon points="140,370 170,370 200,505 170,505" fill="#EDF3F5" />
                  <polygon points="685,370 710,345 690,490 665,490" fill="#DEEAEB" />

                  {/* Modern Induction Cooktop & Flush Down-draft Vent */}
                  <rect x="490" y="352" width="130" height="12" rx="2" fill="#1C282C" />
                  <circle cx="525" cy="358" r="4" fill="#00D1E0" opacity="0.8" />
                  <circle cx="585" cy="358" r="4" fill="#00D1E0" opacity="0.8" />

                  {/* Minimalist Designer Pendant Lights from Ceiling */}
                  <line x1="330" y1="0" x2="330" y2="180" stroke="#07333B" strokeWidth="2" />
                  <circle cx="330" cy="195" r="16" fill="#009AA6" />
                  <circle cx="330" cy="195" r="35" fill="url(#pendantGlow)" />

                  <line x1="470" y1="0" x2="470" y2="160" stroke="#07333B" strokeWidth="2" />
                  <circle cx="470" cy="175" r="18" fill="#07333B" />
                  <circle cx="470" cy="175" r="40" fill="url(#pendantGlow)" />

                  <line x1="600" y1="0" x2="600" y2="190" stroke="#07333B" strokeWidth="2" />
                  <circle cx="600" cy="205" r="15" fill="#009AA6" />
                  <circle cx="600" cy="205" r="32" fill="url(#pendantGlow)" />

                  {/* Modern Stools */}
                  <line x1="280" y1="460" x2="270" y2="550" stroke="#07333B" strokeWidth="3" />
                  <line x1="320" y1="460" x2="330" y2="550" stroke="#07333B" strokeWidth="3" />
                  <ellipse cx="300" cy="458" rx="26" ry="7" fill="#009AA6" />

                  <line x1="390" y1="460" x2="380" y2="550" stroke="#07333B" strokeWidth="3" />
                  <line x1="430" y1="460" x2="440" y2="550" stroke="#07333B" strokeWidth="3" />
                  <ellipse cx="410" cy="458" rx="26" ry="7" fill="#009AA6" />
                </svg>
                </div>

                {/* Light Scrim & Floating Quality Badge (matching Sindbad brand signature) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#CCE0E3] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E6F5F6] flex items-center justify-center text-[#009AA6] shrink-0">
                      <Award className="w-5 h-5 text-[#009AA6]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#07333B]">
                        {isAr ? 'مواصفات هندسية أوروبية معتمدة' : 'European Certified Architecture'}
                      </h4>
                      <p className="text-[11px] text-[#52747D]">
                        {isAr ? 'مفصلات بلوم النمساوية · ألواح مقاومة للرطوبة' : 'Austrian Blum Hardware · High Moisture Resistance'}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-[#EA580C]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>OPPEIN</span>
                  </div>
                </div>

              </div>

              {/* Bottom strip of the card */}
              <div className="p-4 bg-[#F8FAFB] border-t border-[#E8EFF1] flex items-center justify-between text-xs text-[#52747D]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009AA6]" />
                  {isAr ? 'معاينة ثلاثية الأبعاد 3D مجانية' : 'Free 3D Photorealistic Render'}
                </span>
                <span className="text-[#07333B] font-semibold">
                  {isAr ? 'صالات عرض متكاملة في عمان' : 'Showrooms Across Oman'}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
