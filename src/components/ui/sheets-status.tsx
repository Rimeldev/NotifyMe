"use client";

import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Loader2, RefreshCw } from 'lucide-react';
import { Button } from './button';
import { Alert, AlertDescription, AlertTitle } from './alert';

interface SheetsStatus {
  status: string;
  connected: boolean;
  totalEmails: number;
  timestamp: string;
  devMode?: boolean;
  error?: string;
}

export default function SheetsStatusComponent() {
  const [status, setStatus] = useState<SheetsStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkStatus = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/saveEmail', {
        method: 'GET'
      });
      
      if (response.ok) {
        const data: SheetsStatus = await response.json();
        setStatus(data);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const getStatusColor = () => {
    if (error) return 'text-red-500';
    if (status?.connected) return 'text-green-500';
    return 'text-yellow-500';
  };

  const getStatusIcon = () => {
    if (loading) return <Loader2 className="w-5 h-5 animate-spin" />;
    if (error) return <AlertCircle className="w-5 h-5 text-red-500" />;
    if (status?.connected) return <CheckCircle className="w-5 h-5 text-green-500" />;
    return <AlertCircle className="w-5 h-5 text-yellow-500" />;
  };

  const getStatusText = () => {
    if (loading) return 'Vérification en cours...';
    if (error) return 'Erreur de connexion';
    if (status?.connected) return 'Connexion Google Sheets OK';
    return 'Connexion non établie';
  };

  return (
    <div className="p-4 border rounded-lg bg-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Statut Google Sheets</h3>
        <Button 
          onClick={checkStatus} 
          variant="outline" 
          size="sm"
          disabled={loading}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Actualiser
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {getStatusIcon()}
          <span className={`font-medium ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
        )}

        {status && !error && (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Statut:</span>
              <p className="font-medium capitalize">
                {status.status} {status.devMode && '(Dev Mode)'}
              </p>
            </div>
            <div>
              <span className="text-muted-foreground">Emails collectés:</span>
              <p className="font-medium">{status.totalEmails}</p>
            </div>
            <div className="col-span-2">
              <span className="text-muted-foreground">Dernière vérification:</span>
              <p className="font-medium">
                {new Date(status.timestamp).toLocaleString('fr-FR')}
              </p>
            </div>
          </div>
        )}

        {status?.connected && (
          <Alert variant={status.devMode ? "default" : "default"}>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>
              {status.devMode ? 'Mode développement actif' : 'Connexion active'}
            </AlertTitle>
            <AlertDescription>
              {status.devMode 
                ? 'Le système fonctionne en mode développement. Les emails sont stockés en mémoire.' 
                : 'Le système de collecte d\'emails fonctionne correctement.'}
              {status.totalEmails > 0 && ` ${status.totalEmails} email(s) collecté(s) à ce jour.`}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}