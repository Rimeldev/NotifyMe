import { Briefcase, UserCheck, Heart, Globe } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AnimateOnScroll } from '../ui/animate-on-scroll';

const useCases = [
  {
    icon: Briefcase,
    title: "Entrepreneurs & Freelances",
    points: [
      "50+ conversations clients privées",
      "Groupes projets multiples",
      "Deals importants dans les DM",
      "Ne ratez plus un lead critique",
    ],
  },
  {
    icon: UserCheck,
    title: "Managers & Chefs de Projet",
    points: [
      "Messages 1-to-1 avec l'équipe",
      "15+ groupes projets actifs",
      "Escalations urgentes par privé",
      "Coordination multi-équipes",
    ],
  },
  {
    icon: Heart,
    title: "Parents Actifs",
    points: [
      "Messages école des enfants",
      "Groupes parents/classe",
      "Urgences familiales",
      "Rendez-vous médicaux",
    ],
  },
  {
    icon: Globe,
    title: "Équipes Distribuées",
    points: [
      "WhatsApp + Telegram + Slack",
      "Conversations cross-plateformes",
      "Fuseaux horaires multiples",
      "Communication asynchrone 24/7",
    ],
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="bg-background">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-center font-headline font-bold text-white text-[clamp(1.8rem,5vw,3rem)] leading-tight">
            Pour chaque contexte de votre vie
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
            NotifyAI s'adapte à vos différents rôles pour ne filtrer que ce qui compte, quand ça compte.
          </p>
        </AnimateOnScroll>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <AnimateOnScroll key={useCase.title} delay={index * 100}>
              <Card className="glass-card h-full">
                <CardHeader>
                  <div className="p-3 rounded-full bg-primary/10 mb-4 w-fit">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside text-left">
                    {useCase.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
