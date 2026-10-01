import React from 'react';
import { Language } from '../types';

interface StatsSectionProps {
  lang: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const stats = [
    {
      value: '2,400+',
      labelAr: 'مشروع سكني منجز',
      labelEn: 'Successful Projects in Oman',
      subAr: 'فيلات وشقق ومشاريع راقية',
      subEn: 'Luxury Villas & Residences'
    },
    {
      value: '4',
      labelAr: 'صالات عرض بالسلطنة',
      labelEn: 'Showrooms Across Oman',
      subAr: 'المعبيلة · العذيبة · عبري · صلالة',
      subEn: 'Muscat · Ibri · Salalah'
    },
    {
      value: '20+',
      labelAr: 'عاماً من الريادة والخبرة',
      labelEn: 'Years in the Omani Market',
      subAr: 'ثقة مستمرة منذ 2004',
      subEn: 'Continuous Trust Since 2004'
    },
    {
      value: '45+',
      labelAr: 'فني ونجار محترف',
      labelEn: 'Certified Master Technicians',
      subAr: 'تركيب دقيق ومطابق للمواصفات',
      subEn: 'Precision European Fitters'
    },
    {
      value: '18+',
      labelAr: 'مهندس ومصمم ديكور',
      labelEn: 'In-House 3D Architects',
      subAr: 'تصاميم ثلاثية الأبعاد تفاعلية',
      subEn: 'Tailored 3D Photoreal Renders'
    },
    {
      value: '10',
      labelAr: 'سنوات ضمان معتمد',
      labelEn: 'Years Formal Warranty',
      subAr: 'شامل الهيكل والقطع والمفصلات',
      subEn: 'Full Cabinetry & Hardware Coverage'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#07333B] via-[#00818B] to-[#009AA6] text-white relative overflow-hidden">
      {/* Background Architectural Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #FFFFFF 2px, transparent 2px), radial-gradient(circle at 80% 50%, #FFFFFF 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#FFDEAA] uppercase mb-2 block">
            {isAr ? 'أرقامنا وخبراتنا' : 'Our Track Record'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isAr ? 'خبرة راسخة تثق بها' : 'Our Expertise in Numbers'}
          </h2>
          <p className="mt-2 text-sm text-[#D7EFF2]">
            {isAr
              ? 'نفخر بكوننا الخيار الأول لأصحاب الذوق الرفيع في سلطنة عمان على مدار أكثر من عقدين.'
              : 'Proudly the premier choice for discerning homeowners across Oman for over two decades.'}
          </p>
        </div>

        {/* 6 Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xs p-5 rounded-xl border border-white/15 text-center flex flex-col justify-between hover:bg-white/15 transition-all duration-150"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black tabular-nums tracking-tight text-white block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#E5F5F7] block leading-tight">
                  {isAr ? stat.labelAr : stat.labelEn}
                </span>
              </div>
              <span className="text-[11px] text-[#B8E2E8] mt-3 pt-2 border-t border-white/10 block">
                {isAr ? stat.subAr : stat.subEn}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
