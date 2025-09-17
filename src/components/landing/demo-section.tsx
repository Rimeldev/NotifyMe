'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { AnimateOnScroll } from '../ui/animate-on-scroll';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState('business');

  return (
    <section className="bg-secondary">
      <div className="container">
        <AnimateOnScroll>
          <h2 className="text-center font-headline font-bold text-white text-[clamp(1.8rem,5vw,3rem)] leading-tight">
            NotifyAI en Action - Exemples Réels
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="mt-8 max-w-md mx-auto flex justify-center bg-card/80 p-1 rounded-lg">
            <Button
              onClick={() => setActiveTab('business')}
              variant={activeTab === 'business' ? 'default' : 'ghost'}
              className={cn("flex-1", activeTab === 'business' ? 'bg-primary' : 'text-muted-foreground')}
            >
              💼 Business
            </Button>
            <Button
              onClick={() => setActiveTab('family')}
              variant={activeTab === 'family' ? 'default' : 'ghost'}
               className={cn("flex-1", activeTab === 'family' ? 'bg-primary' : 'text-muted-foreground')}
            >
              👨‍👩‍👧‍👦 Famille
            </Button>
          </div>
        </AnimateOnScroll>

        <div className="mt-8">
          <AnimateOnScroll key={activeTab}>
            {activeTab === 'business' && (
              <Card className="glass-card p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">Scénario : Entrepreneur avec 30+ conversations clients</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg text-secondary-foreground mb-3">Messages entrants :</h4>
                    <div className="space-y-4">
                      <div className="bg-primary/10 border-l-4 border-primary p-3 rounded-r-lg">
                        <p className="font-bold text-white">Client Premium - Marie</p>
                        <p className="text-sm text-secondary-foreground">"Le budget est validé, on lance quand ?"</p>
                        <p className="text-xs text-primary font-bold mt-1">🚨 SMS envoyé : "Client Premium urgent - Deal 50k validé"</p>
                      </div>
                      <div className="bg-card/50 p-3 rounded-lg">
                        <p className="font-bold text-white">Fournisseur - Paul</p>
                        <p className="text-sm text-secondary-foreground">"Les échantillons sont prêts, rendez-vous demain ?"</p>
                        <p className="text-xs text-muted-foreground mt-1">📝 Ajouté au résumé 19h</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg text-secondary-foreground mb-3">Résumé PRO du jour (19h) :</h4>
                    <ul className="space-y-3">
                      <li className="text-white">🔥 <strong>CLIENT VIP Marie</strong> : Deal 50k validé, attendre votre planning</li>
                      <li className="text-white">📅 <strong>RDV Fournisseur Paul</strong> : Échantillons prêts, confirmer demain</li>
                      <li className="text-white">💰 <strong>Comptable Sophie</strong> : Factures Q4 à valider avant vendredi</li>
                    </ul>
                  </div>
                </div>
              </Card>
            )}
            
            {activeTab === 'family' && (
              <Card className="glass-card p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">Scénario : Parent avec enfants scolarisés</h3>
                 <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg text-secondary-foreground mb-3">Messages entrants :</h4>
                    <div className="space-y-4">
                      <div className="bg-destructive/10 border-l-4 border-destructive p-3 rounded-r-lg">
                        <p className="font-bold text-white">École Primaire</p>
                        <p className="text-sm text-secondary-foreground">"Votre fils Tom a de la fièvre, merci de venir le chercher"</p>
                        <p className="text-xs text-destructive font-bold mt-1">🚨 SMS immédiat : "École urgent - Tom malade à récupérer"</p>
                      </div>
                      <div className="bg-card/50 p-3 rounded-lg">
                        <p className="font-bold text-white">Groupe Parents CM2</p>
                        <p className="text-sm text-secondary-foreground">[23 messages] Discussion sortie scolaire...</p>
                        <p className="text-xs text-muted-foreground mt-1">📝 Résumé : "Sortie scolaire validée 15/03, autorisation à signer"</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg text-secondary-foreground mb-3">Résumé FAMILLE du jour :</h4>
                    <ul className="space-y-3">
                      <li className="text-white">❗️<strong>URGENT - École</strong>: Tom a de la fièvre, à récupérer maintenant.</li>
                      <li className="text-white">✅ <strong>Groupe CM2</strong>: Sortie scolaire le 15/03 est validée. Pensez à signer l'autorisation.</li>
                      <li className="text-white">🎂 <strong>Mamie</strong>: Confirme sa présence pour l'anniversaire de Léo samedi.</li>
                    </ul>
                  </div>
                </div>
              </Card>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}