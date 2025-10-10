"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navigationItems = [
  { href: "#hero", label: "Accueil" },
  { href: "#solution", label: "Solutions" },
  { href: "#cta", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    setIsOpen(false);
    router.push("/early-access");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-xl border-b border-gray-800"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/notifylogo.png"
              alt="NotifyMe"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="text-xl font-bold text-white">NotifyMe</span>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <Button
            onClick={handleCtaClick}
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Rejoindre
          </Button>

          {/* Menu Mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] bg-gray-900 border-gray-800"
            >
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="flex flex-col h-full pt-8">
                {/* Logo Mobile */}
                <div className="flex items-center gap-3 mb-8">
                  <Image
                    src="/notifylogo.png"
                    alt="NotifyMe"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="text-xl font-bold text-white">NotifyMe</span>
                </div>

                {/* Navigation Mobile */}
                <nav className="flex flex-col gap-4 flex-1">
                  {navigationItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* CTA Mobile */}
                <Button
                  onClick={handleCtaClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mb-4"
                >
                  Rejoindre la liste
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
