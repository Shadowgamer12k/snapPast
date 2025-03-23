
import React, { useState, useRef, useEffect } from 'react';
import { Upload, Image, RefreshCw, Download } from 'lucide-react';
import { toast } from "sonner";

interface ImageDropZoneProps {
  onImagePasted: (image: string) => void;
}

const ImageDropZone: React.FC<ImageDropZoneProps> = ({ onImagePasted }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      processImageFile(file);
    }
  };

  const handlePaste = (e: ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          processImageFile(file);
        }
        break;
      }
    }
  };

  const processImageFile = (file: File) => {
    if (!file.type.match('image.*')) {
      toast.error("Please paste or drop an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        onImagePasted(e.target.result);
        toast.success("Image loaded successfully!");
      }
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    document.addEventListener('paste', handlePaste);
    return () => {
      document.removeEventListener('paste', handlePaste);
    };
  }, []);

  return (
    <div 
      ref={dropRef}
      className={`drop-area w-full h-64 bg-secondary/30 backdrop-blur-sm rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center p-6 transition-all ${isDragging ? 'active scale-[1.02] border-primary' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className={`transition-transform duration-300 ${isDragging ? 'scale-110' : ''}`}>
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
          {isDragging ? (
            <Image className="w-8 h-8 text-primary animate-pulse" />
          ) : (
            <Upload className="w-8 h-8 text-foreground/70" />
          )}
        </div>
      </div>
      <h3 className="text-lg font-medium mb-2">Paste your image here</h3>
      <p className="text-sm text-foreground/60 text-center max-w-md">
        Copy an image to your clipboard (Ctrl+C or Cmd+C) and paste it here (Ctrl+V or Cmd+V), 
        or drop an image file into this area.
      </p>
    </div>
  );
};

export default ImageDropZone;
