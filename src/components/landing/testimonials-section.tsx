"use client";

import {Carousel, TestimonialCard} from "@/components/ui/retro-testimonial";
import {iTestimonial} from "@/components/ui/retro-testimonial";
import { AnimateOnScroll } from '../ui/animate-on-scroll';

type TestimonialDetails = {
	[key: string]: iTestimonial & {id: string};
};

const testimonialData = {
	ids: [
		"notifyai-001",
		"notifyai-002", 
		"notifyai-003",
		"notifyai-004",
		"notifyai-005",
		"notifyai-006",
	],
	details: {
		"notifyai-001": {
			id: "notifyai-001",
			description:
				"NotifyAI a révolutionné ma gestion des messages clients. Plus de deals ratés, plus de stress constant. Je peux enfin me concentrer sur l'essentiel.",
			profileImage:
				"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop",
			name: "Marie Dubois",
			designation: "CEO, Startup Tech",
		},
		"notifyai-002": {
			id: "notifyai-002",
			description:
				"Entre 15 groupes projets et 50+ conversations clients, j'étais submergé. NotifyAI filtre intelligemment et me fait gagner 3h par jour.",
			profileImage:
				"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
			name: "Thomas Martin",
			designation: "Chef de Projet Digital",
		},
		"notifyai-003": {
			id: "notifyai-003",
			description:
				"Avec 3 enfants et un travail prenant, je ratais tout. NotifyAI me permet de ne plus manquer les urgences école tout en gérant mes clients.",
			profileImage:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
			name: "Sophie Leroy",
			designation: "Consultante & Maman",
		},
		"notifyai-004": {
			id: "notifyai-004",
			description:
				"L'IA comprend parfaitement mes priorités. Les résumés contextuels sont d'une précision bluffante. Un gain de temps et d'efficacité énorme.",
			profileImage:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
			name: "Alexandre Petit",
			designation: "Freelance Marketing",
		},
		"notifyai-005": {
			id: "notifyai-005",
			description:
				"Gérer une équipe distribuée sur WhatsApp, Telegram et Slack était un cauchemar. NotifyAI unifie tout intelligemment.",
			profileImage:
				"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2787&auto=format&fit=crop",
			name: "Camille Rousseau",
			designation: "Manager Remote",
		},
		"notifyai-006": {
			id: "notifyai-006",
			description:
				"Les alertes SMS pour les urgences vraiment critiques ont sauvé plusieurs deals importants. La précision de l'IA est remarquable.",
			profileImage:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2787&auto=format&fit=crop",
			name: "Julien Moreau",
			designation: "Directeur Commercial",
		},
	},
};

// Testimonial cards with French data
const cards = testimonialData.ids.map((cardId: string, index: number) => {
	const details = testimonialData.details as TestimonialDetails;
	return (
		<TestimonialCard
			key={cardId}
			testimonial={details[cardId]}
			index={index}
			backgroundImage="https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		/>
	);
});

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-secondary">
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
          <Carousel items={cards} />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
