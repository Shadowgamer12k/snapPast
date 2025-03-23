
import React from 'react';
import { Github, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 w-full max-w-6xl mx-auto px-6 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-sm text-foreground/60 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} SnapPaste. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a 
            href="/privacy" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
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
          <a 
            href="https://github.com/Shadowgamer12k" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://buymeacoffee.com/shadowjamak" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Buy Me a Coffee"
          >
            <Coffee size={18} />
          </a>
        </div>
      </div>
      <div className="text-xs text-foreground/40 text-center">
        <p>Paste, copy, download images quickly and securely. No uploads, no tracking, just easy image handling.</p>
        <p className="mt-2">Keywords: image paste download, screenshot paste, clipboard to download, paste download image</p>
      </div>
    </footer>
  );
};

export default Footer;
