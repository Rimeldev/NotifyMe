"use client";

import { Badge } from "@/components/ui/badge";
import { Bot, FileText, Rocket, Settings2, Siren, Shield } from "lucide-react";
import { AnimateOnScroll } from "../ui/animate-on-scroll";

const features = [
  {
    icon: Bot,
    title: "Surveillance 360° Multi-Plateformes",
    description:
      "Monitoring intelligent de TOUTES vos conversations importantes.",
    points: [
      "Messages privés (clients, collègues, famille)",
      "Groupes WhatsApp/Telegram/Messenger",
      "Détection automatique VIP contacts",
      "IA qui apprend vos priorités contextuelles",
    ],
    platforms: ["WhatsApp", "Telegram", "Messenger", "+Discord"],
    gradient: "from-primary/5 to-cyan/5",
    iconGradient: "from-primary to-cyan",
    borderGlow: "hover:shadow-glow-primary",
  },
  {
    icon: FileText,
    title: "Résumés Contextuels Intelligents",
    description:
      "Résumés personnalisés selon le contexte : pro, perso, famille.",
    points: [
      "Résumé PRO : clients + projets + deadlines",
      "Résumé FAMILLE : urgences + événements + école",
      "Résumé CONVERSATIONS : threads privés importants",
      "/resume [contact] ou /resume [groupe]",
    ],
    gradient: "from-purple-500/5 to-primary/5",
    iconGradient: "from-purple-500 to-primary",
    borderGlow: "hover:shadow-glow-purple",
  },
  {
    icon: Siren,
    title: "Alertes SMS Intelligentes Multi-Niveaux",
    description: "SMS uniquement pour les messages VRAIMENT critiques.",
    points: [
      'URGENCE : mots-clés "urgent", "deadline"',
      "VIP CONTACTS : clients importants, famille proche",
      'BUSINESS : "contrat", "deal", "projet"',
      'FAMILLE : "école", "médecin", "urgence"',
    ],
    gradient: "from-warning/5 to-destructive/5",
    iconGradient: "from-warning to-destructive",
    borderGlow: "hover:shadow-glow-cyan",
  },
  {
    icon: Settings2,
    title: "Dashboard Unifié Multi-Contextes",
    description: "Interface web pour gérer toute votre communication.",
    points: [
      "Vue unifiée : Privé + Groupes + Plateformes",
      "Segmentation Pro / Perso / Famille",
      "Gestion contacts VIP par contexte",
      "Analytics : qui écrit, quand, combien",
    ],
    gradient: "from-cyan/5 to-success/5",
    iconGradient: "from-cyan to-success",
    borderGlow: "hover:shadow-glow-primary",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative py-24 bg-background"
    >
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header professionnel */}
        <AnimateOnScroll>
          <div className="text-center mb-20">
            {/* Badge d'introduction */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary drop-shadow-sm" />
              <span className="text-primary font-medium text-sm">
                SOLUTION COMPLÈTE
              </span>
            </div>

            <h2 className="font-headline font-bold text-foreground text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
              Reprenez le contrôle avec
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                4 Super-Pouvoirs
              </span>
              <Rocket className="inline w-10 h-10 ml-3 text-primary animate-bounce drop-shadow-md" />
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez comment{" "}
              <strong className="text-primary">NotifyMe</strong> vous simplifie
              la vie en
              <span className="text-foreground font-medium">
                {" "}
                filtrant, priorisant et résumant
              </span>{" "}
              vos conversations.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Grille des features en cards 2x2 */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 150}>
              <div
                className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-md border border-border rounded-2xl shadow-xl ${feature.borderGlow} hover:scale-[1.02] transition-all duration-500 h-full flex flex-col group overflow-visible`}
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Badge numéro */}
                <div className="absolute top-2 right-2 w-8 h-8 aspect-square bg-gradient-to-r from-primary to-cyan rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Header de la card */}
                <div className="p-8 pb-4">
                  <div
                    className={`w-16 h-16 aspect-square bg-gradient-to-br ${feature.iconGradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Contenu de la card */}
                <div className="px-8 pb-8 flex-grow flex flex-col justify-between">
                  <ul className="space-y-3 mb-6">
                    {feature.points.map((point, pointIndex) => (
                      <li key={point} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 aspect-square bg-primary rounded-full mt-2"></div>
                        <span className="text-muted-foreground leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Plateformes supportées */}
                  {feature.platforms && (
                    <div className="flex flex-wrap gap-2">
                      {feature.platforms.map((platform) => (
                        <Badge
                          key={platform}
                          variant="secondary"
                          className="bg-card/50 border border-border/50 text-card-foreground hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300"
                        >
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Call to action final pour landing page */}
        <AnimateOnScroll delay={800}>
          <div className="mt-20 text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-primary/10 to-cyan/10 border border-primary/20 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Bientôt disponible 🚀
              </h3>
              <p className="text-lg text-muted-foreground">
                Ces 4 super-pouvoirs travaillent ensemble pour vous faire gagner
                du temps et réduire votre stress.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
