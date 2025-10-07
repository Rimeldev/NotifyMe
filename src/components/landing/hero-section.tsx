"use client";

import {
  CheckCircle,
  ArrowRight,
  Bell,
  MessageCircle,
  Zap,
  Users,
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
      className="relative section-overflow-fix pt-16 pb-8 sm:pt-20 sm:pb-12"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(31,77,128,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center py-8 sm:py-12 lg:py-16">
          {/* Contenu gauche */}
          <div className="space-y-4 sm:space-y-6">
            {/* Badge statut */}
            <AnimateOnScroll delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                356 PROFESSIONNELS déjà en liste d'attente
              </div>
            </AnimateOnScroll>

            {/* Titre principal - Plus direct et percutant */}
            <AnimateOnScroll delay={200}>
              <h1 className="content-container font-bold text-white text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Communication intelligente
                </span>{" "}
                multi-plateformes
              </h1>
            </AnimateOnScroll>

            {/* Description plus courte et claire */}
            <AnimateOnScroll delay={300}>
              <p className="content-container text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                Surveillance 360°, résumés intelligents et alertes SMS
                personnalisées. NotifyMe unifie <strong>toutes</strong> vos
                conversations et vous livre seulement l'essentiel, selon votre
                contexte.
              </p>
            </AnimateOnScroll>

            {/* Points clés simplifiés */}
            <AnimateOnScroll delay={400}>
              <div className="content-container space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Surveillance WhatsApp + Telegram + Messenger + Discord
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Résumés contextuels (Pro, Famille, Groupes)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Alertes SMS intelligentes multi-niveaux
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Dashboard unifié multi-contextes
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* CTA */}
            <AnimateOnScroll delay={500}>
              <div className="space-y-2 sm:space-y-3 pt-2">
                <Button
                  onClick={handleEarlyAccess}
                  className="h-10 sm:h-12 px-6 sm:px-8 text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
                >
                  Tester en avant-première
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                  Gratuit • Accès prioritaire
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Mockup créatif et interactif */}
          <AnimateOnScroll delay={300} className="lg:order-last order-first">
            <div className="relative absolute-container p-8 sm:p-12">
              {/* Éléments flottants animés - repositionnés pour éviter le débordement */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full opacity-30 animate-pulse"></div>

              {/* Smartphone mockup */}
              <div className="relative mx-auto max-w-xs sm:max-w-sm z-10">
                {/* Phone frame */}
                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-black rounded-[2.5rem] p-1">
                    <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                      {/* Phone screen */}
                      <div className="bg-gradient-to-br from-gray-100 to-white h-[500px] sm:h-[600px] relative overflow-hidden">
                        {/* Status bar */}
                        <div className="flex justify-between items-center p-2 sm:p-3 bg-white/80 backdrop-blur-sm">
                          <div className="text-xs sm:text-sm font-medium text-gray-900">
                            NotifyMe
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              100%
                            </div>
                          </div>
                        </div>

                        {/* Notifications temps réel */}
                        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                          {/* Notification urgente animée */}
                          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white shadow-lg animate-pulse">
                            <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-xs sm:text-sm">
                                  🚨 Client VIP
                                </div>
                                <div className="text-xs sm:text-xs opacity-90">
                                  WhatsApp • Maintenant
                                </div>
                              </div>
                              <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                            </div>
                            <p className="text-xs sm:text-sm opacity-95">
                              "Deal 2M€ validé ! RDV demain 9h"
                            </p>
                          </div>

                          {/* Résumé intelligent */}
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <Zap className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-sm">
                                  📊 Résumé PRO
                                </div>
                                <div className="text-xs opacity-90">
                                  47 messages → 3 actions
                                </div>
                              </div>
                            </div>
                            <div className="text-sm space-y-1 opacity-95">
                              <p>• 3 clients attendent validation</p>
                              <p>• Présentation Tesla prête</p>
                              <p>• 2 deadlines cette semaine</p>
                            </div>
                          </div>

                          {/* Groupe filtré */}
                          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-4 text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-sm">
                                  👥 Équipe Design
                                </div>
                                <div className="text-xs opacity-90">
                                  156 msgs filtrés
                                </div>
                              </div>
                            </div>
                            <p className="text-sm opacity-95">
                              IA résume: "Mockups v3 validés, livraison OK"
                            </p>
                          </div>

                          {/* Message famille */}
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <MessageCircle className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-sm">
                                  👨‍👩‍👧‍👦 Famille
                                </div>
                                <div className="text-xs opacity-90">
                                  École + Médecin
                                </div>
                              </div>
                            </div>
                            <p className="text-sm opacity-95">
                              "Sortie scolaire confirmée • RDV 14h"
                            </p>
                          </div>
                        </div>

                        {/* Bottom stats animées */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-gray-200 shadow-lg">
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                <div className="text-lg font-bold text-blue-600 animate-pulse">
                                  4
                                </div>
                                <div className="text-xs text-gray-600">
                                  Plateformes
                                </div>
                              </div>
                              <div>
                                <div className="text-lg font-bold text-green-600">
                                  98%
                                </div>
                                <div className="text-xs text-gray-600">
                                  Précision
                                </div>
                              </div>
                              <div>
                                <div className="text-lg font-bold text-purple-600">
                                  45m
                                </div>
                                <div className="text-xs text-gray-600">
                                  Temps gagné
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Floating action button */}
                        <div className="absolute bottom-20 right-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Particules flottantes - repositionnées */}
                        <div className="absolute top-20 left-6 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                        <div className="absolute top-32 right-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-40"></div>
                        <div className="absolute top-40 left-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Effets de lumière - contenus dans le mockup */}
                <div className="absolute inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[2.5rem] animate-pulse pointer-events-none"></div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
