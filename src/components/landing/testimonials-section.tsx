"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GridPattern } from '@/components/ui/grid-pattern';

type Testimonial = {
  name: string;
  role: string;
  image: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'NotifyMe a révolutionné ma gestion des messages clients. Plus de deals ratés, plus de stress constant. L\'IA comprend parfaitement mes priorités business.',
    name: 'Marie Dubois',
    role: 'CEO',
    company: 'TechFlow SaaS',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'Entre 15 groupes projets et 50+ conversations clients, j\'étais submergé. NotifyMe me fait gagner 3h par jour et je ne rate plus aucune deadline critique.',
    name: 'Thomas Martin',
    role: 'Chef de Projet',
    company: 'Digital Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'Avec 3 enfants et un travail prenant, je ratais tout. NotifyMe me permet de ne plus manquer les urgences familiales tout en restant pro avec mes clients.',
    name: 'Sophie Leroy',
    role: 'Consultante',
    company: 'Freelance & Maman',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'L\'IA comprend parfaitement mes priorités. Les résumés contextuels sont d\'une précision bluffante. Je gère 40+ clients sans stress.',
    name: 'Alexandre Petit',
    role: 'Freelance',
    company: 'Marketing Digital',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'Gérer une équipe distribuée sur WhatsApp, Telegram et Slack était un cauchemar. NotifyMe unifie tout et priorise intelligemment.',
    name: 'Camille Rousseau',
    role: 'Team Manager',
    company: 'Remote Company',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'Les alertes SMS pour les urgences vraiment critiques ont sauvé plusieurs deals importants. ROI immédiat sur l\'investissement.',
    name: 'Julien Moreau',
    role: 'Directeur Commercial',
    company: 'Enterprise Corp',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'NotifyMe m\'a permis de reprendre le contrôle sur mes communications. Fini le stress des messages ratés, je peux enfin me concentrer sur l\'essentiel.',
    name: 'Émilie Bernard',
    role: 'Responsable Marketing',
    company: 'StartupTech',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'L\'intelligence artificielle de NotifyMe est bluffante. Elle comprend le contexte et ne m\'alerte que pour ce qui compte vraiment.',
    name: 'David Chen',
    role: 'Product Manager',
    company: 'InnovCorp',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'Depuis que j\'utilise NotifyMe, je n\'ai plus raté un seul message important de mes clients. C\'est un game-changer pour mon business.',
    name: 'Laura Fontaine',
    role: 'Consultante RH',
    company: 'HR Solutions',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'La fonction de résumé intelligent me fait économiser des heures chaque semaine. Je recommande NotifyMe à tous les professionnels débordés.',
    name: 'Pierre Dubois',
    role: 'Entrepreneur',
    company: 'Tech Ventures',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'NotifyMe a transformé ma façon de gérer les communications avec mon équipe. Plus de messages perdus, plus d\'efficacité.',
    name: 'Nathalie Moreau',
    role: 'Directrice Opérations',
    company: 'LogiFlow',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote:
      'L\'intégration multi-plateformes est parfaite. WhatsApp, Telegram, tout est centralisé et intelligent. Exactement ce dont j\'avais besoin.',
    name: 'Maxime Leroy',
    role: 'CTO',
    company: 'DevStudio',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full pt-10 pb-20 px-4 section-overflow-fix">
      <div aria-hidden className="absolute inset-0 isolate z-0">
        <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,255,255,0.06)_0,hsla(0,0%,55%,.02)_50%,rgba(255,255,255,0.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
      </div>
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:text-6xl xl:font-extrabold text-white">
            Ils ont repris le contrôle
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              de leur communication
            </span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg text-gray-300">
            Découvrez comment NotifyMe transforme la vie professionnelle et personnelle de nos utilisateurs.
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 overflow-y-visible">
          {testimonials.map(({ name, role, company, quote, image }, index) => (
            <motion.div
              initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
              whileInView={{
                filter: 'blur(0px)',
                translateY: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index + 0.1, duration: 0.8 }}
              key={index}
              className="border-foreground/25 relative grid grid-cols-[auto_1fr] gap-x-3 border border-dashed p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-visible"
            >
              <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div className="from-foreground/5 to-foreground/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                  <GridPattern
                    width={25}
                    height={25}
                    x={-12}
                    y={4}
                    strokeDasharray="3"
                    className="stroke-foreground/20 absolute inset-0 h-full w-full mix-blend-overlay"
                  />
                </div>
              </div>
              <img
                alt={name}
                src={image}
                loading="lazy"
                className="size-9 rounded-full"
              />
              <div>
                <div className="-mt-0.5 -space-y-0.5">
                  <p className="text-sm md:text-base text-white font-medium">{name}</p>
                  <span className="text-muted-foreground block text-[11px] font-light tracking-tight text-gray-400">
                    {role} chez {company}
                  </span>
                </div>
                <blockquote className="mt-3">
                  <p className="text-foreground text-sm font-light tracking-wide text-gray-200">
                    "{quote}"
                  </p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
