"use client";

import { useState } from "react";
import { AnimateOnScroll } from "../ui/animate-on-scroll";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Users,
  Siren,
  FileText,
  Flame,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Gift,
  Smartphone,
  Clock,
  TrendingUp,
  Zap,
  MessageCircle,
  Bell,
  Phone,
  Mail,
} from "lucide-react";

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState("business");

  const scenarios = {
    business: {
      title: "Sarah, Consultante Marketing",
      subtitle: "40+ conversations clients par jour",
      avatar: "👩‍💼",
      context: "Entre réunions, Sarah rate souvent des messages cruciaux...",
      messages: [
        {
          sender: "🔥 CLIENT VIP - LVMH",
          content:
            "Sarah, le CEO veut voir la présentation DEMAIN 9h. C'est validé pour 2M€ si on livre !",
          type: "urgent",
          platform: "WhatsApp",
          time: "14:23",
          sms: "🚨 LVMH CEO - Présentation 2M€ DEMAIN 9h",
          icon: DollarSign,
          bgColor: "from-red-500 to-pink-500",
          textColor: "text-red-50",
        },
        {
          sender: "📊 Équipe Design (47 messages)",
          content:
            "Débat sur les mockups, deadline approche, besoin validation...",
          type: "group",
          platform: "Telegram",
          time: "15:45",
          action:
            "IA résume: 'Mockups v3 prêts, attendent votre validation urgente'",
          icon: TrendingUp,
          bgColor: "from-orange-500 to-yellow-500",
          textColor: "text-orange-50",
        },
        {
          sender: "💰 Prospect Tesla France",
          content:
            "Bonjour, suite à votre proposition, nous sommes intéressés pour un contrat 500k€",
          type: "opportunity",
          platform: "LinkedIn",
          time: "16:20",
          action: "Marqué prospect CHAUD - Suivi prioritaire",
          icon: Flame,
          bgColor: "from-green-500 to-emerald-500",
          textColor: "text-green-50",
        },
      ],
      summary: [
        {
          icon: DollarSign,
          text: "🔥 LVMH: Présentation CEO demain 9h - Deal 2M€ en jeu",
          type: "urgent",
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
        },
        {
          icon: TrendingUp,
          text: "📊 Design: Mockups v3 prêts, validation requise",
          type: "important",
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
        },
        {
          icon: Flame,
          text: "💰 Tesla France: Prospect 500k€ intéressé",
          type: "opportunity",
          color: "text-green-600",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
        },
        {
          icon: Calendar,
          text: "📅 RDV client IBM: Confirmation meeting demain 14h",
          type: "normal",
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
        },
      ],
    },
    family: {
      title: "Marc, Papa de 2 enfants",
      subtitle: "Jongle entre boulot et vie de famille",
      avatar: "👨‍👧‍👦",
      context: "Entre les groupes école et les messages familiaux...",
      messages: [
        {
          sender: "🚨 École Sainte-Marie",
          content:
            "URGENT - Léa a fait une chute dans la cour. Merci de venir la récupérer immédiatement.",
          type: "urgent",
          platform: "SMS",
          time: "11:15",
          sms: "🚨 École URGENT - Léa chute, à récupérer maintenant",
          icon: AlertTriangle,
          bgColor: "from-red-500 to-rose-500",
          textColor: "text-red-50",
        },
        {
          sender: "👥 Parents CM2-A (156 messages)",
          content:
            "Discussion sortie scolaire, liste matériel, horaires, transport...",
          type: "group",
          platform: "WhatsApp",
          time: "13:30",
          action: "IA résume: 'Sortie zoo 15/03, RDV 8h30 école, 25€/enfant'",
          icon: Users,
          bgColor: "from-blue-500 to-cyan-500",
          textColor: "text-blue-50",
        },
        {
          sender: "💊 Dr. Dupont (Pédiatre)",
          content:
            "Rappel: RDV vaccination Tom demain 14h. Merci d'apporter le carnet de santé.",
          type: "important",
          platform: "Email",
          time: "16:00",
          action: "Ajouté au calendrier famille + rappel 2h avant",
          icon: Calendar,
          bgColor: "from-purple-500 to-indigo-500",
          textColor: "text-purple-50",
        },
      ],
      summary: [
        {
          icon: AlertTriangle,
          text: "🚨 École: Léa chute - RÉCUPÉRER MAINTENANT",
          type: "urgent",
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
        },
        {
          icon: Users,
          text: "👥 Sortie scolaire: Zoo 15/03 à 8h30, prévoir 25€",
          type: "important",
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
        },
        {
          icon: Calendar,
          text: "💊 Dr. Dupont: Vaccination Tom demain 14h",
          type: "normal",
          color: "text-purple-600",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-200",
        },
        {
          icon: Gift,
          text: "🎂 Mamie: Confirme gâteau anniversaire samedi",
          type: "normal",
          color: "text-pink-600",
          bgColor: "bg-pink-50",
          borderColor: "border-pink-200",
        },
      ],
    },
  };

  const currentScenario = scenarios[activeTab];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "WhatsApp":
        return "💬";
      case "Telegram":
        return "✈️";
      case "SMS":
        return "📱";
      case "Email":
        return "📧";
      case "LinkedIn":
        return "💼";
      default:
        return "💬";
    }
  };

  return (
    <section
      id="demo"
      className="section-overflow-fix py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-4 text-sm font-medium shadow-lg">
              <Zap className="w-4 h-4" />
              <span>DÉMONSTRATION LIVE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              NotifyMe en{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Action Réelle
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment des professionnels comme vous{" "}
              <span className="text-gray-900 font-semibold">
                transforment leur quotidien
              </span>{" "}
              avec NotifyMe
            </p>
          </div>
        </AnimateOnScroll>

        {/* Onglets Mobile-First */}
        <AnimateOnScroll delay={100}>
          <div className="max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-12">
            <div className="flex bg-white border border-gray-200 rounded-2xl p-1 shadow-lg">
              <Button
                onClick={() => setActiveTab("business")}
                variant="ghost"
                className={cn(
                  "flex-1 rounded-xl transition-all duration-300 text-sm sm:text-base",
                  activeTab === "business"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                )}
              >
                <Briefcase className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Business</span>
                <span className="sm:hidden">Pro</span>
              </Button>
              <Button
                onClick={() => setActiveTab("family")}
                variant="ghost"
                className={cn(
                  "flex-1 rounded-xl transition-all duration-300 text-sm sm:text-base",
                  activeTab === "family"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                )}
              >
                <Users className="w-4 h-4 mr-1 sm:mr-2" />
                Famille
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Persona Card - Sans AnimateOnScroll pour éviter la duplication */}
        <div className="max-w-md mx-auto mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg text-center transition-all duration-500">
          <div className="text-4xl mb-3">{currentScenario.avatar}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {currentScenario.title}
          </h3>
          <p className="text-gray-600 mb-2">{currentScenario.subtitle}</p>
          <p className="text-sm text-gray-500 italic">
            {currentScenario.context}
          </p>
        </div>

        {/* Contenu principal - Transition fluide */}
        <div className="bg-white border border-gray-200 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl transition-all duration-500">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Messages entrants */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                  Messages reçus
                </h4>
                <div className="ml-auto text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Aujourd'hui
                </div>
              </div>

              <div className="space-y-4">
                {currentScenario.messages.map((message, index) => (
                  <div
                    key={`${activeTab}-message-${index}`}
                    className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${message.bgColor} opacity-90`}
                    ></div>

                    {/* Content */}
                    <div className="relative p-4 sm:p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0">
                          <message.icon
                            className={`w-5 h-5 ${message.textColor}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <p
                              className={`font-bold text-sm sm:text-base ${message.textColor}`}
                            >
                              {message.sender}
                            </p>
                            <span
                              className={`text-xs px-2 py-1 bg-black/20 rounded-full ${message.textColor}`}
                            >
                              {getPlatformIcon(message.platform)}{" "}
                              {message.platform}
                            </span>
                            <span
                              className={`text-xs ${message.textColor} opacity-75 ml-auto`}
                            >
                              {message.time}
                            </span>
                          </div>
                          <p
                            className={`text-sm sm:text-base leading-relaxed ${message.textColor} opacity-95 mb-3`}
                          >
                            "{message.content}"
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      {message.sms && (
                        <div className="bg-black/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 mb-2">
                          <p
                            className={`text-xs sm:text-sm font-bold ${message.textColor} flex items-center gap-2`}
                          >
                            <Bell className="w-4 h-4" />
                            SMS envoyé: "{message.sms}"
                          </p>
                        </div>
                      )}

                      {message.action && (
                        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3">
                          <p
                            className={`text-xs sm:text-sm ${message.textColor} flex items-center gap-2`}
                          >
                            <Zap className="w-4 h-4" />
                            {message.action}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Résumé intelligent */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    Résumé {activeTab === "business" ? "PRO" : "FAMILLE"}
                  </h4>
                  <p className="text-sm text-gray-500">
                    19h00 - Digest quotidien
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-4 sm:p-6">
                <div className="space-y-3">
                  {currentScenario.summary.map((item, index) => (
                    <div
                      key={`${activeTab}-summary-${index}`}
                      className={`${item.bgColor} ${item.borderColor} border-l-4 p-3 sm:p-4 rounded-lg hover:shadow-md transition-all duration-300 group`}
                    >
                      <div className="flex items-start gap-3">
                        <item.icon
                          className={`w-5 h-5 mt-0.5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <span className="text-gray-800 text-sm sm:text-base leading-relaxed group-hover:text-gray-900 transition-colors font-medium">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bouton action */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Voir détails complets
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats de performance - Chiffres gonflés */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h5 className="text-center text-lg font-bold text-gray-900 mb-4">
              📊 Impact temps réel
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                  235
                </div>
                <div className="text-xs sm:text-sm text-blue-600 font-medium">
                  Messages filtrés
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                  12
                </div>
                <div className="text-xs sm:text-sm text-green-600 font-medium">
                  Alertes SMS
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
                  1h45
                </div>
                <div className="text-xs sm:text-sm text-purple-600 font-medium">
                  Temps économisé
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
                  0
                </div>
                <div className="text-xs sm:text-sm text-orange-600 font-medium">
                  Messages ratés
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final avec témoignage */}
        <AnimateOnScroll>
          <div className="mt-12 text-center">
            <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-2">
                "Fini le stress des messages ratés !"
              </p>
              <p className="text-gray-600 italic">
                {activeTab === "business"
                  ? "Sarah ne rate plus jamais un deal important grâce aux résumés intelligents"
                  : "Marc gère sereinement famille et travail avec les alertes prioritaires"}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
