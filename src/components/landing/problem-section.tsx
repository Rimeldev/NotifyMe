import {
  Smartphone,
  Briefcase,
  Heart,
  MessageSquare,
  Flame,
  Brain,
  AlertTriangle,
} from "lucide-react";
import { AnimateOnScroll } from "../ui/animate-on-scroll";

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
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
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
    color: "from-purple-500 to-blue-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
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
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
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
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-overflow-fix py-8 sm:py-12 lg:py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header responsive */}
        <AnimateOnScroll>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-red-100 border border-red-300 rounded-full mb-4 sm:mb-6">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 animate-pulse" />
              <span className="text-red-600 font-medium text-xs sm:text-sm">
                ALERTE : Situation critique détectée
              </span>
            </div>

            <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 sm:mb-6">
              Votre cerveau est votre unique
              <br className="hidden sm:block" />
              <span className="block sm:inline bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                système de notification
              </span>{" "}
              ?
              <Brain className="inline w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ml-2 sm:ml-3 text-red-600 animate-bounce" />
            </h2>

            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              C'est la recette parfaite pour le{" "}
              <strong className="text-red-600">surmenage</strong>, le{" "}
              <strong className="text-red-600">stress</strong>, et les
              <strong className="text-red-600"> opportunités manquées</strong>,
              tant professionnelles que personnelles.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Layout responsive - Stack sur mobile, alterné sur desktop */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {problems.map((problem, index) => (
            <AnimateOnScroll key={problem.title} delay={index * 100}>
              <div
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icône et titre - Pleine largeur sur mobile */}
                <div className="w-full lg:w-1/3">
                  <div
                    className={`relative p-6 sm:p-8 ${problem.bgColor} ${problem.borderColor} border-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {/* Badge de danger */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <Flame className="w-3 h-3 text-white animate-pulse" />
                    </div>

                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 ${problem.iconBg} rounded-full flex items-center justify-center mb-4 mx-auto shadow-md`}
                    >
                      <problem.icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${problem.iconColor}`}
                      />
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center mb-3 sm:mb-4">
                      {problem.title}
                    </h3>

                    <div
                      className={`h-1 w-16 sm:w-20 bg-gradient-to-r ${problem.color} rounded-full mx-auto shadow-sm`}
                    ></div>
                  </div>
                </div>

                {/* Liste des problèmes - Responsive */}
                <div className="w-full lg:flex-1">
                  <div className="grid gap-3 sm:gap-4">
                    {problem.points.map((point, pointIndex) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 sm:gap-4 group hover:transform hover:translate-x-1 lg:hover:translate-x-2 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-red-100 border border-red-300 rounded-full flex items-center justify-center mt-1 group-hover:bg-red-200 group-hover:shadow-lg transition-all duration-300">
                          <span className="text-red-600 font-bold text-xs sm:text-sm">
                            {pointIndex + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
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

        {/* Call to action final - Responsive */}
        <AnimateOnScroll delay={400}>
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div className="inline-block p-6 sm:p-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-2xl mx-auto">
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Ça vous parle ? 😰
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Il est temps de reprendre le contrôle avant que ça devienne
                ingérable.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
