import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, X } from 'lucide-react';
import { Language, ReviewItem } from '../types';
import { REVIEWS_DATA } from '../data/sindbadData';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [modalOpen, setModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [userBranch, setUserBranch] = useState('فرع المعبيلة');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !userComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      authorAr: authorName,
      authorEn: authorName,
      branchAr: userBranch,
      branchEn: userBranch,
      rating: userRating,
      timeAr: 'الآن',
      timeEn: 'Just now',
      contentAr: userComment,
      contentEn: userComment,
      verified: true,
      avatarColor: '#009AA6'
    };

    setReviewsList([newRev, ...reviewsList]);
    setAuthorName('');
    setUserComment('');
    setModalOpen(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAFBFB] relative border-b border-[#E6EFF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {/* Google Verified Review Icon */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-xs font-bold text-[#52747D]">
                {isAr ? 'تقييمات جوجل المعتمدة (4.9 / 5)' : 'Google Verified Reviews (4.9 / 5)'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07333B] tracking-tight">
              {isAr ? 'آراء وتجارب عملائنا في عمان' : 'Customer Reviews'}
            </h2>
            <p className="mt-2 text-sm text-[#4E7079]">
              {isAr
                ? 'شهادات حقيقية من ملاك الفيلات والشقق الذين اختاروا السندباد لتنفيذ مطابخهم وخزائنهم.'
                : 'Authentic testimonials from Omani homeowners who trusted Sindbad for bespoke cabinetry.'}
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#009AA6] bg-white border border-[#B2D8DC] hover:border-[#009AA6] hover:bg-[#F0F8F9] rounded-lg transition-colors shadow-xs shrink-0 self-start sm:self-auto cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{isAr ? 'أضف تقييمك' : 'Write a Review'}</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-xl border border-[#D5E5E8] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header with Google G Icon & User Initials */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-xs"
                      style={{ backgroundColor: rev.avatarColor }}
                    >
                      {rev.authorAr.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#07333B] leading-snug">
                        {isAr ? rev.authorAr : rev.authorEn}
                      </h4>
                      <span className="text-[11px] text-[#63848D] block">
                        {isAr ? rev.branchAr : rev.branchEn} · {isAr ? rev.timeAr : rev.timeEn}
                      </span>
                    </div>
                  </div>

                  {/* Google Mini Icon */}
                  <div className="w-5 h-5 rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-bold text-[#4285F4]">G</span>
                  </div>
                </div>

                {/* Stars Rating (Warm Orange Accents) */}
                <div className="flex items-center gap-1 mb-3 text-[#EA580C]">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EA580C]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xs sm:text-[13px] text-[#33565F] leading-relaxed">
                  "{isAr ? rev.contentAr : rev.contentEn}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-5 pt-3 border-t border-[#EEF3F5] flex items-center gap-1.5 text-[11px] text-[#009AA6] font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{isAr ? 'عميل معتمد وموثق' : 'Verified Google Reviewer'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07333B]/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#D9EAEB]">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAF1F3]">
              <h3 className="text-base font-bold text-[#07333B]">
                {isAr ? 'شاركنا تقييمك لخدمات السندباد' : 'Share Your Experience'}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 text-[#63858D] hover:text-[#07333B] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="py-4 space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#07333B] mb-1">
                  {isAr ? 'اسمك الكريم' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder={isAr ? 'الاسم' : 'Name'}
                  className="w-full px-3 py-2 bg-white border border-[#CCE2E5] rounded-lg text-xs outline-none focus:border-[#009AA6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#07333B] mb-1">
                  {isAr ? 'الفرع الذي تعاملت معه' : 'Showroom Branch'}
                </label>
                <select
                  value={userBranch}
                  onChange={(e) => setUserBranch(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#CCE2E5] rounded-lg text-xs outline-none focus:border-[#009AA6]"
                >
                  <option value="فرع المعبيلة">فرع المعبيلة — مسقط</option>
                  <option value="فرع العذيبة">فرع العذيبة — مسقط</option>
                  <option value="فرع عبري">فرع عبري — الظاهرة</option>
                  <option value="فرع صلالة">فرع صلالة — ظفار</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#07333B] mb-1">
                  {isAr ? 'التقييم' : 'Rating'}
                </label>
                <div className="flex gap-1 text-[#EA580C]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setUserRating(star)}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= userRating ? 'fill-[#EA580C]' : 'stroke-[#CCE2E5]'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#07333B] mb-1">
                  {isAr ? 'رأيك وتجربتك بالتفصيل' : 'Your Review'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  placeholder={isAr ? 'اكتب عن جودة المطبخ، دقة المواعيد، وحرفية التركيب...' : 'Describe the design, craftsmanship, and installation...'}
                  className="w-full px-3 py-2 bg-white border border-[#CCE2E5] rounded-lg text-xs outline-none focus:border-[#009AA6]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-[#5C7D86] hover:bg-[#F2F6F7] rounded-lg"
                >
                  {isAr ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#009AA6] hover:bg-[#00818B] rounded-lg"
                >
                  {isAr ? 'نشر التقييم' : 'Post Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
