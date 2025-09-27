'use client';

import { CheckCircle, ArrowRight, Bell, MessageCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '../ui/animate-on-scroll';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
     const router = useRouter();
  const handleEarlyAccess = () => {
    router.push('/early-access'); // Remplacez le console.log
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(31,77,128,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">
          
          {/* Contenu gauche */}
          <div className="space-y-8">
            
            {/* Badge statut */}
            <AnimateOnScroll delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Bientôt disponible - Accès anticipé
              </div>
            </AnimateOnScroll>
            
            {/* Titre principal */}
            <AnimateOnScroll delay={200}>
              <h1 className="font-headline font-extrabold text-white text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tighter">
                Ne ratez plus{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  aucun message
                </span>{' '}
                important
              </h1>
            </AnimateOnScroll>
            
            {/* Description */}
            <AnimateOnScroll delay={300}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Une solution intelligente qui surveille toutes vos conversations professionnelles 
                et vous alerte uniquement sur ce qui compte vraiment.
              </p>
            </AnimateOnScroll>
            
            {/* Points clés */}
            <AnimateOnScroll delay={400}>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Surveillance multi-plateformes (WhatsApp, Telegram, Email...)</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Filtrage intelligent basé sur l'IA</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Notifications temps réel personnalisables</span>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* CTA */}
            <AnimateOnScroll delay={500}>
              <div className="space-y-4">
                <Button 
                  onClick={handleEarlyAccess}
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shadow-xl"
                >
                  Demander l'accès anticipé
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Soyez parmi les premiers à tester NotifyMe
                </p>
              </div>
            </AnimateOnScroll>
            
          </div>
          
          {/* Mockup droite */}
          <AnimateOnScroll delay={300} className="lg:order-last order-first">
            <div className="relative">
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              {/* Container mockup */}
              <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                
                {/* Interface dashboard */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Bell className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">NotifyMe</h4>
                        <p className="text-xs text-gray-500">Dashboard</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Actif</span>
                    </div>
                  </div>
                  
                  {/* Messages surveillés */}
                  <div className="space-y-4">
                    
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm text-gray-900">Équipe Projet</span>
                          <span className="text-xs text-gray-500">WhatsApp</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Message urgent détecté - Validation client
                        </p>
                      </div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm text-gray-900">Direction</span>
                          <span className="text-xs text-gray-500">Telegram</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Réunion d'urgence programmée
                        </p>
                      </div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl opacity-60">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm text-gray-600">Messages filtrés</span>
                          <span className="text-xs text-gray-400">Automatique</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          47 messages non-urgents ignorés
                        </p>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Stats footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-xs text-gray-500">Conversations</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-xs text-gray-500">Précision</div>
                    </div>
                  </div>
                  
                </div>
                
              
              </div>
            </div>
          </AnimateOnScroll>
          
        </div>
      </div>
    </section>
  );
}