import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar } from 'lucide-react';
import { Language, Branch } from '../types';
import { BRANCHES_DATA } from '../data/sindbadData';

interface LocationsSectionProps {
  lang: Language;
  onBookBranchVisit: (branchId: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({
  lang,
  onBookBranchVisit
}) => {
  const isAr = lang === 'ar';
  const [selectedBranch, setSelectedBranch] = useState<Branch>(BRANCHES_DATA[0]);

  return (
    <section id="showrooms" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#009AA6] uppercase mb-2 block">
            {isAr ? 'صالات عرض السندباد في سلطنة عمان' : 'Sindbad Showrooms Across Oman'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07333B] tracking-tight">
            {isAr ? 'فروعنا في خدمتكم' : 'Locations & Showrooms'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4E7079]">
            {isAr
              ? 'تفضل بزيارة صالات عرض السندباد المجهزة بنماذج حية للمطابخ والخزائن، وعاين المواد والتشطيبات الإيطالية على أرض الواقع.'
              : 'Visit Sindbad branches across the Sultanate and enjoy an immersive experience touching real European materials and finishes.'}
          </p>
        </div>

        {/* 2-Column Layout: Branch Cards / Details + Interactive Oman Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Branch Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            {BRANCHES_DATA.map((branch) => {
              const isSelected = selectedBranch.id === branch.id;

              return (
                <div
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#F0F8F9] border-[#009AA6] shadow-md ring-1 ring-[#009AA6]/30'
                      : 'bg-[#FAFCFC] border-[#DCE8EA] hover:border-[#B3D6DB] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                          isSelected
                            ? 'bg-[#009AA6] text-white'
                            : 'bg-[#E1EDEF] text-[#07333B]'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#07333B]">
                        {isAr ? branch.nameAr : branch.nameEn}
                      </h3>
                    </div>

                    <span className="text-[11px] font-semibold text-[#00818B]">
                      {isAr ? branch.regionAr : branch.regionEn}
                    </span>
                  </div>

                  <p className="text-xs text-[#52747D] leading-relaxed mb-3">
                    {isAr ? branch.addressAr : branch.addressEn}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#DFEAEB] text-xs">
                    <a
                      href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-bold text-[#07333B] hover:text-[#009AA6] flex items-center gap-1.5"
                      dir="ltr"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-3 h-3 text-[#009AA6]" />
                      <span>{branch.phone}</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookBranchVisit(branch.id);
                        }}
                        className="px-2.5 py-1 text-[11px] font-bold text-white bg-[#009AA6] hover:bg-[#00818B] rounded-md transition-colors"
                      >
                        {isAr ? 'حجز موعد' : 'Book Visit'}
                      </button>
                      <a
                        href={branch.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 text-[#66878F] hover:text-[#07333B] rounded"
                        title="Google Maps"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Representation & Current Branch Spotlight (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAFDFD] rounded-2xl border border-[#D5E5E8] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            
            {/* Interactive Oman Coastline Graphic with Pins */}
            <div className="relative aspect-[16/10] w-full bg-[#EBF4F6] rounded-xl overflow-hidden border border-[#D2E4E8] mb-6">
              
              {/* Sultanate of Oman Stylized Vector Map */}
              <svg
                className="w-full h-full object-cover"
                viewBox="0 0 600 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Arabian Sea / Gulf Background Tint */}
                <rect width="600" height="400" fill="#E2F0F3" />
                
                {/* Coastal Waves Texture */}
                <path d="M0,100 Q150,110 300,95 T600,105" stroke="#C5E3E8" strokeWidth="1" opacity="0.6" fill="none" />
                <path d="M0,220 Q150,230 300,215 T600,225" stroke="#C5E3E8" strokeWidth="1" opacity="0.6" fill="none" />
                <path d="M0,320 Q150,330 300,315 T600,325" stroke="#C5E3E8" strokeWidth="1" opacity="0.6" fill="none" />

                {/* Oman Landmass Boundary Outline */}
                {/* Musandam Peninsula (top tip) */}
                <path
                  d="M410,20 Q425,30 430,45 Q420,55 405,48 Z"
                  fill="#FFFFFF"
                  stroke="#A7C7CD"
                  strokeWidth="2"
                />

                {/* Main Oman Territory */}
                <path
                  d="M390,75 
                     Q420,90 470,120 
                     Q510,150 515,180 
                     Q505,210 460,250 
                     Q430,280 380,310 
                     Q300,350 200,360 
                     Q140,365 110,340 
                     Q120,310 160,280 
                     Q220,240 260,200 
                     Q300,160 330,120 
                     Q360,90 390,75 Z"
                  fill="#FFFFFF"
                  stroke="#A7C7CD"
                  strokeWidth="2"
                />

                {/* Interior Elevation Lines */}
                <path d="M380,100 Q430,130 450,170" stroke="#E1EEF0" strokeWidth="2.5" fill="none" />
                <path d="M340,140 Q380,180 400,230" stroke="#E1EEF0" strokeWidth="2.5" fill="none" />
                <path d="M220,320 Q260,330 300,320" stroke="#E1EEF0" strokeWidth="2.5" fill="none" />

                {/* Country Label */}
                <text x="320" y="220" fill="#88AAB1" fontSize="13" fontWeight="bold" letterSpacing="0.1em">
                  SULTANATE OF OMAN
                </text>
                <text x="345" y="240" fill="#A2C3C9" fontSize="12" fontWeight="600">
                  سلطنة عمان
                </text>

                {/* Pins on the Map */}
                {/* 1. Al Ma'abela (Muscat) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => setSelectedBranch(BRANCHES_DATA[0])}
                >
                  <circle cx="445" cy="118" r="8" fill="#009AA6" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="445" cy="118" r="14" stroke="#009AA6" strokeWidth="1.5" opacity="0.4" />
                  <text x="458" y="115" fill="#07333B" fontSize="10" fontWeight="bold">
                    المعبيلة
                  </text>
                </g>

                {/* 2. Al Adhiba (Muscat) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => setSelectedBranch(BRANCHES_DATA[1])}
                >
                  <circle cx="468" cy="128" r="8" fill="#009AA6" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="468" cy="128" r="14" stroke="#009AA6" strokeWidth="1.5" opacity="0.4" />
                  <text x="482" y="132" fill="#07333B" fontSize="10" fontWeight="bold">
                    العذيبة
                  </text>
                </g>

                {/* 3. Ibri */}
                <g
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => setSelectedBranch(BRANCHES_DATA[2])}
                >
                  <circle cx="365" cy="130" r="8" fill="#009AA6" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="365" cy="130" r="14" stroke="#009AA6" strokeWidth="1.5" opacity="0.4" />
                  <text x="325" y="132" fill="#07333B" fontSize="10" fontWeight="bold">
                    عبري
                  </text>
                </g>

                {/* 4. Salalah */}
                <g
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => setSelectedBranch(BRANCHES_DATA[3])}
                >
                  <circle cx="160" cy="330" r="8" fill="#009AA6" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="160" cy="330" r="14" stroke="#009AA6" strokeWidth="1.5" opacity="0.4" />
                  <text x="175" y="334" fill="#07333B" fontSize="10" fontWeight="bold">
                    صلالة
                  </text>
                </g>
              </svg>

              {/* Map Floating Info Badge */}
              <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#CCE0E3] shadow-xs text-xs font-semibold text-[#07333B]">
                {isAr ? '4 صالات عرض رئيسية في السلطنة' : '4 Premier Showrooms in Oman'}
              </div>
            </div>

            {/* Currently Selected Branch Active View */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#CCE0E3] shadow-xs">
              {/* Branch Header Details */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#009AA6] animate-pulse" />
                  <span className="text-[11px] font-bold text-[#009AA6] uppercase tracking-wider">
                    {isAr ? 'الفرع المحدد حالياً' : 'Currently Selected'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#5C7E87]">
                  {isAr ? selectedBranch.regionAr : selectedBranch.regionEn}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-bold text-[#07333B] mb-1.5 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#009AA6] shrink-0" />
                  <span>{isAr ? selectedBranch.nameAr : selectedBranch.nameEn}</span>
                </h4>
                <p className="text-xs text-[#52747D] leading-relaxed mb-2">
                  {isAr ? selectedBranch.addressAr : selectedBranch.addressEn}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#4F737D] bg-[#F4F9FA] px-3 py-1.5 rounded-lg border border-[#E1ECEE] inline-flex">
                  <Clock className="w-3.5 h-3.5 text-[#009AA6] shrink-0" />
                  <span>{isAr ? selectedBranch.timingAr : selectedBranch.timingEn}</span>
                </div>
              </div>

              {/* Action Buttons Tier (Clean Responsive Architecture - No Crowding) */}
              <div className="pt-4 border-t border-[#EDF4F5] grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
                {/* 1. Get Directions Button */}
                <a
                  href={selectedBranch.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#009AA6] hover:bg-[#00818B] rounded-lg transition-colors shadow-xs whitespace-nowrap min-h-[42px] cursor-pointer"
                >
                  <Navigation className="w-4 h-4 shrink-0" />
                  <span>{isAr ? 'الاتجاهات بالخريطة' : 'Get Directions'}</span>
                </a>

                {/* 2. Direct Phone Call Button */}
                <a
                  href={`tel:${selectedBranch.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#07333B] bg-[#F0F8F9] hover:bg-[#E3F2F4] border border-[#CCE0E3] rounded-lg transition-colors whitespace-nowrap min-h-[42px] cursor-pointer"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-[#009AA6] shrink-0" />
                  <span className="font-mono">{selectedBranch.phone}</span>
                </a>

                {/* 3. Book Showroom Visit Button */}
                <button
                  onClick={() => onBookBranchVisit(selectedBranch.id)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#07333B] hover:text-[#009AA6] bg-white hover:bg-[#F9FCFC] border border-[#CCE0E3] hover:border-[#009AA6] rounded-lg transition-colors whitespace-nowrap min-h-[42px] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span>{isAr ? 'حجز موعد بالفرع' : 'Book Showroom Visit'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
