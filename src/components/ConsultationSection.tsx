import React, { useState } from 'react';
import { Check, Send, Phone, User, Mail, MapPin, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language, Branch } from '../types';
import { BRANCHES_DATA } from '../data/sindbadData';

interface ConsultationSectionProps {
  lang: Language;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES_DATA[0].id);
  const [selectedProduct, setSelectedProduct] = useState('kitchens');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!fullName.trim()) {
      setErrorMessage(isAr ? 'يرجى إدخال الاسم الكريم' : 'Please enter your full name');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 7) {
      setErrorMessage(
        isAr
          ? 'يرجى إدخال رقم هاتف صحيح (أرقام عمان تبدأ بـ 9 أو 7)'
          : 'Please enter a valid Omani telephone number'
      );
      return;
    }

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setIsSubmitted(false);
  };

  return (
    <section id="consultation" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#009AA6] uppercase mb-2 block">
            {isAr ? 'استشارة هندسية ثلاثية الأبعاد' : 'Free 3D Architectural Consultation'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07333B] tracking-tight">
            {isAr ? 'احجز استشارتك المجانية' : 'Get a Free Consultation'}
          </h2>
          <p className="mt-3 text-base text-[#52747D]">
            {isAr
              ? 'املأ النموذج أدناه وسيتواصل معك أحد مهندسينا المختصين لترتيب زيارة ميدانية أو موعد بصالة العرض.'
              : 'Fill out the form and one of our specialized engineers will contact you to plan your project.'}
          </p>
        </div>

        {/* Content Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left/Main Column: Consultation Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FAFDFD] p-6 sm:p-8 rounded-2xl border border-[#D9EAEB] shadow-[0_4px_24px_rgba(7,51,59,0.04)]">
            {isSubmitted ? (
              <div className="py-10 px-4 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#E0F5F6] text-[#009AA6] flex items-center justify-center mb-5 animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-[#07333B] mb-2">
                  {isAr ? 'تم استلام طلبك بنجاح!' : 'Your Request Has Been Received!'}
                </h3>
                <p className="text-sm text-[#4E7079] max-w-md mb-6 leading-relaxed">
                  {isAr
                    ? `شكراً لك أستاذ ${fullName}، سيقوم مهندس التصميم من فرع (${
                        BRANCHES_DATA.find((b) => b.id === selectedBranch)?.nameAr
                      }) بالتواصل معك عبر الواتساب أو الهاتف خلال ساعات العمل.`
                    : `Thank you ${fullName}, our design architect will reach out to you shortly to prepare your 3D plan.`}
                </p>
                <div className="p-4 bg-white rounded-xl border border-[#D9EAEB] text-xs text-[#07333B] mb-6 w-full max-w-sm">
                  <div className="flex justify-between py-1 border-b border-[#EDF4F5]">
                    <span className="text-[#67878F]">{isAr ? 'رقم الحجز المرجعي:' : 'Reference ID:'}</span>
                    <span className="font-mono font-bold">SINDBAD-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#67878F]">{isAr ? 'الفرع المختار:' : 'Selected Showroom:'}</span>
                    <span className="font-semibold">
                      {isAr
                        ? BRANCHES_DATA.find((b) => b.id === selectedBranch)?.nameAr
                        : BRANCHES_DATA.find((b) => b.id === selectedBranch)?.nameEn}
                    </span>
                  </div>
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 text-xs font-bold text-[#009AA6] bg-white border border-[#009AA6] hover:bg-[#F0F9FA] rounded-lg transition-colors"
                >
                  {isAr ? 'إرسال طلب استشارة آخر' : 'Book Another Consultation'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#07333B] mb-1.5">
                    {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isAr ? 'مثال: محمد بن راشد المعمري' : 'e.g. Mohammed Al Maamari'}
                      className="w-full px-4 py-3 bg-white border border-[#CCE2E5] rounded-lg text-sm text-[#07333B] focus:border-[#009AA6] focus:ring-2 focus:ring-[#009AA6]/20 transition-all outline-none"
                    />
                    <User className="w-4 h-4 text-[#89A8AF] absolute left-3 rtl:left-auto rtl:right-3 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Phone (+968) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-[#07333B]">
                      {isAr ? 'رقم الهاتف (عمان) *' : 'Phone Number (Oman) *'}
                    </label>
                    <span className="text-[11px] text-[#009AA6] font-semibold">
                      {isAr ? 'أرقام السلطنة +968' : 'Omani numbers only +968'}
                    </span>
                  </div>
                  <div className="flex" dir="ltr">
                    <span className="inline-flex items-center px-3.5 text-xs font-bold text-[#07333B] bg-[#EDF5F6] border border-r-0 border-[#CCE2E5] rounded-l-lg select-none">
                      +968
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9xxxxxxx / 7xxxxxxx"
                      className="w-full px-4 py-3 bg-white border border-[#CCE2E5] rounded-r-lg text-sm text-[#07333B] focus:border-[#009AA6] focus:ring-2 focus:ring-[#009AA6]/20 transition-all outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-[#07333B] mb-1.5">
                    {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={isAr ? 'name@example.com' : 'name@example.com'}
                      className="w-full px-4 py-3 bg-white border border-[#CCE2E5] rounded-lg text-sm text-[#07333B] focus:border-[#009AA6] focus:ring-2 focus:ring-[#009AA6]/20 transition-all outline-none"
                    />
                    <Mail className="w-4 h-4 text-[#89A8AF] absolute left-3 rtl:left-auto rtl:right-3 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Branch Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#07333B] mb-1.5">
                    {isAr ? 'اختر الفرع الأقرب إليك *' : 'Select Nearest Branch *'}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#CCE2E5] rounded-lg text-sm text-[#07333B] focus:border-[#009AA6] focus:ring-2 focus:ring-[#009AA6]/20 transition-all outline-none appearance-none cursor-pointer"
                    >
                      {BRANCHES_DATA.map((branch) => (
                        <option key={branch.id} value={branch.id}>
                          {isAr ? branch.nameAr : branch.nameEn}
                        </option>
                      ))}
                    </select>
                    <MapPin className="w-4 h-4 text-[#89A8AF] absolute left-3 rtl:left-auto rtl:right-3 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Product / Solution Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#07333B] mb-1.5">
                    {isAr ? 'نوع الحل المطلوب *' : 'Select Solution of Interest *'}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#CCE2E5] rounded-lg text-sm text-[#07333B] focus:border-[#009AA6] focus:ring-2 focus:ring-[#009AA6]/20 transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="kitchens">{isAr ? 'مطابخ إيطالية فاخرة (Kitchens)' : 'Italian Luxury Kitchens'}</option>
                      <option value="wardrobes">{isAr ? 'خزائن وغرف ملابس Walk-in (Wardrobes)' : 'Walk-in Closets & Wardrobes'}</option>
                      <option value="windows">{isAr ? 'نوافذ ألمنيوم ثيرمال بريك (Windows)' : 'Acoustic Thermal Windows'}</option>
                      <option value="living">{isAr ? 'أثاث الصالات والمجالس الشامل (Living)' : 'Custom Living & TV Architecture'}</option>
                      <option value="all">{isAr ? 'تأثيث فيلا كاملة (Full Villa Package)' : 'Comprehensive Villa Solution'}</option>
                    </select>
                    <Layers className="w-4 h-4 text-[#89A8AF] absolute left-3 rtl:left-auto rtl:right-3 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-sm font-bold text-white bg-[#009AA6] hover:bg-[#00818B] active:scale-[0.99] rounded-lg shadow-[0_4px_14px_rgba(0,154,166,0.25)] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{isAr ? 'جاري الإرسال...' : 'Sending request...'}</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isAr ? 'إرسال طلب الاستشارة المجانية' : 'Submit Consultation Request'}</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#6E8F97] mt-2">
                    {isAr ? 'خصوصيتك محمية. لن يتم مشاركة بياناتك أبداً.' : 'Your privacy is protected. No spam.'}
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Visual of Omani Architect & Authentic Sindbad Credentials (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D5E5E8] shadow-lg bg-[#F7FAFA]">
              
              {/* Real Architectural Consultation Photograph */}
              <div className="relative aspect-[4/3] w-full bg-gradient-to-tr from-[#07333B] via-[#0E4954] to-[#125D6B] overflow-hidden">
                <img
                  src="/images/consultation-engineer.jpg"
                  alt={isAr ? 'مهندس السندباد يستعرض المخططات وعينات المواد' : 'Sindbad architect reviewing design plans and swatches'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.consultation-svg-fallback') as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />

                {/* Subtle dark teal scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07333B]/60 via-transparent to-transparent pointer-events-none" />

                {/* SVG Visual Composition fallback */}
                <div className="consultation-svg-fallback hidden absolute inset-0">
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 700 525"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="blueprintGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#028090" />
                      <stop offset="1" stopColor="#005B66" />
                    </linearGradient>
                  </defs>

                  {/* Showroom Atmosphere */}
                  <rect width="700" height="525" fill="#0A3641" />
                  
                  {/* Modern Interior Display Wall */}
                  <rect x="30" y="30" width="640" height="465" rx="8" fill="#0D4452" opacity="0.6" />
                  <line x1="30" y1="180" x2="670" y2="180" stroke="#009AA6" strokeWidth="1" opacity="0.3" />
                  <line x1="30" y1="340" x2="670" y2="340" stroke="#009AA6" strokeWidth="1" opacity="0.3" />
                  
                  {/* Subtle Grid Lines like CAD / 3D software */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line key={i} x1={50 + i * 60} y1="30" x2={50 + i * 60} y2="495" stroke="#009AA6" strokeWidth="0.5" opacity="0.15" />
                  ))}

                  {/* Consultation Desk */}
                  <polygon points="120,380 650,380 620,525 150,525" fill="#E8EFF1" opacity="0.95" />
                  <polygon points="110,370 660,370 650,380 120,380" fill="#FFFFFF" />

                  {/* 3D Blueprint Document on Desk */}
                  <polygon points="260,390 540,390 520,490 240,490" fill="#E1F5F7" stroke="#009AA6" strokeWidth="1.5" />
                  <line x1="280" y1="410" x2="510" y2="410" stroke="#009AA6" strokeWidth="2" />
                  <line x1="280" y1="430" x2="460" y2="430" stroke="#009AA6" strokeWidth="1.5" />
                  <line x1="280" y1="450" x2="490" y2="450" stroke="#009AA6" strokeWidth="1.5" />
                  <line x1="280" y1="470" x2="430" y2="470" stroke="#009AA6" strokeWidth="1.5" />

                  {/* Stylized Omani Architect Figure in Traditional White Dishdasha and Kummah */}
                  <path d="M420,230 Q460,240 520,270 L540,480 L380,480 L395,270 Z" fill="#F8FAFA" />
                  <line x1="450" y1="230" x2="450" y2="290" stroke="#D3E2E5" strokeWidth="2.5" />
                  <circle cx="450" cy="290" r="3" fill="#EA580C" />

                  <circle cx="450" cy="180" r="42" fill="#E2BA96" />
                  <ellipse cx="450" cy="160" rx="42" ry="24" fill="#009AA6" />
                  <rect x="408" y="150" width="84" height="15" fill="#007D87" />
                  <line x1="408" y1="157" x2="492" y2="157" stroke="#EA580C" strokeWidth="1.5" />

                  <path d="M425,185 Q450,215 475,185" fill="#3D291C" />

                  <ellipse cx="370" cy="410" rx="18" ry="12" fill="#E2BA96" />
                  <ellipse cx="490" cy="410" rx="18" ry="12" fill="#E2BA96" />
                  <polygon points="340,395 380,395 375,425 335,425" fill="#FFFFFF" stroke="#CCE0E3" strokeWidth="1.5" />
                </svg>
                </div>

                {/* Authentic Sindbad Feature Overlay Card (Replicating exact card in screenshot) */}
                <div className="absolute top-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-[#009AA6]/95 backdrop-blur-md text-white p-5 rounded-xl border border-white/20 shadow-xl">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/20">
                    <Sparkles className="w-4 h-4 text-[#FFDEAA]" />
                    <h4 className="font-bold text-sm tracking-wide">
                      {isAr ? 'عن السندباد؟' : 'About Sindbad?'}
                    </h4>
                  </div>
                  
                  <ul className="space-y-2.5 text-xs text-white/95">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 text-[#FFDEAA] shrink-0" />
                      <span>{isAr ? 'وكيل أكبر مصانع العالم (OPPEIN)' : 'Agent of the world\'s largest factories'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 text-[#FFDEAA] shrink-0" />
                      <span>{isAr ? '20 عاماً من الخبرة بالسوق العماني' : '20 years of experience in Omani market'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 text-[#FFDEAA] shrink-0" />
                      <span>{isAr ? 'أحدث التصاميم الإيطالية العصرية' : 'Latest European & Italian designs'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 text-[#FFDEAA] shrink-0" />
                      <span>{isAr ? 'مواد أوروبية معتمدة ومقاومة للرطوبة' : 'Globally certified European materials'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 text-[#FFDEAA] shrink-0" />
                      <span>{isAr ? 'ضمان شامل ومكتوب لمدة 10 سنوات' : '10-year comprehensive warranty'}</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
