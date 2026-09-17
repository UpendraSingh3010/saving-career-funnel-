import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const SavingCareersLogo: React.FC<LogoProps> = ({
  className = 'h-8',
  showText = true,
}) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-6"
      >
        <rect width="64" height="64" rx="10" fill="#000000" />
        <g transform="translate(32, 32)">
          {/* Main search / career hook path */}
          <path
            d="M -8 -12 Q -12 -8 -12 -4 Q -12 0 -8 4 Q -4 8 0 8 Q 4 8 8 4 Q 12 0 12 -4"
            stroke="#00ff88"
            strokeWidth="3.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0 8 L 0 16"
            stroke="#00ff88"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M -5 11 L 0 8 L 5 11"
            stroke="#00ff88"
            strokeWidth="3.2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Ruby ping indicator */}
          <circle cx="14" cy="-12" r="2.5" fill="#ff3366" />
        </g>
      </svg>
      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold tracking-wider text-base sm:text-lg leading-none uppercase">
            SAVING<span className="text-[#00ff88]">.</span>CAREERS
          </span>
          <span className="font-mono-code text-[9px] tracking-widest text-[#8e8e93] uppercase mt-0.5">
            Performance Search Lab
          </span>
        </div>
      )}
    </div>
  );
};
