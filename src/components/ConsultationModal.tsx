import React, { useState } from 'react';
import { X, Send, CheckCircle2, User, Phone, Mail, MapPin, Layers } from 'lucide-react';
import { Language } from '../types';
import { BRANCHES_DATA, PRODUCTS_DATA } from '../data/sindbadData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialProductId?: string;
  initialBranchId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialProductId,
  initialBranchId
}) => {
  if (!isOpen) return null;

  const isAr = lang === 'ar';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBranch, setSelectedBranch] = useState(
    initialBranchId || BRANCHES_DATA[0].id
  );
  const [selectedProduct, setSelectedProduct] = useState(
    initialProductId || 'kitchens'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError(isAr ? 'يرجى إدخال الاسم الكامل' : 'Please provide your name');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 7) {
      setError(isAr ? 'يرجى إدخال رقم هاتف عماني صحيح' : 'Please provide a valid phone number');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07333B]/65 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#D5E5E8] relative max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 left-5 rtl:left-auto rtl:right-5 p-1.5 text-[#63858D] hover:text-[#07333B] hover:bg-[#F0F5F6] rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#E0F5F6] text-[#009AA6] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-[#07333B] mb-2">
              {isAr ? 'تم استلام طلبك بنجاح' : 'Consultation Booked!'}
            </h3>
            <p className="text-sm text-[#4E7079] max-w-sm mb-6 leading-relaxed">
              {isAr
                ? `شكراً ${fullName}. سيتواصل معك مهندس التصميم من فرع ${
                    BRANCHES_DATA.find((b) => b.id === selectedBranch)?.nameAr
                  } لتحديد موعد الزيارة وعرض مخططات 3D.`
                : `Thank you ${fullName}. Our design engineer will call you shortly to confirm your consultation.`}
            </p>
            <div className="p-3 bg-[#F0F8F9] rounded-lg border border-[#D5E6E9] text-xs font-mono text-[#07333B] mb-6">
              ID: SINDBAD-{Math.floor(10000 + Math.random() * 90000)}
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#009AA6] text-white text-xs font-bold rounded-lg hover:bg-[#00818B]"
            >
              {isAr ? 'تم، شكراً لكم' : 'Done, Thank You'}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[#009AA6] tracking-wider uppercase block mb-1">
                {isAr ? 'خدمة التصميم والمقاسات المجانية' : 'Free Architectural Consultation'}
              </span>
              <h3 className="text-2xl font-black text-[#07333B]">
                {isAr ? 'احجز استشارتك المجانية' : 'Book Free Consultation'}
              </h3>
              <p className="text-xs text-[#52747D] mt-1">
                {isAr
                  ? 'اختر الفرع الأقرب إليك ونوع المطبخ أو الخزائن المطلوبة وسيقوم مهندسنا بالتواصل معك.'
                  : 'Select your preferred showroom and interest to arrange a 3D planning session.'}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#07333B] mb-1">
                  {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={isAr ? 'مثال: سعيد بن خلفان' : 'e.g. Said Al Khalfan'}
                    className="w-full px-3.5 py-2.5 bg-[#FAFDFD] border border-[#CCE2E5] rounded-lg text-xs outline-none focus:border-[#009AA6]"
                  />
                  <User className="w-3.5 h-3.5 text-[#8AA6AD] absolute left-3 rtl:left-auto rtl:right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#07333B] mb-1">
                  {isAr ? 'رقم الهاتف (عمان) *' : 'Phone Number (Oman) *'}
                </label>
                <div className="flex" dir="ltr">
                  <span className="inline-flex items-center px-3 text-xs font-bold text-[#07333B] bg-[#EDF5F6] border border-r-0 border-[#CCE2E5] rounded-l-lg select-none">
                    +968
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9xxxxxxx / 7xxxxxxx"
                    className="w-full px-3.5 py-2.5 bg-[#FAFDFD] border border-[#CCE2E5] rounded-r-lg text-xs outline-none focus:border-[#009AA6] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#07333B] mb-1">
                  {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAFDFD] border border-[#CCE2E5] rounded-lg text-xs outline-none focus:border-[#009AA6]"
                  />
                  <Mail className="w-3.5 h-3.5 text-[#8AA6AD] absolute left-3 rtl:left-auto rtl:right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#07333B] mb-1">
                    {isAr ? 'الفرع الأقرب' : 'Showroom'}
                  </label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAFDFD] border border-[#CCE2E5] rounded-lg text-xs outline-none focus:border-[#009AA6]"
                  >
                    {BRANCHES_DATA.map((b) => (
                      <option key={b.id} value={b.id}>
                        {isAr ? b.nameAr : b.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#07333B] mb-1">
                    {isAr ? 'المنتج المطلوب' : 'Product Type'}
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAFDFD] border border-[#CCE2E5] rounded-lg text-xs outline-none focus:border-[#009AA6]"
                  >
                    <option value="kitchens">{isAr ? 'المطابخ الإيطالية' : 'Italian Kitchens'}</option>
                    <option value="wardrobes">{isAr ? 'خزائن وغرف ملابس' : 'Wardrobes & Walk-in'}</option>
                    <option value="windows">{isAr ? 'نوافذ ألمنيوم ثيرمال' : 'Acoustic Windows'}</option>
                    <option value="living">{isAr ? 'الصالات وتأثيث شامل' : 'Living & Media Suites'}</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-[#009AA6] hover:bg-[#00818B] active:scale-[0.99] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>{isAr ? 'جاري الإرسال...' : 'Booking...'}</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{isAr ? 'تأكيد حجز الاستشارة المجانية' : 'Confirm Free Booking'}</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-[#70919A] mt-2">
                  {isAr ? 'ضمان 10 سنوات كتابي · فحص ومقاسات ليزرية مجانية' : '10-Year Written Warranty · Free Site Measurement'}
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
