import { useState } from 'react';
import { useToast } from './use-toast';

export interface EmailSubmissionData {
  email: string;
  groupCount?: string;
  additionalInfo?: string;
  source?: string;
}

export interface EmailSubmissionResponse {
  success: boolean;
  message?: string;
  data?: {
    email: string;
    totalEmails: number;
  };
  error?: string;
  details?: any[];
}

export function useEmailSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const submitEmail = async (data: EmailSubmissionData): Promise<EmailSubmissionResponse> => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/saveEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: EmailSubmissionResponse = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "🎉 Inscription réussie !",
          description: `Merci ! Vous êtes maintenant parmi les ${result.data?.totalEmails || 'nombreux'} professionnels en liste d'attente.`,
          duration: 5000,
        });
      } else {
        throw new Error(result.error || 'Erreur lors de l\'inscription');
      }

      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur inattendue est survenue';
      
      toast({
        title: "❌ Erreur d'inscription",
        description: errorMessage,
        variant: "destructive",
        duration: 7000,
      });

      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    isSubmitted,
    submitEmail,
    reset
  };
}