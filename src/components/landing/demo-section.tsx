'use client';

import { useState } from 'react';
import { AnimateOnScroll } from '../ui/animate-on-scroll';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
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
  Zap
} from 'lucide-react';

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState('business');

  const scenarios = {
    business: {
      title: "Entrepreneur avec 30+ conversations clients",
      subtitle: "Transformez le chaos en opportunités",
      messages: [
        {
          sender: "Client Premium - Marie",
          content: "Le budget est validé, on lance quand ?",
          type: "urgent",
          sms: "Client Premium urgent - Deal 50k validé",
          icon: DollarSign,
          time: "11:30"
        },
        {
          sender: "Fournisseur - Paul", 
          content: "Les échantillons sont prêts, rendez-vous demain ?",
          type: "normal",
          action: "Ajouté au résumé 19h",
          icon: Calendar,
          time: "14:15"
        },
        {
          sender: "Prospect - Julie",
          content: "Intéressée par vos services, on peut programmer un call ?",
          type: "opportunity",
          action: "Marqué comme prospect chaud",
          icon: TrendingUp,
          time: "16:20"
        }
      ],
      summary: [
        { icon: Flame, text: "CLIENT VIP Marie : Deal 50k validé, attendre votre planning", type: "urgent" },
        { icon: Calendar, text: "RDV Fournisseur Paul : Échantillons prêts, confirmer demain", type: "normal" },
        { icon: TrendingUp, text: "Prospect Julie : Intéressée par vos services, programmer call", type: "opportunity" },
        { icon: DollarSign, text: "Comptable Sophie : Factures Q4 à valider avant vendredi", type: "normal" }
      ]
    },
    family: {
      title: "Parent avec enfants scolarisés",
      subtitle: "Ne ratez plus jamais un moment important",
      messages: [
        {
          sender: "École Primaire",
          content: "Votre fils Tom a de la fièvre, merci de venir le chercher",
          type: "urgent",
          sms: "École urgent - Tom malade à récupérer",
          icon: AlertTriangle,
          time: "10:45"
        },
        {
          sender: "Groupe Parents CM2",
          content: "[23 messages] Discussion sortie scolaire...",
          type: "group",
          action: "Résumé : Sortie scolaire validée 15/03, autorisation à signer",
          icon: Users,
          time: "12:30"
        },
        {
          sender: "Pédiatre Dr. Martin",
          content: "Rappel RDV vaccination Emma demain 14h",
          type: "important",
          action: "Ajouté au calendrier famille",
          icon: Calendar,
          time: "15:00"
        }
      ],
      summary: [
        { icon: AlertTriangle, text: "URGENT - École: Tom a de la fièvre, à récupérer maintenant", type: "urgent" },
        { icon: CheckCircle, text: "Groupe CM2: Sortie scolaire le 15/03 validée. Autorisation à signer", type: "normal" },
        { icon: Calendar, text: "Dr. Martin: RDV vaccination Emma demain 14h", type: "important" },
        { icon: Gift, text: "Mamie: Confirme sa présence pour l'anniversaire de Léo samedi", type: "normal" }
      ]
    }
  };

  const currentScenario = scenarios[activeTab];

  const getMessageStyle = (type) => {
    switch (type) {
      case 'urgent':
        return 'bg-destructive/10 border-l-4 border-destructive';
      case 'opportunity':
        return 'bg-success/10 border-l-4 border-success';
      case 'important':
        return 'bg-warning/10 border-l-4 border-warning';
      case 'group':
        return 'bg-purple-500/10 border-l-4 border-purple-500';
      default:
        return 'bg-card/20 border-l-4 border-muted';
    }
  };

  const getSummaryStyle = (type) => {
    switch (type) {
      case 'urgent':
        return 'text-destructive';
      case 'opportunity':
        return 'text-success';
      case 'important':
        return 'text-warning';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">DÉMONSTRATION INTERACTIVE</span>
            </div>
            
            <h2 className="font-headline font-bold text-foreground text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
              NotifyMe en Action
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Exemples Réels
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez comment NotifyMe transforme le chaos quotidien en 
              <span className="text-foreground font-medium"> communication organisée et efficace</span>.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Onglets améliorés */}
        <AnimateOnScroll delay={100}>
          <div className="max-w-md mx-auto mb-12">
            <div className="flex bg-card/10 backdrop-blur-sm border border-border rounded-2xl p-1">
              <Button
                onClick={() => setActiveTab('business')}
                variant="ghost"
                className={cn(
                  "flex-1 rounded-xl transition-all duration-300",
                  activeTab === 'business' 
                    ? 'bg-gradient-primary text-primary-foreground shadow-lg' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/20'
                )}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Business
              </Button>
              <Button
                onClick={() => setActiveTab('family')}
                variant="ghost"
                className={cn(
                  "flex-1 rounded-xl transition-all duration-300",
                  activeTab === 'family' 
                    ? 'bg-gradient-primary text-primary-foreground shadow-lg' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/20'
                )}
              >
                <Users className="w-4 h-4 mr-2" />
                Famille
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contenu du scénario */}
        <AnimateOnScroll key={activeTab}>
          <div className="bg-gradient-to-br from-card/5 to-muted/5 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12">
            
            {/* Titre du scénario */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Scénario : {currentScenario.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {currentScenario.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Messages entrants */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Messages entrants</h4>
                </div>
                
                <div className="space-y-6">
                  {currentScenario.messages.map((message, index) => (
                    <div key={index} className={`${getMessageStyle(message.type)} p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
                      <div className="flex items-center gap-3 mb-2">
                        <message.icon className="w-4 h-4 text-foreground" />
                        <p className="font-bold text-foreground">{message.sender}</p>
                        <span className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {message.time}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        "{message.content}"
                      </p>
                      
                      {message.sms && (
                        <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-2">
                          <p className="text-sm font-bold text-destructive flex items-center gap-2">
                            <Siren className="w-3 h-3" />
                            SMS envoyé : "{message.sms}"
                          </p>
                        </div>
                      )}
                      
                      {message.action && (
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-2">
                          <p className="text-sm text-primary flex items-center gap-2">
                            <FileText className="w-3 h-3" />
                            {message.action}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Résumé intelligent */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    Résumé {activeTab === 'business' ? 'PRO' : 'FAMILLE'} (19h00)
                  </h4>
                </div>
                
                <div className="bg-card/10 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <ul className="space-y-4">
                    {currentScenario.summary.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group hover:bg-card/5 p-3 rounded-lg transition-colors">
                        <item.icon className={`w-5 h-5 mt-0.5 ${getSummaryStyle(item.type)}`} />
                        <span className="text-foreground leading-relaxed group-hover:text-primary transition-colors">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats en bas */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-card/5 rounded-xl">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Messages filtrés</div>
              </div>
              <div className="text-center p-4 bg-card/5 rounded-xl">
                <div className="text-2xl font-bold text-success">3</div>
                <div className="text-sm text-muted-foreground">Alertes SMS</div>
              </div>
              <div className="text-center p-4 bg-card/5 rounded-xl">
                <div className="text-2xl font-bold text-warning">5min</div>
                <div className="text-sm text-muted-foreground">Temps économisé</div>
              </div>
              <div className="text-center p-4 bg-card/5 rounded-xl">
                <div className="text-2xl font-bold text-cyan">100%</div>
                <div className="text-sm text-muted-foreground">Messages importants</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA final */}
        <AnimateOnScroll delay={400}>
          <div className="mt-16 text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-primary/10 to-cyan/10 border border-primary/20 rounded-2xl">
              <p className="text-lg text-foreground font-medium">
                <strong className="text-primary">Résultat :</strong> Zéro stress, zéro message important manqué ! 🎯
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}