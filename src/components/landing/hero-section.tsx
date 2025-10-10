"use client";

import {
  CheckCircle,
  ArrowRight,
  Bell,
  MessageCircle,
  Users,
  Paperclip,
  Mic,
  ChevronLeft,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "../ui/animate-on-scroll";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const handleEarlyAccess = () => {
    router.push("/early-access");
  };

  return (
    <section
      id="hero"
      className="relative section-overflow-fix pt-12 pb-6 sm:pt-16 sm:pb-10"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(31,77,128,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-start py-6 sm:py-10 lg:py-16">
          {/* Contenu gauche */}
          <div className="order-2 lg:order-1 space-y-3 sm:space-y-6">
            {/* Badge statut */}
            <AnimateOnScroll delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 aspect-square bg-green-500 rounded-full animate-pulse"></span>
                356 PROFESSIONNELS déjà en liste d'attente
              </div>
            </AnimateOnScroll>

            {/* Titre principal - Plus direct et percutant */}
            <AnimateOnScroll delay={200}>
              <h1 className="content-container font-bold text-white text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                <br className="sm:hidden" />
                <span className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl block mt-1 sm:mt-2">
                  Communication intelligente multi-plateformes
                </span>
              </h1>
            </AnimateOnScroll>

            {/* Description plus courte et claire */}
            <AnimateOnScroll delay={300}>
              <p className="content-container text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl">
                Surveillance 360°, résumés intelligents et alertes SMS personnalisées. NotifyMe unifie toutes vos conversations et vous livre seulement l'essentiel, selon votre contexte.
              </p>
            </AnimateOnScroll>

            {/* Points clés simplifiés */}
            <AnimateOnScroll delay={400}>
              <div className="content-container space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 aspect-square text-green-400 flex-shrink-0 drop-shadow-md" />
                  <span className="text-xs sm:text-sm">
                    Surveillance WhatsApp + Telegram + Messenger + Discord
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 aspect-square text-green-400 flex-shrink-0 drop-shadow-md" />
                  <span className="text-xs sm:text-sm">
                    Résumés contextuels (Pro, Famille, Groupes)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 aspect-square text-green-400 flex-shrink-0 drop-shadow-md" />
                  <span className="text-xs sm:text-sm">
                    Alertes SMS intelligentes multi-niveaux
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 aspect-square text-green-400 flex-shrink-0 drop-shadow-md" />
                  <span className="text-xs sm:text-sm">
                    Dashboard unifié multi-contextes
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* CTA desktop */}
            <AnimateOnScroll delay={500}>
              <div className="hidden lg:block space-y-2 sm:space-y-3 pt-2">
                <Button
                  onClick={handleEarlyAccess}
                  className="h-10 sm:h-12 px-6 sm:px-8 text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
                >
                  Accès VIP Gratuit - Liste d'Attente
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                  Gratuit • Accès prioritaire
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Mockup Dashboard */}
          <AnimateOnScroll delay={300} className="order-1 lg:order-last mb-6 lg:mb-0">
            <div className="relative absolute-container p-4 sm:p-6">
              {/* Éléments flottants animés */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 aspect-square bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 aspect-square bg-gradient-to-r from-green-400 to-cyan-400 rounded-full opacity-30 animate-pulse"></div>

              {/* Smartphone mockup */}
              <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] z-10">
                {/* Phone frame */}
                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-800">
                  <div className="bg-black rounded-[2.5rem] p-1 shadow-inner">
                    <div className="bg-gray-900 rounded-[2rem] overflow-hidden shadow-lg">
                      {/* Phone screen - Dashboard */}
                      <div
                        className="bg-gradient-to-br from-gray-100 to-white w-[90vw] max-w-[320px] sm:max-w-[360px] h-auto relative overflow-hidden"
                        style={{ aspectRatio: 320 / 560 }}
                      >
                        {/* Status bar */}
                        <div className="flex items-center justify-between p-2 sm:p-3 bg-[#075E54] text-white shadow-md">
                          <div className="flex items-center gap-2">
                            <ChevronLeft className="w-4 h-4 aspect-square drop-shadow-sm" />
                            <div className="w-6 h-6 aspect-square rounded-full bg-white/20 shadow-inner"></div>
                            <div>
                              <div className="text-xs sm:text-sm font-semibold leading-none">NotifyMe</div>
                              <div className="text-[10px] sm:text-xs opacity-80 leading-none">Dashboard</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-2 aspect-square bg-white rounded-sm shadow-sm"></div>
                            <div className="text-xs sm:text-sm font-medium">100%</div>
                          </div>
                        </div>

                        {/* Dashboard */}
                        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 pb-16">
                          {/* Stats globales */}
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 shadow-sm">
                              <div className="text-lg sm:text-xl font-bold text-blue-600">24</div>
                              <div className="text-xs text-blue-500">Groupes</div>
                            </div>
                            <div className="bg-green-50 p-3 rounded-xl border border-green-100 shadow-sm">
                              <div className="text-lg sm:text-xl font-bold text-green-600">98%</div>
                              <div className="text-xs text-green-500">Efficacité</div>
                            </div>
                          </div>

                          {/* Résumé du jour */}
                          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Bell className="w-4 h-4 aspect-square text-gray-600 drop-shadow-sm" />
                              <div className="text-sm font-semibold text-gray-800">Résumé du jour</div>
                            </div>
                            <div className="text-xs text-gray-600 space-y-1">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 aspect-square text-green-500 drop-shadow-sm" />
                                <span>3 messages urgents traités</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 aspect-square text-blue-500 drop-shadow-sm" />
                                <span>12 groupes analysés</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 aspect-square text-purple-500 drop-shadow-sm" />
                                <span>2 rappels programmés</span>
                              </div>
                            </div>
                          </div>

                          {/* Alertes récentes */}
                          <div className="bg-red-50 p-3 rounded-xl border border-red-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 aspect-square bg-red-500 rounded-full animate-pulse shadow-sm"></div>
                              <div className="text-sm font-semibold text-red-800">Alertes récentes</div>
                            </div>
                            <div className="text-xs text-red-600 space-y-1">
                              <div>• Client VIP: Changement de réunion</div>
                              <div>• Projet X: Deadline approche</div>
                            </div>
                          </div>

                          {/* Groupes actifs */}
                          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="w-4 h-4 aspect-square text-gray-600 drop-shadow-sm" />
                              <div className="text-sm font-semibold text-gray-800">Groupes actifs</div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full shadow-xs">Projet X</span>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full shadow-xs">Famille</span>
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full shadow-xs">Urgent</span>
                              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full shadow-xs">+21</span>
                            </div>
                          </div>
                        </div>

                        {/* Barre de navigation */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/90 backdrop-blur-sm border-t border-gray-200 shadow-lg">
                          <div className="flex justify-around">
                            <button className="p-2 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                              <Bell className="w-5 h-5 aspect-square drop-shadow-sm" />
                            </button>
                            <button className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                              <MessageCircle className="w-5 h-5 aspect-square drop-shadow-sm" />
                            </button>
                            <button className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                              <Users className="w-5 h-5 aspect-square drop-shadow-sm" />
                            </button>
                            <button className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                              <Settings className="w-5 h-5 aspect-square drop-shadow-sm" />
                            </button>
                          </div>
                        </div>

                        {/* Particules flottantes */}
                        <div className="absolute top-20 left-6 w-2 h-2 aspect-square bg-blue-400 rounded-full animate-ping opacity-60"></div>
                        <div className="absolute top-32 right-8 w-1.5 h-1.5 aspect-square bg-green-400 rounded-full animate-pulse opacity-40"></div>
                        <div className="absolute top-40 left-8 w-2 h-2 aspect-square bg-purple-400 rounded-full animate-bounce opacity-50"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Effets de lumière */}
                <div className="absolute inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[2.5rem] animate-pulse pointer-events-none"></div>
              </div>
            </div>
          </AnimateOnScroll>
          
          {/* CTA mobile-only - maintenant après le mockup */}
          <AnimateOnScroll delay={500} className="order-3 lg:hidden">
            <div className="space-y-2 pt-2">
              <Button
                onClick={handleEarlyAccess}
                className="h-12 px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-200 w-full"
              >
                Accès VIP Gratuit - Liste d'Attente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-gray-400 text-center">
                Gratuit • Accès prioritaire
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
