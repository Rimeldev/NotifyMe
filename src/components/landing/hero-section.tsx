
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, Rocket, Sparkles, Brain } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from '@/hooks/use-toast';
import { AnimateOnScroll } from '../ui/animate-on-scroll';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email({ message: 'Email invalide.' }),
  context: z.string().min(1, { message: 'Veuillez sélectionner votre contexte.' }),
  volume: z.string().min(1, { message: 'Veuillez sélectionner un volume.' }),
  platforms: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Vous devez sélectionner au moins une plateforme.",
  }),
});

const platforms = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "telegram", label: "Telegram" },
  { id: "messenger", label: "Messenger" },
  { id: "discord", label: "Discord" },
]

export default function HeroSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      context: '',
      volume: '',
      platforms: [],
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
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary text-secondary-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            547 professionnels déjà en liste d'attente
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={100}>
          <h1 className="font-headline font-extrabold text-white text-[clamp(2.5rem,8vw,5rem)] leading-tight tracking-tighter">
            Surveillez <span className="gradient-text">TOUTES</span> vos<br/>
            conversations importantes 24/7
          </h1>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={200}>
           <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Que ce soit <strong>200 messages privés</strong> clients, <strong>15 groupes WhatsApp</strong> projet, 
            ou vos <strong>conversations Telegram</strong> famille - Ne ratez plus RIEN d'important.
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={300} className="mt-10 max-w-4xl mx-auto">
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
                className="glass-card p-6 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Votre email professionnel" {...field} className="h-12 bg-background/50 border-white/20"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="context"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-background/50 border-white/20">
                              <SelectValue placeholder="Votre contexte principal ?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="entrepreneur">Entrepreneur/Freelance</SelectItem>
                            <SelectItem value="manager">Manager/Chef de projet</SelectItem>
                            <SelectItem value="parent">Parent actif</SelectItem>
                            <SelectItem value="equipe">Équipe distribuée</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="volume"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-background/50 border-white/20">
                              <SelectValue placeholder="Volume de messages/jour ?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="50-100">50-100 messages</SelectItem>
                            <SelectItem value="100-200">100-200 messages</SelectItem>
                            <SelectItem value="200-500">200-500 messages</SelectItem>
                            <SelectItem value="500+">
                              <div className="flex items-center gap-2">
                                <Brain className="w-4 h-4" />
                                Plus de 500 messages
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="platforms"
                    render={() => (
                      <FormItem>
                        <div className="p-3 rounded-md bg-background/50 border border-white/20">
                          <label className="text-sm text-muted-foreground mb-2 block">Plateformes utilisées :</label>
                           <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {platforms.map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="platforms"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-2 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...(field.value || []), item.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
                                        {item.label}
                                      </label>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="cta-primary w-full mt-4 h-14 text-lg" disabled={form.formState.isSubmitting}>
                  <Rocket className="mr-2" />
                  Accès VIP + Configuration Personnalisée
                </Button>
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
