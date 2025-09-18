'use client';

import { useState } from 'react';
import { Bell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigationItems = [
  { href: '#solution', label: 'Solution' },
  { href: '#demo', label: 'Démo' },
  { href: '#testimonials', label: 'Témoignages' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="container flex items-center justify-between p-4 glass-card">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <Bell className="text-primary" />
          <span>NotifyAI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navigationItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-white hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Button asChild className="cta-primary hidden sm:flex">
          <a href="#cta">Accès VIP</a>
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-primary hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-secondary border-white/10">
            <div className="flex flex-col h-full">
              {/* Mobile Logo */}
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-8">
                <Bell className="text-primary" />
                <span>NotifyAI</span>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-4 flex-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-white hover:text-primary transition-colors duration-200 font-medium py-3 px-2 rounded-lg hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <div className="mt-auto pt-6">
                <Button
                  asChild
                  className="cta-primary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#cta">Accès VIP</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
