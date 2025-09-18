'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, Rocket, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { AnimateOnScroll } from '../ui/animate-on-scroll';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email({ message: 'Email invalide.' }),
});

export default function HeroSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    toast({
      title: "C'est noté !",
      description: "Vous êtes sur la liste VIP. Nous vous contacterons bientôt.",
      variant: 'default',
    });
  }

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center text-center py-20 pt-32 md:pt-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(31,77,128,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="flex justify-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary text-secondary-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              547 professionnels déjà en liste d'attente
            </div>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={100}>
          <h1 className="font-headline font-extrabold text-white text-[clamp(2.5rem,8vw,5rem)] leading-tight tracking-tighter">
            Surveillez TOUTES vos conversations importantes 24/7
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Que ce soit <strong>200 messages privés</strong> clients, <strong>15 groupes WhatsApp</strong> projet, 
            ou vos <strong>conversations Telegram</strong> famille - Ne ratez plus RIEN d'important.
          </p>
        </AnimateOnScroll>
        
        {/* Badge d'urgence */}
        <AnimateOnScroll delay={250} className="mt-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Places limitées - Plus que 23 accès VIP disponibles
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300} className="mt-8 max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="glass-card p-8 text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Merci !</h3>
              <p className="text-muted-foreground">Vous êtes bien inscrit sur la liste VIP. Surveillez votre boîte mail !</p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="glass-card p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Accès VIP - Lancement Exclusif 🚀
                </h3>
                <p className="text-muted-foreground mb-6">
                  Rejoignez les 547 professionnels qui ne ratent plus rien
                </p>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Votre email professionnel" 
                            {...field} 
                            className="h-14 bg-background/50 border-white/20 text-center text-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                
                <Button type="submit" className="cta-primary w-full mt-6 h-16 text-xl font-bold" disabled={form.formState.isSubmitting}>
                  <Rocket className="mr-3 flex-shrink-0" />
                  Je veux mon accès VIP
                </Button>
                
                <p className="text-xs text-muted-foreground mt-3">
                  🔥 Offre de lancement - 60% de réduction jusqu'au 31 décembre
                </p>
                </div>
              </form>
            </Form>
          )}
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={400} className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-muted-foreground">
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Sans engagement</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Données sécurisées</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Désabonnement 1-clic</span>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
