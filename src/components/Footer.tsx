
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 w-full max-w-6xl mx-auto px-6 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-foreground/60 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} SnapPaste. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a 
            href="#privacy" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="#terms" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Terms of Service
          </a>
          <a 
            href="#contact" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
