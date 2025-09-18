import { Bot, FileText, Siren, Settings2, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { AnimateOnScroll } from '../ui/animate-on-scroll';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Bot,
    title: "Surveillance 360° Multi-Plateformes",
    description: "Monitoring intelligent de TOUTES vos conversations importantes.",
    points: [
      "Messages privés (clients, collègues, famille)",
      "Groupes WhatsApp/Telegram/Messenger",
      "Détection automatique VIP contacts",
      "IA qui apprend vos priorités contextuelles",
    ],
    platforms: ["WhatsApp", "Telegram", "Messenger", "+Discord"],
  },
  {
    icon: FileText,
    title: "Résumés Contextuels Intelligents",
    description: "Résumés personnalisés selon le contexte : pro, perso, famille.",
    points: [
      "Résumé PRO : clients + projets + deadlines",
      "Résumé FAMILLE : urgences + événements + école",
      "Résumé CONVERSATIONS : threads privés importants",
      "/resume [contact] ou /resume [groupe]",
    ],
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
  },
];

export default function SolutionSection() {
  return (
    <section id="solution">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-center font-headline font-bold text-white text-[clamp(1.8rem,5vw,3rem)] leading-tight">
            Reprenez le contrôle avec 4 Super-Pouvoirs
            <Rocket className="inline w-8 h-8 ml-2 text-primary" />
          </h2>
        </AnimateOnScroll>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 100}>
              <Card className="bg-card/80 border-white/10 h-full flex flex-col">
                <CardHeader>
                  <div className="p-3 rounded-full bg-primary/10 mb-4 w-fit">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground pt-2">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <ul className="space-y-2 text-secondary-foreground text-sm list-disc list-inside">
                    {feature.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {feature.platforms && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {feature.platforms.map(platform => (
                        <Badge key={platform} variant="secondary" className="bg-secondary/80">{platform}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
