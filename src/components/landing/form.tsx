"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, ArrowLeft, Mail, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Email invalide"),
  firstName: z.string().optional(),
  terms: z
    .boolean()
    .refine((val) => val === true, "Vous devez accepter les conditions"),
});

export default function EarlyAccessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Form submitted:", values);

      // Simulation d'un appel API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      toast({
        title: "Inscription réussie !",
        description: "Merci ! Nous vous contacterons bientôt.",
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
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 aspect-square text-white drop-shadow-sm" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            C'est parti ! 🎉
          </h1>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Vous êtes maintenant sur notre liste d'attente prioritaire. Nous
            vous tiendrons informé dès que NotifyMe sera disponible !
          </p>

          <div className="space-y-2 text-sm text-slate-500 mb-8">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 aspect-square text-green-500 drop-shadow-sm" />
              <span>Accès prioritaire confirmé</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 aspect-square text-green-500 drop-shadow-sm" />
              <span>Notifications activées</span>
            </div>
          </div>

          <Button
            onClick={handleGoBack}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Retour au site
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={handleGoBack}
            className="text-white/60 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 aspect-square mr-2" />
            Retour
          </Button>

          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Rejoignez la{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                liste d'attente
              </span>
            </h1>
            <p className="text-lg text-slate-300">
              Soyez averti dès le lancement
            </p>
          </div>
        </div>

        {/* Formulaire simplifié */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Email - Champ principal */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">
                      Votre email *
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 aspect-square text-slate-400" />
                        <Input
                          placeholder="votre.email@entreprise.com"
                          type="email"
                          className="pl-12 h-12 border-slate-200 focus:border-blue-500 text-lg"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Prénom - Champ optionnel */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-medium">
                      Votre prénom{" "}
                      <span className="text-slate-400">(optionnel)</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 aspect-square text-slate-400" />
                        <Input
                          placeholder="Pour personnaliser nos échanges"
                          className="pl-12 h-12 border-slate-200 focus:border-blue-500"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Conditions */}
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-slate-50 p-3 rounded-lg">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-0.5"
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-slate-600 leading-relaxed">
                      J'accepte de recevoir des informations sur NotifyMe et je
                      peux me désinscrire à tout moment.
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 aspect-square mr-2 animate-spin" />
                    Inscription...
                  </>
                ) : (
                  "Rejoindre la liste d'attente"
                )}
              </Button>

              <p className="text-center text-xs text-slate-500 leading-relaxed">
                🔒 Vos données sont sécurisées et ne seront jamais partagées.
                <br />
                Désabonnement possible en un clic.
              </p>
            </form>
          </Form>
        </div>

        {/* Info complémentaire */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            ⚡ Accès prioritaire • 🎁 Gratuit • 🚀 Pas d'engagement
          </p>
        </div>
      </div>
    </div>
  );
}
