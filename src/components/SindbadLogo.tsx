import React from 'react';

interface SindbadLogoProps {
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const SindbadLogo: React.FC<SindbadLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = false
}) => {
  // Variant color definitions
  const isDarkSurface = variant === 'white';
  const primaryTextColor = isDarkSurface ? '#FFFFFF' : '#07333B';
  const accentColor = isDarkSurface ? '#00D1E0' : '#009AA6';
  const badgeBg = isDarkSurface ? '#009AA6' : '#07333B';
  const badgeText = '#FFFFFF';

  const heights = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14'
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${heights[size]}`}>
      {/* Architectural Emblem: 4 Stacked Curved Horizontal Shelves / Louvers */}
      <svg
        className="h-full aspect-[1/1] shrink-0"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Tier 1 - Top subtle curve */}
        <rect x="25" y="16" width="30" height="6" rx="3" fill={accentColor} />
        {/* Tier 2 */}
        <rect x="18" y="27" width="44" height="6.5" rx="3.25" fill={accentColor} />
        {/* Tier 3 */}
        <rect x="12" y="38.5" width="56" height="7" rx="3.5" fill={accentColor} />
        {/* Tier 4 - Base wide shelf */}
        <rect x="6" y="50.5" width="68" height="7.5" rx="3.75" fill={accentColor} />
        {/* Foundation bottom line */}
        <rect x="22" y="63" width="36" height="5" rx="2.5" fill={accentColor} opacity="0.8" />
      </svg>

      {/* Typography: Arabic + English + OP badge */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className="font-extrabold tracking-tight"
            style={{
              color: primaryTextColor,
              fontSize: size === 'sm' ? '1.05rem' : size === 'lg' ? '1.65rem' : '1.35rem',
              fontFamily: "'Cairo', sans-serif"
            }}
          >
            السندباد
          </span>
          <span
            className="text-[0.65rem] font-bold px-1.5 py-0.5 rounded tracking-wider"
            style={{ backgroundColor: badgeBg, color: badgeText }}
            title="Official OPPEIN Agency"
          >
            OP
          </span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span
            className="font-bold tracking-[0.16em] uppercase text-[0.65rem]"
            style={{
              color: isDarkSurface ? '#E2F1F3' : '#007D87',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}
          >
            SINDBAD
          </span>
          {showSubtitle && (
            <span
              className="text-[0.55rem] tracking-tight opacity-75 font-normal"
              style={{ color: isDarkSurface ? '#C3DCE0' : '#496B74' }}
            >
              · OPPEIN OMAN
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
