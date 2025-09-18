'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Bell, CheckCircle, Star } from 'lucide-react';

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

export default function CtaSection() {
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
      title: "Parfait !",
      description: "Vous êtes bien inscrit. À très vite !",
    });
  }

  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(31,77,128,0.2),rgba(255,255,255,0))]"></div>
      <div className="container">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Dernières heures - Plus que 23 places VIP
              </div>
            </div>

            <h2 className="font-headline font-bold text-white text-[clamp(1.8rem,5vw,3rem)] leading-tight">
              Dernière Chance<br />
              Accès VIP Exclusif
              <Star className="inline w-8 h-8 ml-2 text-yellow-400" />
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              🔥 Offre de lancement - 60% de réduction + Guide "Productivité WhatsApp" GRATUIT
            </p>

            <div className="mt-10 max-w-xl mx-auto">
              {isSubmitted ? (
                 <div className="glass-card p-8 text-center">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Inscription Réussie !</h3>
                    <p className="text-muted-foreground">Bienvenue sur la liste d'attente. Vous avez fait le bon choix.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="glass-card p-4 sm:flex sm:items-center sm:gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Votre email professionnel" {...field} className="h-14 text-base bg-background/50 border-white/20" />
                          </FormControl>
                          <FormMessage className="text-left pl-2"/>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="cta-primary w-full sm:w-auto mt-4 sm:mt-0 h-16 text-xl font-bold px-8" disabled={form.formState.isSubmitting}>
                      <Bell className="mr-3"/>
                      RÉSERVER MON ACCÈS VIP
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Données sécurisées
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Désabonnement 1-clic
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
