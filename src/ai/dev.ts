import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-group-chat.ts';
import '@/ai/flows/alert-on-critical-keywords.ts';