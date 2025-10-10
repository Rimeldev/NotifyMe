"use client";

import { ArrowRight, CheckCircle, Users, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "../ui/animate-on-scroll";
import { useRouter } from "next/navigation";

export default function CtaSection() {
  const router = useRouter();

  const handleEarlyAccess = () => {
    router.push("/early-access"); // Remplacez le console.log
  };
  const stats = [
    { icon: Users, value: "356", label: "En liste d'attente" },
    { icon: Zap, value: "4+", label: "Plateformes supportées" },
    { icon: Clock, value: "24h", label: "Temps de réponse" },
  ];

  return (
    <section
      id="cta"
      className="relative py-20 bg-slate-900"
    >
      {/* Background Effects - contenus dans la section */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(59,130,246,0.15),transparent)] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge de statut */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium shadow-glow-primary">
                <span className="w-2 h-2 aspect-square bg-primary rounded-full animate-pulse"></span>
                Bientôt disponible - Liste d'attente ouverte
              </div>
            </div>

            {/* Titre principal */}
            <h2 className="content-container font-headline font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Rejoignez les premiers{" "}
              <span className="bg-gradient-to-r from-primary via-cyan to-purple bg-clip-text text-transparent">
                utilisateurs
              </span>
              <br />
              de NotifyMe
            </h2>

            {/* Description */}
            <p className="content-container text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
              Soyez averti dès le lancement et bénéficiez d'un accès prioritaire
              à la solution qui révolutionnera vos communications
              professionnelles.
            </p>

            {/* Stats rapides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {stats.map((stat, index) => (
                <AnimateOnScroll key={stat.label} delay={100 + index * 100}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <stat.icon className="w-5 h-5 aspect-square text-primary drop-shadow-sm" />
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* CTA Principal */}
            <AnimateOnScroll delay={400}>
              <div className="space-y-6">
                <Button
                  onClick={handleEarlyAccess}
                  className="h-16 px-12 text-xl font-bold bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
                >
                  Rejoindre la liste d'attente
                  <ArrowRight className="ml-3 w-6 h-6 drop-shadow-sm" />
                </Button>

                <p className="content-container text-slate-400">
                  Accès gratuit - Aucun engagement requis
                </p>
              </div>
            </AnimateOnScroll>

            {/* Garanties */}
            <AnimateOnScroll delay={500}>
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 aspect-square text-success drop-shadow-sm" />
                  <span>Accès prioritaire</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 aspect-square text-success drop-shadow-sm" />
                  <span>Notifications exclusives</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 aspect-square text-success drop-shadow-sm" />
                  <span>Support premium</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 aspect-square text-success drop-shadow-sm" />
                  <span>Désabonnement simple</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
