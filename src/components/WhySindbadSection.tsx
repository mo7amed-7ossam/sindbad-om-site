import React from 'react';
import { Sparkles, Palette, Gem, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { WHY_CHOOSE_PILLARS } from '../data/sindbadData';

interface WhySindbadSectionProps {
  lang: Language;
}

export const WhySindbadSection: React.FC<WhySindbadSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Palette,
    Gem,
    ShieldCheck
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#F2F7F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#009AA6] uppercase mb-2 block">
            {isAr ? 'تميز السندباد' : 'The Sindbad Difference'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07333B] tracking-tight">
            {isAr ? 'لماذا تختار السندباد؟' : 'Why Choose Sindbad'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4E7079]">
            {isAr
              ? 'في السندباد، نرتقي بتجربة المطبخ والخزائن من مجرد تصميم إلى أسلوب حياة عملي وأنيق يلبي تطلعاتك.'
              : 'At Sindbad, we elevate the kitchen experience from just a design to a practical and stylish lifestyle.'}
          </p>
        </div>

        {/* 4 Pillars Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.iconName] || Sparkles;

            return (
              <div
                key={pillar.id}
                className="bg-white p-7 rounded-xl border border-[#D5E5E8] shadow-xs hover:shadow-md transition-all duration-200 text-center flex flex-col items-center group"
              >
                {/* Controlled Warm Orange Accent for Icon (Strictly <=5% rule) */}
                <div className="w-14 h-14 rounded-full bg-[#FFF5ED] border border-[#FDE2CF] text-[#EA580C] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#07333B] mb-3">
                  {isAr ? pillar.titleAr : pillar.titleEn}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#52747D] leading-relaxed">
                  {isAr ? pillar.descriptionAr : pillar.descriptionEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-white rounded-xl border border-[#CCE0E3] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-start">
            <div className="w-10 h-10 rounded-lg bg-[#E6F5F6] text-[#009AA6] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#07333B]">
                {isAr ? 'عقد ضمان موثق ومعتمد لمدة 10 سنوات' : 'Documented 10-Year Formal Warranty Contract'}
              </h4>
              <p className="text-xs text-[#52747D]">
                {isAr
                  ? 'يشمل الهيكل والأبواب والمفصلات ومقاومة الرطوبة مع صيانة دورية مجانية.'
                  : 'Covers cabinetry framework, hinges, and moisture seals with scheduled servicing across Oman.'}
              </p>
            </div>
          </div>

          <a
            href="#consultation"
            className="text-xs font-bold text-[#009AA6] hover:text-[#00818B] hover:underline whitespace-nowrap"
          >
            {isAr ? 'اطلب زيارة فني للمنزل ←' : 'Request Home Measurement Visit →'}
          </a>
        </div>

      </div>
    </section>
  );
};
