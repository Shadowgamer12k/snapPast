
import React, { useState } from 'react';
import { Download, RefreshCw, X } from 'lucide-react';
import { toast } from "sonner";

interface ImagePreviewProps {
  imageData: string;
  onReset: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageData, onReset }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadImage = () => {
    setIsDownloading(true);
    
    try {
      const link = document.createElement('a');
      link.href = imageData;
      link.download = `snapaste-${new Date().getTime()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Image downloaded successfully!");
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Failed to download image");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center animate-scale-in">
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-border bg-white shadow-lg mb-6">
        <div className="absolute top-4 right-4 z-10 flex space-x-2">
          <button
            onClick={onReset}
            className="p-2 bg-foreground/10 backdrop-blur-md rounded-full text-foreground/80 hover:bg-foreground/20 transition-colors"
            aria-label="Reset image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="image-container w-full h-auto max-h-[500px] flex justify-center items-center p-4">
          <img
            src={imageData}
            alt="Pasted content"
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
      </div>
      
      <button
        onClick={downloadImage}
        disabled={isDownloading}
        className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium shadow hover:brightness-105 active:brightness-95 transition-all"
      >
        {isDownloading ? (
          <>
            <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
            <span>Downloading...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5 mr-2" />
            <span>Download Image</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ImagePreview;
