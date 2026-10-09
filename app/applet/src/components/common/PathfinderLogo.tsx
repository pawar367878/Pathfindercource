import React from 'react';

interface PathfinderLogoProps {
  className?: string;
  size?: number;
  showTagline?: boolean;
}

export const PathfinderLogo: React.FC<PathfinderLogoProps> = ({
  className = 'w-12 h-12',
  showTagline = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      <img
        src="/pathfinder-logo.svg"
        alt="Pathfinder Training Institute Logo"
        className="w-full h-full object-contain"
        loading="eager"
      />
      {showTagline && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold tracking-tight text-slate-900 text-lg leading-tight">
            PATHFINDER
          </span>
          <span className="text-[11px] font-medium text-slate-500 tracking-wide">
            Learn • Build • Test • Deploy • Grow
          </span>
        </div>
      )}
    </div>
  );
};
