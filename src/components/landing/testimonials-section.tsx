"use client";

import { AnimateOnScroll } from '../ui/animate-on-scroll';
import { Star, Quote, TrendingUp, Users2, MessageSquare, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  metric: {
    value: string;
    label: string;
    icon: any;
  };
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Dubois",
    role: "CEO",
    company: "TechFlow SaaS",
    content: "NotifyMe a révolutionné ma gestion des messages clients. Plus de deals ratés, plus de stress constant. L'IA comprend parfaitement mes priorités business.",
    rating: 5,
    metric: { value: "€250k", label: "Deal sauvé", icon: TrendingUp },
    avatar: "MD"
  },
  {
    id: "2",
    name: "Thomas Martin",
    role: "Chef de Projet",
    company: "Digital Solutions",
    content: "Entre 15 groupes projets et 50+ conversations clients, j'étais submergé. NotifyMe me fait gagner 3h par jour et je ne rate plus aucune deadline critique.",
    rating: 5,
    metric: { value: "3h/jour", label: "Temps économisé", icon: Clock },
    avatar: "TM"
  },
  {
    id: "3",
    name: "Sophie Leroy",
    role: "Consultante",
    company: "Freelance & Maman",
    content: "Avec 3 enfants et un travail prenant, je ratais tout. NotifyMe me permet de ne plus manquer les urgences familiales tout en restant pro avec mes clients.",
    rating: 5,
    metric: { value: "100%", label: "Urgences captées", icon: MessageSquare },
    avatar: "SL"
  },
  {
    id: "4",
    name: "Alexandre Petit",
    role: "Freelance",
    company: "Marketing Digital",
    content: "L'IA comprend parfaitement mes priorités. Les résumés contextuels sont d'une précision bluffante. Je gère 40+ clients sans stress.",
    rating: 5,
    metric: { value: "40+", label: "Clients gérés", icon: Users2 },
    avatar: "AP"
  },
  {
    id: "5",
    name: "Camille Rousseau",
    role: "Team Manager",
    company: "Remote Company",
    content: "Gérer une équipe distribuée sur WhatsApp, Telegram et Slack était un cauchemar. NotifyMe unifie tout et priorise intelligemment.",
    rating: 5,
    metric: { value: "12", label: "Équipiers suivis", icon: Users2 },
    avatar: "CR"
  },
  {
    id: "6",
    name: "Julien Moreau",
    role: "Directeur Commercial",
    company: "Enterprise Corp",
    content: "Les alertes SMS pour les urgences vraiment critiques ont sauvé plusieurs deals importants. ROI immédiat sur l'investissement.",
    rating: 5,
    metric: { value: "€180k", label: "Deals sauvés", icon: TrendingUp },
    avatar: "JM"
  }
];

function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
  return (
    <div className={`bg-card border border-border rounded-2xl p-6 min-w-[380px] max-w-[380px] flex-shrink-0 transition-all duration-500 ${
      isActive ? 'scale-105 shadow-xl shadow-primary/10' : 'scale-100 shadow-lg'
    }`}>
      
      {/* Header avec avatar et infos */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
          {testimonial.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-warning text-warning" />
            ))}
          </div>
          <h4 className="font-bold text-card-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-primary font-medium">{testimonial.company}</p>
        </div>
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote className="w-6 h-6 text-primary/60 mb-3" />
        <p className="text-card-foreground leading-relaxed italic relative z-10">
          "{testimonial.content}"
        </p>
      </div>

      {/* Métrique */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-3 bg-primary/5 rounded-lg p-3">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <testimonial.metric.icon className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="text-lg font-bold text-primary">{testimonial.metric.value}</div>
            <div className="text-sm text-muted-foreground">{testimonial.metric.label}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="testimonials" className="py-24 bg-muted">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
              <Users2 className="w-4 h-4 text-success" />
              <span className="text-success font-medium text-sm">TÉMOIGNAGES AUTHENTIQUES</span>
            </div>
            
            <h2 className="font-headline font-bold text-card-foreground text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
              Ils ont repris le contrôle<br />
              <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                de leur communication
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez comment <strong className="text-primary">NotifyMe</strong> transforme la vie 
              <span className="text-muted-foreground font-medium"> professionnelle et personnelle</span> de nos utilisateurs.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Carousel de témoignages */}
        <AnimateOnScroll delay={200}>
          <div className="relative">
            
            {/* Container du carousel */}
            <div 
              className="relative overflow-hidden"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <div
                className="flex gap-6 transition-transform duration-1000 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (380 + 24)}px)`,
                  width: `${testimonials.length * (380 + 24)}px`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={testimonial.id} 
                    testimonial={testimonial}
                    isActive={index === currentIndex}
                  />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="w-10 h-10 bg-card/50 border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                ←
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-border hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 bg-card/50 border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Stats globales */}
        <AnimateOnScroll delay={400}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-cyan/5 border border-primary/10 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-warning text-warning" />
                ))}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-success/5 to-primary/5 border border-success/10 rounded-2xl">
              <div className="text-3xl font-bold text-success mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Utilisateurs conquis</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-warning/5 to-success/5 border border-warning/10 rounded-2xl">
              <div className="text-3xl font-bold text-warning mb-2">2h/jour</div>
              <div className="text-sm text-muted-foreground">Temps économisé moyen</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-cyan/5 to-primary/5 border border-cyan/10 rounded-2xl">
              <div className="text-3xl font-bold text-cyan mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA final */}
        <AnimateOnScroll delay={600}>
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-primary/10 to-success/10 border border-primary/20 rounded-3xl shadow-lg">
              <p className="text-xl text-gray-900 font-medium mb-2">
                Prêt à rejoindre ces utilisateurs satisfaits ? 🌟
              </p>
              <p className="text-muted-foreground">
                Découvrez pourquoi ils ne peuvent plus se passer de NotifyMe.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}