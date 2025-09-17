'use server';

/**
 * @fileOverview A flow that detects critical keywords in a given text and returns a boolean indicating if any were found.
 *
 * - alertOnCriticalKeywords - A function that initiates the keyword detection flow.
 * - AlertOnCriticalKeywordsInput - The input type for the alertOnCriticalKeywords function.
 * - AlertOnCriticalKeywordsOutput - The return type for the alertOnCriticalKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AlertOnCriticalKeywordsInputSchema = z.object({
  text: z.string().describe('The text to analyze for critical keywords.'),
  keywords: z.string().describe('A comma-separated list of critical keywords to look for.'),
});
export type AlertOnCriticalKeywordsInput = z.infer<
  typeof AlertOnCriticalKeywordsInputSchema
>;

const AlertOnCriticalKeywordsOutputSchema = z.object({
  hasCriticalKeywords: z
    .boolean()
    .describe('Whether or not the text contains any of the critical keywords.'),
});
export type AlertOnCriticalKeywordsOutput = z.infer<
  typeof AlertOnCriticalKeywordsOutputSchema
>;

export async function alertOnCriticalKeywords(
  input: AlertOnCriticalKeywordsInput
): Promise<AlertOnCriticalKeywordsOutput> {
  return alertOnCriticalKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'alertOnCriticalKeywordsPrompt',
  input: {schema: AlertOnCriticalKeywordsInputSchema},
  output: {schema: AlertOnCriticalKeywordsOutputSchema},
  prompt: `You are an AI assistant designed to detect critical keywords in a given text.

  Determine whether the following text contains any of the following comma-separated keywords.

  Text: {{{text}}}
  Keywords: {{{keywords}}}

  Return true if any of the keywords are present in the text, and false otherwise.
  `, // VERY IMPORTANT NOTE: there must be NO function calls or any asynchronous operations done in Handlebars templating strings.
});

const alertOnCriticalKeywordsFlow = ai.defineFlow(
  {
    name: 'alertOnCriticalKeywordsFlow',
    inputSchema: AlertOnCriticalKeywordsInputSchema,
    outputSchema: AlertOnCriticalKeywordsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
