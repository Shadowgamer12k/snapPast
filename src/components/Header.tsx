
import React from 'react';

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
          href="#about" 
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          About
        </a>
        <a 
          href="#faq" 
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          FAQ
        </a>
      </nav>
    </header>
  );
};

export default Header;
