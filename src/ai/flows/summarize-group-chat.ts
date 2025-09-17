// Summarize the content of group chats.

'use server';

/**
 * @fileOverview Summarizes the content of group chats.
 *
 * - summarizeGroupChat - A function that summarizes group chat content.
 * - SummarizeGroupChatInput - The input type for the summarizeGroupChat function.
 * - SummarizeGroupChatOutput - The return type for the summarizeGroupChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeGroupChatInputSchema = z.object({
  chatLog: z
    .string()
    .describe('The chat log from a group chat to be summarized.'),
  userPreferences: z
    .string()
    .optional()
    .describe(
      'Optional user preferences or instructions for the summarization, such as desired length or focus topics.'
    ),
});
export type SummarizeGroupChatInput = z.infer<typeof SummarizeGroupChatInputSchema>;

const SummarizeGroupChatOutputSchema = z.object({
  summary: z.string().describe('The summary of the group chat.'),
});
export type SummarizeGroupChatOutput = z.infer<typeof SummarizeGroupChatOutputSchema>;

export async function summarizeGroupChat(input: SummarizeGroupChatInput): Promise<SummarizeGroupChatOutput> {
  return summarizeGroupChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeGroupChatPrompt',
  input: {schema: SummarizeGroupChatInputSchema},
  output: {schema: SummarizeGroupChatOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing group chat logs.
      Please provide a concise summary of the following chat log, highlighting key points, decisions, and action items.
      Consider any user preferences provided to tailor the summary accordingly.

      Chat Log: {{{chatLog}}}
      User Preferences: {{{userPreferences}}}

      Summary:`,
});

const summarizeGroupChatFlow = ai.defineFlow(
  {
    name: 'summarizeGroupChatFlow',
    inputSchema: SummarizeGroupChatInputSchema,
    outputSchema: SummarizeGroupChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
