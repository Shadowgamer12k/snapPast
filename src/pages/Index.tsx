
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageDropZone from '@/components/ImageDropZone';
import ImagePreview from '@/components/ImagePreview';
import AdPlacement from '@/components/AdPlacement';
import AdBlockDetector from '@/components/AdBlockDetector';
import StatisticsSection from '@/components/StatisticsSection';
import { toast } from "sonner";

const Index = () => {
  const [pastedImage, setPastedImage] = useState<string | null>(null);

  const handleImagePasted = (imageData: string) => {
    setPastedImage(imageData);
  };

  const resetImage = () => {
    setPastedImage(null);
    toast("Image cleared", {
      description: "Paste or drop a new image to continue",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium">
            Simple & Secure
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Copy, Paste & Download Images
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            A beautifully simple way to quickly save images from your clipboard. 
            No uploads, no accounts, just paste and download.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {pastedImage ? (
              <ImagePreview imageData={pastedImage} onReset={resetImage} />
            ) : (
              <ImageDropZone onImagePasted={handleImagePasted} />
            )}
          </div>
          
          <div className="flex flex-col items-start">
            <AdPlacement className="w-full" />
            <AdBlockDetector />
          </div>
        </div>
        
        {/* Statistics Section */}
        <StatisticsSection />
        
        <section id="about" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Why SnapPaste?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We built SnapPaste with simplicity and privacy in mind. Your images never leave your browser.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Fast & Effortless</h3>
              <p className="text-foreground/70 text-sm">
                No waiting for uploads. Just copy, paste, and download. As simple as that.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Private & Secure</h3>
              <p className="text-foreground/70 text-sm">
                Your images are processed directly in your browser. We never see or store them.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Free to Use</h3>
              <p className="text-foreground/70 text-sm">
                No subscription, no hidden fees. SnapPaste is completely free to use.
              </p>
            </div>
          </div>
        </section>
        
        <section id="faq" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-medium mb-2">How does it work?</h3>
              <p className="text-foreground/70 text-sm">
                SnapPaste uses browser APIs to access your clipboard when you paste an image. 
                The image is processed entirely in your browser and can be downloaded immediately.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-medium mb-2">Is my data safe?</h3>
              <p className="text-foreground/70 text-sm">
                Absolutely. All processing happens directly in your browser. 
                Your images never reach our servers and aren't stored anywhere.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-medium mb-2">What image formats are supported?</h3>
              <p className="text-foreground/70 text-sm">
                SnapPaste supports all common image formats that can be copied to your clipboard, 
                including PNG, JPEG, GIF, and more.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-medium mb-2">Why use SnapPaste?</h3>
              <p className="text-foreground/70 text-sm">
                If you frequently need to save images from your clipboard, SnapPaste 
                offers the quickest way to do so without unnecessary steps.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
