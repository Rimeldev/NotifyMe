"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo et nom */}
          <div className="flex items-center gap-3">
            <Image
              src="/notifylogo.png"
              alt="NotifyMe"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">NotifyMe</span>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() =>
                document
                  .querySelector("#hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Accueil
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#use-cases")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Solutions
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Copyright et info */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} NotifyMe. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-xs">
              La révolution de vos communications professionnelles commence ici
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
