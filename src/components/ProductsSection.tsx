import React, { useState, useRef, useEffect } from 'react';
import {
  Eye,
  Check,
  X,
  LayoutGrid,
  Utensils,
  DoorClosed,
  AppWindow,
  Armchair,
  ChevronDown,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Language, ProductItem } from '../types';
import { PRODUCTS_DATA } from '../data/sindbadData';

interface ProductsSectionProps {
  lang: Language;
  onSelectProductForConsultation: (productId: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  lang,
  onSelectProductForConsultation
}) => {
  const isAr = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [cardDensity, setCardDensity] = useState<'comfortable' | 'compact'>('comfortable');

  const pillContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      id: 'all',
      labelAr: 'جميع الحلول',
      labelEn: 'All Solutions',
      subAr: 'المطابخ، الخزائن، النوافذ، الصالات',
      subEn: 'Kitchens, Closets, Windows, Living',
      icon: LayoutGrid,
      count: PRODUCTS_DATA.length
    },
    {
      id: 'kitchens',
      labelAr: 'المطابخ الإيطالية',
      labelEn: 'Italian Kitchens',
      subAr: 'تصاميم بدون مقابض ورخام كوارتز',
      subEn: 'Handleless & Calacatta Quartz',
      icon: Utensils,
      count: PRODUCTS_DATA.filter((p) => p.category === 'kitchens').length
    },
    {
      id: 'wardrobes',
      labelAr: 'خزائن وغرف الملابس',
      labelEn: 'Wardrobes & Closets',
      subAr: 'غرف Walk-in ودواليب جدارية',
      subEn: 'Walk-in & Built-in Suites',
      icon: DoorClosed,
      count: PRODUCTS_DATA.filter((p) => p.category === 'wardrobes').length
    },
    {
      id: 'windows',
      labelAr: 'نوافذ ألمنيوم ثيرمال',
      labelEn: 'Acoustic Windows',
      subAr: 'عزل حراري وصوتي عالي للخليج',
      subEn: 'Thermal-break & Acoustic Glazing',
      icon: AppWindow,
      count: PRODUCTS_DATA.filter((p) => p.category === 'windows').length
    },
    {
      id: 'living',
      labelAr: 'أثاث الصالات والمجالس',
      labelEn: 'Living & Media Suites',
      subAr: 'جدران تلفزيون وخزائن عائمة',
      subEn: 'Entertainment Walls & Credenzas',
      icon: Armchair,
      count: PRODUCTS_DATA.filter((p) => p.category === 'living').length
    }
  ];

  const activeCategoryObj = categories.find((c) => c.id === activeCategory) || categories[0];

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  // Auto-scroll active pill into view when changed
  useEffect(() => {
    if (pillContainerRef.current) {
      const activeEl = pillContainerRef.current.querySelector(
        `[data-category="${activeCategory}"]`
      ) as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }
  }, [activeCategory]);

  return (
    <section id="products" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold tracking-widest text-[#009AA6] uppercase mb-2 block">
            {isAr ? 'عالم أوبين والسندباد 2026' : 'OPPEIN & Sindbad 2026 Portfolio'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07333B] tracking-tight">
            {isAr ? 'حلول ومنتجات متكاملة لمنزلك' : 'Comprehensive Home Solutions'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4E7079]">
            {isAr
              ? 'حلول منزلية شاملة صممت لتلائم ذوقك الرفيع وأسلوب حياتك الفريد في سلطنة عمان.'
              : 'Comprehensive home solutions designed to perfectly suit your home and unique lifestyle.'}
          </p>
        </div>

        {/* ======================================================== */}
        {/* ENHANCED RESPONSIVE FILTER ARCHITECTURE */}
        {/* ======================================================== */}

        {/* 1. MOBILE-ONLY SELECTOR & BOTTOM-DRAWER TRIGGER (< md) */}
        <div className="block md:hidden mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex-1 flex items-center justify-between p-3.5 bg-[#F0F8F9] hover:bg-[#E6F4F6] border border-[#CCE2E5] rounded-xl text-start transition-all duration-150 shadow-xs cursor-pointer"
              aria-label="Filter products by category"
              aria-expanded={mobileDropdownOpen}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#009AA6] text-white flex items-center justify-center shrink-0">
                  <activeCategoryObj.icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] text-[#557881] block leading-none mb-1">
                    {isAr ? 'تصفح حسب الفئة:' : 'Selected Category:'}
                  </span>
                  <span className="text-sm font-bold text-[#07333B] truncate block">
                    {isAr ? activeCategoryObj.labelAr : activeCategoryObj.labelEn}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-white text-[#00818B] border border-[#CCE2E5] tabular-nums">
                  {activeCategoryObj.count}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#07333B] transition-transform duration-200 ${
                    mobileDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            {activeCategory !== 'all' && (
              <button
                onClick={() => setActiveCategory('all')}
                className="p-3.5 bg-white border border-[#D5E5E8] hover:border-[#009AA6] text-[#07333B] rounded-xl transition-colors shrink-0 shadow-xs"
                title={isAr ? 'عرض كل الحلول' : 'Show All'}
              >
                <RotateCcw className="w-4 h-4 text-[#009AA6]" />
              </button>
            )}
          </div>

          {/* Mobile Accordion / Drawer Options */}
          {mobileDropdownOpen && (
            <div className="mt-2 p-2 bg-white rounded-xl border border-[#CCE2E5] shadow-xl animate-in slide-in-from-top-2 duration-150 space-y-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setMobileDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-start transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#009AA6] text-white font-bold shadow-xs'
                        : 'hover:bg-[#F2F8F9] text-[#07333B]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-[#EBF4F5] text-[#009AA6]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm block">
                          {isAr ? cat.labelAr : cat.labelEn}
                        </span>
                        <span
                          className={`text-[10px] block ${
                            isSelected ? 'text-white/80' : 'text-[#64868F]'
                          }`}
                        >
                          {isAr ? cat.subAr : cat.subEn}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-mono tabular-nums ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-[#EEF5F6] text-[#07333B]'
                        }`}
                      >
                        {cat.count}
                      </span>
                      {isSelected && <Check className="w-4 h-4" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 2. HORIZONTAL RESPONSIVE PILL BAR (WITH FADE MASKS & ITEM COUNTS) */}
        <div className="relative mb-8">
          {/* Subtle Left/Right Fade Shadows for Horizontal Scroll Affordance */}
          <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 rtl:right-auto rtl:left-0 rtl:bg-gradient-to-r" />
          <div className="md:hidden pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 rtl:left-auto rtl:right-0 rtl:bg-gradient-to-l" />

          <div
            ref={pillContainerRef}
            className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 pt-1 px-1 scrollbar-none snap-x snap-mandatory"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  data-category={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`snap-start shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#009AA6] text-white border-[#009AA6] shadow-sm scale-[1.02]'
                      : 'bg-[#FAFDFD] text-[#1B464F] border-[#D8E8EB] hover:border-[#009AA6]/50 hover:bg-[#F0F8F9]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#009AA6]'}`} />
                  <span className="whitespace-nowrap">{isAr ? cat.labelAr : cat.labelEn}</span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.2 rounded-md font-mono tabular-nums ${
                      isSelected
                        ? 'bg-white/25 text-white'
                        : 'bg-[#EBF3F5] text-[#007D87]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. DYNAMIC STATUS & RESULTS BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-[#E8F1F3] text-xs text-[#52747D]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#07333B]">
              {isAr ? (
                <>
                  عرض <span className="text-[#009AA6] font-bold">{filteredProducts.length}</span> من أصل{' '}
                  <span className="font-bold">{PRODUCTS_DATA.length}</span> حلول معمارية
                </>
              ) : (
                <>
                  Showing <span className="text-[#009AA6] font-bold">{filteredProducts.length}</span> of{' '}
                  <span className="font-bold">{PRODUCTS_DATA.length}</span> solutions
                </>
              )}
            </span>

            {activeCategory !== 'all' && (
              <button
                onClick={() => setActiveCategory('all')}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#009AA6] hover:underline"
              >
                <span>{isAr ? '(عرض الكل)' : '(Reset to All)'}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#698B93] hidden sm:inline">
              {isAr ? 'ضمان 10 سنوات على جميع التشكيلات' : '10-Year Warranty on all models'}
            </span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-[#D5E5E8] overflow-hidden hover:border-[#009AA6]/60 transition-all duration-200 shadow-xs hover:shadow-lg flex flex-col group"
            >
              {/* Product Visual Frame */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-[#EAF3F4] via-[#F4F9FA] to-[#E3EFF1] overflow-hidden border-b border-[#E3EDEF]">
                {product.image && (
                  <img
                    src={product.image}
                    alt={isAr ? product.titleAr : product.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fb = e.currentTarget.parentElement?.querySelector('.product-svg-fallback') as HTMLElement;
                      if (fb) fb.style.display = 'block';
                    }}
                  />
                )}

                {/* SVG Architectural Visual Representation for Product (Fallback) */}
                <div className={`product-svg-fallback ${product.image ? 'hidden' : 'block'} w-full h-full`}>
                <svg
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  viewBox="0 0 400 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="250" fill="#E8F1F3" />
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="250" stroke="#D1E3E6" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <line key={i} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="#D1E3E6" strokeWidth="0.5" />
                  ))}

                  {product.category === 'kitchens' && (
                    <g>
                      <rect x="40" y="30" width="320" height="110" rx="3" fill="#0A3641" />
                      <line x1="120" y1="30" x2="120" y2="140" stroke="#009AA6" strokeWidth="1" />
                      <line x1="200" y1="30" x2="200" y2="140" stroke="#009AA6" strokeWidth="1" />
                      <line x1="280" y1="30" x2="280" y2="140" stroke="#009AA6" strokeWidth="1" />
                      <polygon points="60,150 340,150 320,225 80,225" fill="#FFFFFF" stroke="#CCE0E3" strokeWidth="1" />
                      <polygon points="80,165 320,165 305,215 95,215" fill="#009AA6" opacity="0.85" />
                      <line x1="40" y1="140" x2="360" y2="140" stroke="#FFA726" strokeWidth="2.5" opacity="0.9" />
                    </g>
                  )}

                  {product.category === 'wardrobes' && (
                    <g>
                      <rect x="50" y="25" width="300" height="200" rx="4" fill="#07333B" />
                      <rect x="65" y="40" width="80" height="170" rx="2" fill="#154954" stroke="#00D1E0" strokeWidth="1" opacity="0.8" />
                      <rect x="160" y="40" width="80" height="170" rx="2" fill="#154954" stroke="#00D1E0" strokeWidth="1" opacity="0.8" />
                      <rect x="255" y="40" width="80" height="170" rx="2" fill="#154954" stroke="#00D1E0" strokeWidth="1" opacity="0.8" />
                      <line x1="70" y1="45" x2="70" y2="205" stroke="#FFA726" strokeWidth="2" opacity="0.8" />
                      <line x1="165" y1="45" x2="165" y2="205" stroke="#FFA726" strokeWidth="2" opacity="0.8" />
                      <line x1="260" y1="45" x2="260" y2="205" stroke="#FFA726" strokeWidth="2" opacity="0.8" />
                      <line x1="75" y1="70" x2="140" y2="70" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
                      <line x1="170" y1="70" x2="235" y2="70" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
                      <rect x="265" y="150" width="60" height="45" fill="#0A3641" />
                    </g>
                  )}

                  {product.category === 'windows' && (
                    <g>
                      <rect x="50" y="30" width="300" height="190" rx="4" fill="#FFFFFF" stroke="#07333B" strokeWidth="4" />
                      <line x1="200" y1="30" x2="200" y2="220" stroke="#07333B" strokeWidth="4" />
                      <rect x="60" y="40" width="130" height="170" fill="#C9EBF0" opacity="0.7" />
                      <rect x="210" y="40" width="130" height="170" fill="#C9EBF0" opacity="0.7" />
                      <line x1="70" y1="60" x2="150" y2="180" stroke="#FFFFFF" strokeWidth="3" opacity="0.8" />
                      <line x1="220" y1="60" x2="300" y2="180" stroke="#FFFFFF" strokeWidth="3" opacity="0.8" />
                    </g>
                  )}

                  {product.category === 'living' && (
                    <g>
                      <rect x="40" y="30" width="320" height="190" rx="4" fill="#0A3641" />
                      <rect x="110" y="45" width="180" height="120" rx="2" fill="#FFFFFF" />
                      <rect x="135" y="65" width="130" height="80" rx="2" fill="#141E22" stroke="#009AA6" strokeWidth="1" />
                      <rect x="65" y="180" width="270" height="30" rx="2" fill="#8C6544" />
                      <line x1="65" y1="180" x2="335" y2="180" stroke="#FFA726" strokeWidth="2" opacity="0.8" />
                    </g>
                  )}
                </svg>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-[#07333B]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  {isAr ? product.collectionAr : product.collectionEn}
                </div>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 bg-white/95 text-[#07333B] hover:text-[#009AA6] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isAr ? 'معاينة التفاصيل' : 'View Specs'}</span>
                </button>
              </div>

              {/* Content Box */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6B8C94] mb-2 font-medium">
                    <span>{product.style}</span>
                    <span className="text-[#009AA6] font-bold">
                      {isAr ? `ضمان ${product.warranty}` : `${product.warranty} Warranty`}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#07333B] mb-2 group-hover:text-[#009AA6] transition-colors">
                    {isAr ? product.titleAr : product.titleEn}
                  </h3>

                  <p className="text-xs text-[#52747D] line-clamp-2 leading-relaxed mb-4">
                    {isAr ? product.descriptionAr : product.descriptionEn}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-1.5 mb-6 text-xs text-[#2A525B]">
                    {(isAr ? product.featuresAr : product.featuresEn).slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#009AA6] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#EEF3F5] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-bold text-[#07333B] hover:text-[#009AA6] transition-colors cursor-pointer"
                  >
                    {isAr ? 'تفاصيل المواد' : 'Material Specs'}
                  </button>

                  <button
                    onClick={() => onSelectProductForConsultation(product.id)}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#009AA6] hover:bg-[#00818B] rounded-lg transition-colors shadow-xs cursor-pointer"
                  >
                    {isAr ? 'طلب تصميم 3D' : 'Request 3D Plan'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07333B]/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#D9EAEB] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAF1F3]">
              <div>
                <span className="text-xs font-bold text-[#009AA6]">
                  {isAr ? selectedProduct.collectionAr : selectedProduct.collectionEn}
                </span>
                <h3 className="text-xl font-bold text-[#07333B]">
                  {isAr ? selectedProduct.titleAr : selectedProduct.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 text-[#63858D] hover:text-[#07333B] hover:bg-[#F0F5F6] rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4">
              {selectedProduct.image && (
                <div className="rounded-xl overflow-hidden aspect-[16/9] w-full border border-[#D5E5E8] shadow-xs">
                  <img
                    src={selectedProduct.image}
                    alt={isAr ? selectedProduct.titleAr : selectedProduct.titleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="text-sm text-[#3E636D] leading-relaxed">
                {isAr ? selectedProduct.descriptionAr : selectedProduct.descriptionEn}
              </p>

              <div>
                <h4 className="text-xs font-bold text-[#07333B] uppercase tracking-wider mb-2.5">
                  {isAr ? 'الخامات والتشطيبات المتاحة:' : 'Available Finishes & Materials:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.finishes.map((finish, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium bg-[#F0F7F8] text-[#07333B] border border-[#D5E6E9] rounded-md"
                    >
                      {finish}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#07333B] uppercase tracking-wider mb-2.5">
                  {isAr ? 'الميزات الهندسية:' : 'Engineering Features:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2A525B]">
                  {(isAr ? selectedProduct.featuresAr : selectedProduct.featuresEn).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#FAFDFD] p-2.5 rounded-lg border border-[#E8F1F3]">
                      <Check className="w-3.5 h-3.5 text-[#009AA6] mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#F2F8F9] rounded-xl border border-[#CCE2E5] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#64848D] block">{isAr ? 'الضمان المعتمد:' : 'Certified Warranty:'}</span>
                  <span className="font-bold text-[#07333B] text-sm">{selectedProduct.warranty}</span>
                </div>
                <div>
                  <span className="text-[#64848D] block">{isAr ? 'المورد الحصري:' : 'Sole Agent:'}</span>
                  <span className="font-bold text-[#009AA6] text-sm">OPPEIN Oman</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAF1F3] flex justify-end gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 text-xs font-bold text-[#4E7079] hover:bg-[#F2F6F7] rounded-lg transition-colors cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
              <button
                onClick={() => {
                  const prodId = selectedProduct.id;
                  setSelectedProduct(null);
                  onSelectProductForConsultation(prodId);
                }}
                className="px-5 py-2.5 bg-[#009AA6] text-white text-xs font-bold rounded-lg hover:bg-[#00818B] transition-colors cursor-pointer"
              >
                {isAr ? 'طلب تصميم هذه الغرفة' : 'Request Design for This Room'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
