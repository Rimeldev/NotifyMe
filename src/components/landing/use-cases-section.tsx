import { Briefcase, UserCheck, Heart, Globe, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AnimateOnScroll } from '../ui/animate-on-scroll';

const useCases = [
  {
    icon: Briefcase,
    title: "Entrepreneurs & Freelances",
    description: "Gérez vos opportunités commerciales sans rien rater",
    points: [
      "50+ conversations clients privées",
      "Groupes projets multiples",
      "Deals importants dans les DM",
      "Ne ratez plus un lead critique",
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Managers & Chefs de Projet",
    description: "Coordonnez vos équipes efficacement",
    points: [
      "Messages 1-to-1 avec l'équipe",
      "15+ groupes projets actifs",
      "Escalations urgentes par privé",
      "Coordination multi-équipes",
    ],
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Heart,
    title: "Parents Actifs",
    description: "Restez connectés avec votre famille",
    points: [
      "Messages école des enfants",
      "Groupes parents/classe",
      "Urgences familiales",
      "Rendez-vous médicaux",
    ],
    gradient: "from-rose-500 to-orange-500",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Globe,
    title: "Équipes Distribuées",
    description: "Unifiez vos communications globales",
    points: [
      "WhatsApp + Telegram + Slack",
      "Conversations cross-plateformes",
      "Fuseaux horaires multiples",
      "Communication asynchrone 24/7",
    ],
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 bg-background">
      <div className="container">
        
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-headline font-bold text-white text-4xl lg:text-5xl leading-tight mb-4">
              Pour chaque contexte de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                votre vie
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
              NotifyMe s'adapte à vos différents rôles pour ne filtrer que ce qui compte, quand ça compte.
            </p>
          </div>
        </AnimateOnScroll>
        
        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <AnimateOnScroll key={useCase.title} delay={index * 100}>
              <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
                
                {/* Card Header avec gradient */}
                <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`}></div>
                
                <CardHeader className="pb-4">
                  {/* Icon container */}
                  <div className={`inline-flex p-4 rounded-2xl ${useCase.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className={`w-8 h-8 ${useCase.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {useCase.title}
                  </CardTitle>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Points list */}
                  <ul className="space-y-3">
                    {useCase.points.map((point, pointIndex) => (
                      <li key={point} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Bottom accent */}
                  <div className={`mt-6 h-1 bg-gradient-to-r ${useCase.gradient} rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
        
       
      </div>
    </section>
  );
}