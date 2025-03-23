
import React from 'react';
import { Github, Coffee } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 w-full max-w-6xl mx-auto px-6">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-primary animate-pulse-subtle"></div>
        <h1 className="text-xl font-medium tracking-tight">SnapPaste</h1>
      </div>
      <nav className="hidden sm:flex items-center space-x-6">
        <a 
          href="/" 
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          Home
        </a>
        <a 
          href="/privacy" 
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          Privacy
        </a>
        <a 
          href="/terms" 
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          Terms
        </a>
        <a 
          href="https://github.com/snappaste" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://buymeacoffee.com/snappaste" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          aria-label="Buy Me a Coffee"
        >
          <Coffee size={20} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
