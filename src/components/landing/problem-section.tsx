
import { Smartphone, Briefcase, Heart, MessageSquare, Flame, Brain, AlertTriangle } from 'lucide-react';
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
    color: "from-destructive to-warning",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/20",
    iconBg: "bg-destructive/15",
    iconColor: "text-destructive",
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
    color: "from-purple-500 to-primary",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-500",
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
    color: "from-primary to-cyan",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
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
    color: "from-warning to-cyan",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/20",
    iconBg: "bg-warning/15",
    iconColor: "text-warning",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-muted">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header avec animation d'alerte */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-destructive/10 border border-destructive/20 rounded-full mb-6">
              <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
              <span className="text-destructive font-medium text-sm">ALERTE : Situation critique détectée</span>
            </div>
            
            <h2 className="font-headline font-bold text-card-foreground text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
              Votre cerveau est votre unique<br/>
              <span className="bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent">
                système de notification
              </span> ?
              <Brain className="inline w-10 h-10 ml-3 text-destructive animate-bounce" />
            </h2>
            
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              C'est la recette parfaite pour le <strong className="text-destructive">surmenage</strong>, 
              le <strong className="text-destructive">stress</strong>, et les 
              <strong className="text-destructive"> opportunités manquées</strong>, 
              tant professionnelles que personnelles.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Layout en alternance */}
        <div className="space-y-16">
          {problems.map((problem, index) => (
            <AnimateOnScroll key={problem.title} delay={index * 200}>
              <div className={`flex items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}>
                {/* Icône et titre */}
                <div className="flex-shrink-0 w-full lg:w-1/3">
                  <div className={`relative p-8 ${problem.bgColor} ${problem.borderColor} border-2 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    {/* Badge de danger */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center shadow-glow-primary">
                      <Flame className="w-3 h-3 text-destructive-foreground animate-pulse" />
                    </div>
                    
                    <div className={`w-16 h-16 ${problem.iconBg} rounded-full flex items-center justify-center mb-4 mx-auto shadow-md`}>
                      <problem.icon className={`w-8 h-8 ${problem.iconColor}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-card-foreground text-center mb-2">
                      {problem.title}
                    </h3>
                    
                    <div className={`h-1 w-20 bg-gradient-to-r ${problem.color} rounded-full mx-auto shadow-sm`}></div>
                  </div>
                </div>

                {/* Liste des problèmes */}
                <div className="flex-1">
                  <div className="grid gap-4">
                    {problem.points.map((point, pointIndex) => (
                      <div key={point} className="flex items-start gap-4 group hover:transform hover:translateX-2 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-destructive/10 border border-destructive/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-destructive/20 group-hover:shadow-glow-primary transition-all duration-300">
                          <span className="text-destructive font-bold text-sm">
                            {pointIndex + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-muted-foreground leading-relaxed font-medium group-hover:text-card-foreground transition-colors">
                            {point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Call to action final */}
        <AnimateOnScroll delay={800}>
          <div className="mt-20 text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-destructive/5 to-warning/5 border border-destructive/20 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-2xl font-bold text-card-foreground mb-2">
                Ça vous parle ? 😰
              </p>
              <p className="text-lg text-muted-foreground">
                Il est temps de reprendre le contrôle avant que ça devienne ingérable.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}