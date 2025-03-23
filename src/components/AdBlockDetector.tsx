
import React, { useEffect, useState } from 'react';
import { toast } from "sonner";

const AdBlockDetector = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    const detectAdBlock = async () => {
      try {
        const response = await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-store',
        });
        
        // If ad blocker is enabled, the fetch will likely be blocked or modified
        setAdBlockDetected(false);
      } catch (error) {
        setAdBlockDetected(true);
        toast.warning("Ad blocker detected", {
          description: "Please consider supporting us by disabling your ad blocker.",
          duration: 5000,
        });
      }
    };

    // Create a bait element to detect ad blockers
    const checkBait = () => {
      const bait = document.createElement('div');
      bait.setAttribute('class', 'ad-placement ad adsbox ad-banner');
      bait.style.position = 'absolute';
      bait.style.opacity = '0';
      bait.style.height = '1px';
      bait.style.width = '1px';
      document.body.appendChild(bait);

      setTimeout(() => {
        const isHidden = bait.offsetHeight === 0;
        if (isHidden) {
          setAdBlockDetected(true);
          toast.warning("Ad blocker detected", {
            description: "Please consider supporting us by disabling your ad blocker.",
            duration: 5000,
          });
        }
        document.body.removeChild(bait);
      }, 100);
    };

    detectAdBlock();
    checkBait();
  }, []);

  if (adBlockDetected) {
    return (
      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-700">
          We noticed you're using an ad blocker. We rely on ads to keep our service free. 
          Please consider disabling your ad blocker to support us.
        </p>
      </div>
    );
  }

  return null;
};

export default AdBlockDetector;
