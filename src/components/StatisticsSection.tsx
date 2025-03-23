
import React from 'react';
import { getStats, formatDate } from '@/utils/statistics';
import { Activity, Calendar, Image } from 'lucide-react';

const StatisticsSection = () => {
  const stats = getStats();
  
  return (
    <section className="mb-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Activity</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Here's a summary of your image pasting activity on this device.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Image className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Total Images</h3>
          <p className="text-3xl font-bold text-primary">
            {stats.totalImagesPasted}
          </p>
          <p className="text-foreground/70 text-sm mt-2">
            Images pasted on this device
          </p>
        </div>
        
        <div className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">First Paste</h3>
          <p className="text-xl font-semibold">
            {formatDate(stats.firstPasteDate)}
          </p>
          <p className="text-foreground/70 text-sm mt-2">
            When you first used SnapPaste
          </p>
        </div>
        
        <div className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Last Activity</h3>
          <p className="text-xl font-semibold">
            {formatDate(stats.lastPasteDate)}
          </p>
          <p className="text-foreground/70 text-sm mt-2">
            Your most recent image paste
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
