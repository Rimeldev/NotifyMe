'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, ArrowLeft, Mail, User, Briefcase, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  company: z.string().min(2, 'Le nom de l\'entreprise est requis'),
  role: z.string().min(1, 'Veuillez sélectionner votre rôle'),
  conversationsCount: z.string().min(1, 'Veuillez sélectionner le nombre de conversations'),
  currentPain: z.string().min(10, 'Veuillez décrire brièvement votre problématique actuelle'),
  newsletter: z.boolean().default(true),
  terms: z.boolean().refine(val => val === true, 'Vous devez accepter les conditions'),
});

const roles = [
  'Entrepreneur / CEO',
  'Manager / Chef de projet',
  'Freelance / Consultant',
  'Directeur commercial',
  'Responsable RH',
  'Autre'
];

const conversationCounts = [
  'Moins de 10',
  '10-25 conversations',
  '25-50 conversations',
  '50-100 conversations',
  'Plus de 100 conversations'
];

export default function EarlyAccessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      email: '',
      company: '',
      role: '',
      conversationsCount: '',
      currentPain: '',
      newsletter: true,
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Ici vous intégrerez votre logique d'envoi (API, service email, etc.)
      console.log('Form submitted:', values);
      
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Inscription réussie !",
        description: "Merci de votre intérêt. Nous vous contacterons bientôt.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  }

  const handleGoBack = () => {
    window.history.back();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Inscription réussie !
          </h1>
          
          <p className="text-slate-600 mb-6 leading-relaxed">
            Merci pour votre intérêt ! Vous êtes maintenant sur notre liste d'attente prioritaire. 
            Nous vous tiendrons informé des dernières nouveautés et vous donnerons un accès anticipé dès que possible.
          </p>
          
          <div className="space-y-3 text-sm text-slate-500 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Email de confirmation envoyé</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Ajouté à la liste d'attente VIP</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Notifications activées</span>
            </div>
          </div>
          
          <Button 
            onClick={handleGoBack}
            className="w-full bg-gradient-primary"
          >
            Retour au site
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={handleGoBack}
            className="text-white/60 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rejoignez la{' '}
              <span className="bg-gradient-to-r from-primary via-cyan to-purple bg-clip-text text-transparent">
                liste d'attente
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              Soyez parmi les premiers à tester NotifyMe
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Informations personnelles */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">Prénom</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input 
                            placeholder="Votre prénom"
                            className="pl-10 h-12 border-slate-200 focus:border-primary"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">Email professionnel</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input 
                            placeholder="votre.email@entreprise.com"
                            type="email"
                            className="pl-10 h-12 border-slate-200 focus:border-primary"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">Entreprise</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input 
                          placeholder="Nom de votre entreprise"
                          className="pl-10 h-12 border-slate-200 focus:border-primary"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Informations professionnelles */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">Votre rôle</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 border-slate-200 focus:border-primary">
                            <SelectValue placeholder="Sélectionnez votre rôle" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>{role}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="conversationsCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">Nombre de conversations</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 border-slate-200 focus:border-primary">
                            <SelectValue placeholder="Combien de conversations gérez-vous ?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {conversationCounts.map((count) => (
                            <SelectItem key={count} value={count}>{count}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="currentPain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">
                      Quel est votre principal défi avec vos conversations actuelles ?
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <Textarea
                          placeholder="Ex: Je rate souvent des messages importants dans mes 50+ conversations WhatsApp..."
                          className="pl-10 pt-3 min-h-[100px] border-slate-200 focus:border-primary resize-none"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Checkboxes */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-slate-600 leading-relaxed">
                        Je souhaite recevoir les actualités sur NotifyMe et des conseils pour optimiser mes communications (optionnel)
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-slate-600 leading-relaxed">
                        J'accepte les conditions d'utilisation et la politique de confidentialité *
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Inscription en cours...
                  </>
                ) : (
                  'Rejoindre la liste d\'attente'
                )}
              </Button>
              
              <p className="text-center text-sm text-slate-500">
                Vos données sont sécurisées et ne seront jamais partagées avec des tiers.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}