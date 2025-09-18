"use client";

import { AnimateOnScroll } from '../ui/animate-on-scroll';
import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Dubois",
    role: "CEO, Startup Tech",
    content: "NotifyAI a révolutionné ma gestion des messages clients. Plus de deals ratés, plus de stress constant.",
    rating: 5
  },
  {
    id: "2",
    name: "Thomas Martin",
    role: "Chef de Projet Digital",
    content: "Entre 15 groupes projets et 50+ conversations clients, j'étais submergé. NotifyAI me fait gagner 3h par jour.",
    rating: 5
  },
  {
    id: "3",
    name: "Sophie Leroy",
    role: "Consultante & Maman",
    content: "Avec 3 enfants et un travail prenant, je ratais tout. NotifyAI me permet de ne plus manquer les urgences.",
    rating: 5
  },
  {
    id: "4",
    name: "Alexandre Petit",
    role: "Freelance Marketing",
    content: "L'IA comprend parfaitement mes priorités. Les résumés contextuels sont d'une précision bluffante.",
    rating: 5
  },
  {
    id: "5",
    name: "Camille Rousseau",
    role: "Manager Remote",
    content: "Gérer une équipe distribuée sur WhatsApp, Telegram et Slack était un cauchemar. NotifyAI unifie tout.",
    rating: 5
  },
  {
    id: "6",
    name: "Julien Moreau",
    role: "Directeur Commercial",
    content: "Les alertes SMS pour les urgences vraiment critiques ont sauvé plusieurs deals importants.",
    rating: 5
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 min-w-[300px] max-w-[350px] flex-shrink-0">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <Quote className="w-6 h-6 text-primary mb-3" />

      <p className="text-foreground mb-4 leading-relaxed">
        "{testimonial.content}"
      </p>

      <div className="border-t border-white/10 pt-4">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Défilement toutes les 4 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-secondary py-20">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-center font-headline font-bold text-white text-[clamp(1.8rem,5vw,3rem)] leading-tight">
            Ils ont repris le contrôle de leur communication
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
            Découvrez comment NotifyAI transforme la vie professionnelle et personnelle de nos utilisateurs.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-12 relative overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (350 + 24)}px)`,
                width: `${testimonials.length * (350 + 24)}px`
              }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
