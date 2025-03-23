
import React from 'react';

interface AdPlacementProps {
  className?: string;
}

const AdPlacement: React.FC<AdPlacementProps> = ({ className }) => {
  return (
    <div className={`ad-container ${className}`}>
      <p className="text-foreground/70 text-sm mb-1">Advertisement</p>
      <div className="bg-secondary/50 h-[250px] flex items-center justify-center rounded border border-border/50">
        <div data-banner-id="6064618"></div>
      </div>
      <p className="text-xs text-foreground/50 mt-2">
       
      </p>
    </div>
  );
};

export default AdPlacement;
