'use client';

import { useState, useEffect } from 'react';
import { Bell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const navigationItems = [
  { href: '#hero', label: 'Accueil' },
  { href: '#use-cases', label: 'Cas d\'usage' },
  { href: '#solution', label: 'Fonctionnalités' },
  { href: '#cta', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
   const router = useRouter();

  // Gestion du scroll pour l'effet glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 const handleCtaClick = () => {
    setIsOpen(false);
    router.push('/early-access'); // Remplacez le console.log
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Image
                src="/notifylogo.png"
                alt="NotifyMe Logo"
                width={48}
                height={48}
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                priority
              />
              {/* Glow effect autour du logo */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              NotifyMe
            </span>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative text-white/80 hover:text-white transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/5 group"
              >
                {item.label}
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <Button 
            onClick={handleCtaClick}
            className="hidden lg:flex h-11 px-6 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold"
          >
            Liste d'attente
          </Button>

          {/* Menu Mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:text-primary hover:bg-white/10 transition-colors duration-300"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent 
              side="right" 
              className="w-[320px] bg-slate-900/95 backdrop-blur-md border-l border-white/10"
            >
              <div className="flex flex-col h-full">
                
                {/* Logo Mobile */}
                <div className="flex items-center gap-3 mb-8 pt-2">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl font-bold text-white">NotifyMe</span>
                </div>

                {/* Navigation Mobile */}
                <nav className="flex flex-col gap-2 flex-1">
                  {navigationItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium py-4 px-4 rounded-lg border border-transparent hover:border-white/10"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>

                {/* CTA Mobile */}
                <Button
                  onClick={handleCtaClick}
                  className="w-full h-12 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold mb-4"
                >
                  Rejoindre la liste
                </Button>

                {/* Info complémentaire */}
                <div className="text-center text-sm text-white/60 pb-4">
                  Accès prioritaire • Sans engagement
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}