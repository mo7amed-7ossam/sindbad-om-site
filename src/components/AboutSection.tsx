import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Compass, Award, CheckCircle2, X } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [modalOpen, setModalOpen] = useState(false);

  const pillars = [
    {
      icon: Compass,
      titleAr: 'المسح الليزري والتصميم 3D',
      titleEn: '3D Laser Surveying & CAD',
      descAr: 'رفع هندسي دقيق بالميليمتر لمنع أي فراغات أو أخطاء تنفيذية، مع تقديم محاكاة واقعية 3D بالكامل قبل الإنتاج.',
      descEn: 'Millimeter-precise on-site laser measurements ensuring flawless architectural fit and virtual realistic 3D simulation.'
    },
    {
      icon: Cpu,
      titleAr: 'شراكة أوبين العالمية',
      titleEn: 'Global OPPEIN Partnership',
      descAr: 'وكيل حصري لأكبر مصنّع مطابخ وخزائن في العالم، مما يمنح عملاءنا في عمان أرقى معايير الأتمتة الألمانية والإيطالية.',
      descEn: 'Exclusive agency for the world’s leading manufacturer, bringing premier German & Italian automated manufacturing lines.'
    },
    {
      icon: ShieldCheck,
      titleAr: 'مواد مطابقة للمناخ العماني',
      titleEn: 'Gulf-Engineered Materials',
      descAr: 'ألواح معالجة ضد الرطوبة الشديدة ودرجات الحرارة المرتفعة مع مفصلات بلوم (Blum) النمساوية الأصلية المقاومة للصدأ.',
      descEn: 'Tropicalized core panels resisting Gulf humidity and temperature swings, equipped with original Austrian Blum hardware.'
    },
    {
      icon: Award,
      titleAr: 'ضمان 10 سنوات والتزام كامل',
      titleEn: '10-Year Certified Warranty',
      descAr: 'عقد ضمان كتابي معتمد يغطي سلامة الهيكل والأبواب والمفصلات مع زيارات صيانة دورية مجدولة وسريعة.',
      descEn: 'Formally documented 10-year warranty covering cabinetry structure, doors, and hardware with responsive after-sales service.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAFDFD] border-b border-[#E6EFF1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Editorial Top Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#009AA6] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              <span>{isAr ? 'عن السندباد وعالم أوبين' : 'About Sindbad & OPPEIN'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07333B] tracking-tight leading-tight">
              {isAr ? (
                <>
                  رواد حلول المطابخ والخزائن <br />
                  <span className="text-[#009AA6]">في سلطنة عمان لأكثر من 20 عاماً</span>
                </>
              ) : (
                <>
                  Pioneering Kitchen & Cabinet Architecture <br />
                  <span className="text-[#009AA6]">in Oman for Over 20 Years</span>
                </>
              )}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#3C616B] leading-relaxed">
              {isAr
                ? 'شركة رائدة في تصميم وتنفيذ المطابخ والخزائن في سلطنة عمان بأكثر من عقدين من التميز. نقدم حلولاً متكاملة تجمع بين التصميم العصري والمواد الأوروبية المعتمدة عالمياً والتنفيذ المتقن، بصفتنا الوكيل الحصري للشركة العالمية OPPEIN.'
                : 'A leading enterprise in designing and executing kitchens and wardrobes in the Sultanate of Oman with over 20 years of expertise. We deliver complete lifestyle spaces merging contemporary design, globally certified European materials, and precise installation as the exclusive agent for OPPEIN.'}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#07333B] hover:bg-[#009AA6] rounded-lg transition-all duration-150 shadow-sm cursor-pointer"
              >
                <span>{isAr ? 'تعرف على قصة السندباد' : 'Discover Our Heritage'}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
              <span className="text-xs text-[#6B8B93] font-medium">
                {isAr ? 'المعبيلة · العذيبة · عبري · صلالة' : 'Muscat · Ibri · Salalah'}
              </span>
            </div>
          </div>

          {/* Real Photo Card of Completed Villa Projects */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#CCE0E3] shadow-md group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EAF2F4]">
                <img
                  src="/images/villa-living.jpg"
                  alt={isAr ? 'مشروع سكني فاخر منفذ بواسطة السندباد' : 'Luxury residential project delivered by Sindbad OP'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#E8EFF1] flex items-center justify-between text-xs text-[#52747D]">
                <span className="font-semibold text-[#07333B]">
                  {isAr ? 'تنفيذ فيلات ومشاريع راقية بالسلطنة' : 'Delivered Prestigious Villas in Oman'}
                </span>
                <span className="text-[#009AA6] font-bold">2,400+ Homes</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars Grid (Clean, unboxed or single-elevation depth) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#DCE8EA] hover:border-[#009AA6]/50 transition-all duration-200 shadow-xs hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#F0F8F9] group-hover:bg-[#009AA6] text-[#009AA6] group-hover:text-white flex items-center justify-center transition-colors mb-5">
                    <Icon className="w-6 h-6 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-[#07333B] mb-2.5">
                    {isAr ? pillar.titleAr : pillar.titleEn}
                  </h3>
                  <p className="text-xs text-[#52747D] leading-relaxed">
                    {isAr ? pillar.descAr : pillar.descEn}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EEF3F5] flex items-center justify-between text-[11px] text-[#009AA6] font-semibold">
                  <span>{isAr ? 'معايير أوروبية' : 'European Standard'}</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Heritage Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07333B]/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#D9EAEB] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAF1F3]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                <h3 className="text-lg font-bold text-[#07333B]">
                  {isAr ? 'السندباد — أكثر من 20 عاماً من الثقة في عمان' : 'Sindbad — 20+ Years of Trust in Oman'}
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 text-[#63858D] hover:text-[#07333B] hover:bg-[#F0F5F6] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-sm text-[#3E636D] leading-relaxed">
              <p>
                {isAr
                  ? 'انطلقت شركة السندباد في سلطنة عمان بهدف تقديم نقلة نوعية في قطاع تصميم وتصنيع المطابخ العصرية وخزائن الملابس. وعلى مدار أكثر من 20 عاماً، اكتسبت السندباد ثقة آلاف العائلات العمانية والمشاريع السكنية الراقية في مسقط والظاهرة وظفار.'
                  : 'Founded in the Sultanate of Oman, Sindbad set out to redefine the interior architecture of kitchens and custom cabinetry. Over two decades, we have earned the lasting trust of thousands of Omani families and prestigious villas across Muscat, Al Dhahirah, and Dhofar.'}
              </p>
              <div className="p-4 bg-[#F2F8F9] rounded-xl border border-[#D5E6E9]">
                <h4 className="font-bold text-[#07333B] mb-1.5 text-xs">
                  {isAr ? 'وكالة OPPEIN العالمية الحصرية:' : 'Exclusive OPPEIN Agency:'}
                </h4>
                <p className="text-xs text-[#4F727B]">
                  {isAr
                    ? 'تعتبر OPPEIN أكبر منتج للمطابخ والخزائن في العالم، حيث تدير خطوط إنتاج أوروبية آلية تعمل بأنظمة هومج (Homag) الألمانية وبأعلى مواصفات الاستدامة ومقاومة الرطوبة المعتمدة دولياً.'
                    : 'OPPEIN is the world’s foremost cabinetry producer, operating fully automated German Homag robotic fabrication plants delivering unmatched precision, zero formaldehyde emission standards, and rigorous tropical climate tolerance.'}
                </p>
              </div>
              <p>
                {isAr
                  ? 'نحن نرافقك في كل خطوة: من زيارة صالات العرض الراقية إلى استلام المخطط ثلاثي الأبعاد والمسح الليزري بالموقع، وحتى اكتمال التركيب بأيدي نخبة من الفنيين المتخصصين مع ضمان 10 سنوات.'
                  : 'We accompany you at every milestone: from personalized showroom walkthroughs, 3D laser on-site scanning, to seamless installation by master craftsmen under our 10-year official warranty.'}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EAF1F3] flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 bg-[#009AA6] text-white text-xs font-bold rounded-lg hover:bg-[#00818B] transition-colors"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
