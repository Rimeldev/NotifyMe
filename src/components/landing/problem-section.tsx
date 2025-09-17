import { Smartphone, Briefcase, Heart, MessageSquare, Flame } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AnimateOnScroll } from '../ui/animate-on-scroll';

const problems = [
  {
    icon: Smartphone,
    title: "Surcharge Multi-Contextes",
    points: [
      "Messages clients noyés dans le perso",
      "50+ conversations privées actives",
      "Groupes famille + pro mélangés",
      "Plateformes multiples à surveiller",
    ],
  },
  {
    icon: Briefcase,
    title: "Messages Pros Critiques",
    points: [
      "Clients urgents perdus dans WhatsApp",
      "Collègues qui attendent des réponses",
      "Deadlines dans messages privés",
      "Contrats/deals dans les DMs",
    ],
  },
  {
    icon: Heart,
    title: "Vie Perso Importante",
    points: [
      "Messages famille prioritaires",
      "Rendez-vous médicaux oubliés",
      "Infos école des enfants manquées",
      "Urgences familiales vues trop tard",
    ],
  },
  {
    icon: MessageSquare,
    title: "Chaos Multi-Plateformes",
    points: [
      "WhatsApp + Telegram + Messenger...",
      "Notifications de partout, tout le temps",
      "Impossible de vraiment prioriser",
      "Contexte switching permanent",
    ],
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-center font-headline font-bold text-white text-[clamp(1.8rem,5vw,3rem)] leading-tight">
            Votre cerveau est votre unique<br/>
            <span className="text-primary">système de notification</span> ? 🤯
          </h2>
           <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
            C'est la recette parfaite pour le surmenage, le stress, et les opportunités manquées, tant professionnelles que personnelles.
          </p>
        </AnimateOnScroll>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <AnimateOnScroll key={problem.title} delay={index * 100}>
              <Card className="bg-card/80 border-white/10 h-full">
                <CardHeader className="items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 mb-4">
                    <problem.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside text-left">
                    {problem.points.map((point) => (
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
