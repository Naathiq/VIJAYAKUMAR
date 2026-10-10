import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'light' | 'dark'; // for text contrast
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  variant = 'dark'
}) => {
  // Dimension tokens for the emblem
  const iconDimensions = {
    sm: 'w-7 h-10',
    md: 'w-9 h-12',
    lg: 'w-11 h-15',
    xl: 'w-14 h-19'
  }[size];

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  }[size];

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.18em]',
    md: 'text-[10px] tracking-[0.2em]',
    lg: 'text-[11px] tracking-[0.22em]',
    xl: 'text-xs tracking-[0.24em]'
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Split-Tone Bulb & Plug Emblem from User's Logo */}
      <div className={`relative ${iconDimensions} shrink-0 group transition-transform duration-200 hover:scale-105 rounded-md overflow-hidden shadow-md shadow-black/30 border border-amber-500/30`}>
        <svg
          viewBox="0 0 100 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Split Clip Paths */}
            <clipPath id="splitLeft">
              <rect x="0" y="0" width="50" height="140" />
            </clipPath>
            <clipPath id="splitRight">
              <rect x="50" y="0" width="50" height="140" />
            </clipPath>

            {/* Core Graphic Group */}
            <g id="bulbGraphic">
              {/* Top Bulb Envelope & Filament Plug */}
              {/* Outer Bulb Curve & Looping Cord */}
              {/* Left bulb arc */}
              <path
                d="M 37.5 76 C 33 74 24 64 24 45 C 24 30.5 35.5 19 50 19 C 64.5 19 76 30.5 76 45 C 76 56 68 67 60 74 C 55 78 52 75 51 68 C 50.5 64 50 62 50 62"
                stroke="currentColor"
                strokeWidth="8.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* Loop cord connecting from right rim into the plug */}
              <path
                d="M 72 49 C 72 61 65 72 58 72 C 54 72 52 69 51 63 C 50 58 50 56 50 56"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />

              {/* Two Plug Prongs */}
              <rect x="44.2" y="38" width="3.4" height="13" rx="1.7" fill="currentColor" />
              <rect x="52.4" y="38" width="3.4" height="13" rx="1.7" fill="currentColor" />

              {/* Plug Body Base */}
              <path
                d="M 40.5 52 C 40.5 50.5 42 49.5 44 49.5 L 56 49.5 C 58 49.5 59.5 50.5 59.5 52 L 60.5 56 C 60.5 57 59.5 57.5 58 57.5 L 42 57.5 C 40.5 57.5 39.5 57 39.5 56 Z"
                fill="currentColor"
              />
              <path
                d="M 41.5 57.5 C 41.5 64 45.5 69 50 69 C 54.5 69 58.5 64 58.5 57.5 Z"
                fill="currentColor"
              />

              {/* Thread 1 */}
              <path
                d="M 39 82 L 61 78.5 C 62.5 78.2 63.8 79.4 63.5 81 C 63.2 82.2 62.2 83 61 83.2 L 39 86.8 C 37.5 87.1 36.2 85.9 36.5 84.3 C 36.8 83.1 37.8 82.2 39 82 Z"
                fill="currentColor"
              />

              {/* Thread 2 */}
              <path
                d="M 39 90.5 L 61 87 C 62.5 86.7 63.8 87.9 63.5 89.5 C 63.2 90.7 62.2 91.5 61 91.7 L 39 95.3 C 37.5 95.6 36.2 94.4 36.5 92.8 C 36.8 91.6 37.8 90.7 39 90.5 Z"
                fill="currentColor"
              />

              {/* Thread 3 */}
              <path
                d="M 39 99 L 61 95.5 C 62.5 95.2 63.8 96.4 63.5 98 C 63.2 99.2 62.2 100 61 100.2 L 39 103.8 C 37.5 104.1 36.2 102.9 36.5 101.3 C 36.8 100.1 37.8 99.2 39 99 Z"
                fill="currentColor"
              />

              {/* Thread 4 / Bottom collar */}
              <path
                d="M 40.5 107.5 L 59.5 104.5 C 61 104.2 62.2 105.3 62 106.8 C 61.8 108 60.8 108.8 59.5 109 L 40.5 112 C 39 112.3 37.8 111.2 38 109.7 C 38.2 108.5 39.2 107.7 40.5 107.5 Z"
                fill="currentColor"
              />

              {/* Bottom Rounded Contact Terminal Tip */}
              <path
                d="M 44.5 114 C 44.5 114 43 124 50 126 C 57 124 55.5 114 55.5 114 Z"
                fill="currentColor"
              />
            </g>
          </defs>

          {/* BACKGROUND: Left Half Yellow (#F59E0B), Right Half Black (#0A0A0A) */}
          <rect x="0" y="0" width="50" height="140" fill="#F59E0B" />
          <rect x="50" y="0" width="50" height="140" fill="#0A0A0A" />

          {/* FOREGROUND: Left Half is Black (#0A0A0A) on Yellow */}
          <g clipPath="url(#splitLeft)" className="text-[#0A0A0A]">
            <use href="#bulbGraphic" />
          </g>

          {/* FOREGROUND: Right Half is Yellow (#F59E0B) on Black */}
          <g clipPath="url(#splitRight)" className="text-[#F59E0B]">
            <use href="#bulbGraphic" />
          </g>
        </svg>
      </div>

      {/* Brand Wordmark Text */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          {/* Main Title "MJ" */}
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black uppercase tracking-tight ${titleSizes} ${
                variant === 'dark' ? 'text-white' : 'text-slate-950'
              }`}
            >
              MJ
            </span>
            {/* Split Dot in Gold */}
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shadow-xs" />
          </div>

          {/* Subtitle "ELECTRICAL SERVICES" */}
          <span
            className={`font-bold uppercase mt-1 ${subtitleSizes} ${
              variant === 'dark' ? 'text-amber-400' : 'text-amber-600'
            }`}
          >
            Electrical Services
          </span>
        </div>
      )}
    </div>
  );
};
