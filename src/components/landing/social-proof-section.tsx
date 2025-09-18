"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedCounter } from "../ui/animated-counter";
import { AnimateOnScroll } from "../ui/animate-on-scroll";
import { TrendingUp } from "lucide-react";

const testimonials = [
  {
    avatar: "M",
    name: "Marc, CEO Startup",
    quote: "30 conversations clients + 12 groupes projets... NotifyMe a sauvé mon business !",
    context: "45 convos/jour"
  },
  {
    avatar: "S",
    name: "Sophie, Maman de 3 enfants",
    quote: "Entre les messages école et les groupes famille, je ratais tout. Plus maintenant !",
    context: "8 groupes famille"
  },
  {
    avatar: "A",
    name: "Ahmed, Designer Freelance",
    quote: "Clients sur WhatsApp, équipe sur Telegram... NotifyMe unifie tout intelligemment.",
    context: "Multi-plateformes"
  },
];

export default function SocialProofSection() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-md mx-auto">
            <div className="glass-card text-center p-8">
              <div className="text-7xl font-extrabold gradient-text">
                <AnimatedCounter target={547} />
              </div>
              <div className="mt-2 text-lg text-white">
                Professionnels en Liste d'Attente
              </div>
              <div className="mt-1 text-green-400 font-semibold flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +23 cette semaine
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <div className="bg-card/80 border-white/10 rounded-lg p-6 flex flex-col items-center text-center h-full">
                      <Avatar className="w-16 h-16 mb-4">
                        <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <blockquote className="text-base text-white flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="mt-4 not-italic text-muted-foreground">
                        <span className="font-semibold text-secondary-foreground">{testimonial.name}</span>
                        <br/>
                        {testimonial.context}
                      </cite>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white"/>
            <CarouselNext className="text-white"/>
          </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
