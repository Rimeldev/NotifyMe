# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

NotifyMe is an intelligent communication platform that provides multi-platform messaging surveillance (WhatsApp, Telegram, Messenger, Discord), AI-powered conversation summaries, and intelligent SMS alerts. This is a Next.js landing page with integrated AI capabilities using Google's Genkit framework.

## Common Development Commands

### Development
```bash
# Start development server with Turbopack
npm run dev

# Start Genkit AI development server  
npm run genkit:dev

# Start Genkit with auto-reload
npm run genkit:watch
```

### Building and Deployment
```bash
# Build the application
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Testing AI Flows
```bash
# Run individual AI flows in development
npx genkit start -- tsx src/ai/dev.ts

# Access Genkit UI for testing flows
# Usually available at http://localhost:4000
```

## Architecture Overview

### Core Structure
```
src/
├── ai/                     # AI/Genkit functionality
│   ├── genkit.ts          # AI configuration
│   ├── dev.ts             # AI development entry
│   └── flows/             # AI flow definitions
├── app/                   # Next.js app router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── landing/           # Landing page sections
│   └── ui/                # Reusable UI components (shadcn/ui)
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions and configurations
```

### Technology Stack
- **Framework**: Next.js 15.3.3 with App Router
- **AI/ML**: Google Genkit with Gemini 2.5 Flash model
- **Styling**: Tailwind CSS with custom brand colors
- **UI Components**: shadcn/ui (Radix primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion, custom CSS animations
- **Fonts**: Inter (body/headline), JetBrains Mono (code)

## AI Integration

### Genkit Flows
Two main AI flows are implemented:

1. **Group Chat Summarization** (`src/ai/flows/summarize-group-chat.ts`)
   - Input: Chat log string + user preferences  
   - Output: Intelligent summary with key points and action items
   - Usage: `summarizeGroupChat({ chatLog, userPreferences })`

2. **Critical Keyword Detection** (`src/ai/flows/alert-on-critical-keywords.ts`)
   - Input: Text content + comma-separated keywords
   - Output: Boolean indicating if critical keywords found
   - Usage: `alertOnCriticalKeywords({ text, keywords })`

### Running AI Development
- Use `npm run genkit:dev` to start the Genkit development server
- Access the Genkit UI at `http://localhost:4000` for testing flows
- AI configuration is in `src/ai/genkit.ts` with Google AI plugin

## Component Architecture

### Landing Page Structure
The main page (`src/app/page.tsx`) is composed of modular sections:
- `Header` - Navigation and branding
- `HeroSection` - Main value proposition with phone mockup
- `UseCasesSection` - Target audience and use cases  
- `ProblemSection` - Pain points and problems solved
- `SolutionSection` - Feature explanations
- `DemoSection` - Interactive demonstrations
- `TestimonialsSection` - Social proof
- `CtaSection` - Call-to-action and signup
- `Footer` - Links and company info

### UI Component System
Built on shadcn/ui with custom styling:
- All components use the custom color palette (primary blues, accent colors)
- Consistent spacing and typography via Tailwind
- Dark theme as default (`html lang="fr" className="dark"`)
- Custom animations defined in `tailwind.config.ts`

## Styling and Design System

### Brand Colors
```css
Primary Blue: #3b82f6 (primary-500)
Accent Cyan: #06b6d4 (cyan-500) 
Secondary Purple: #8b5cf6 (purple-500)
Background: #0f172a (slate-900)
Foreground: #f8fafc (slate-50)
```

### Custom Animations
- `fadeInUp` - Entrance animations
- `pulse-glow` - Attention-grabbing effects  
- `laser-pulse` - Subtle highlights
- `slideIn` - Smooth transitions

### Component Patterns
- Use `AnimateOnScroll` wrapper for entrance animations
- Responsive design with mobile-first approach
- Consistent use of `container`, `content-container` classes
- Brand gradients: `gradient-primary`, `gradient-secondary`

## Configuration Files

### Important Configs
- `next.config.ts` - Next.js configuration with image domains
- `tailwind.config.ts` - Comprehensive design system configuration  
- `components.json` - shadcn/ui component configuration
- `tsconfig.json` - TypeScript configuration with path aliases

### Environment Setup
- Requires `.env` file for Google AI API keys
- Genkit flows need Google AI credentials
- Development uses `dotenv` for environment variables

## Development Guidelines

### File Organization
- Landing page components in `src/components/landing/`
- Reusable UI components in `src/components/ui/`
- AI-related code isolated in `src/ai/`
- Utilities and helpers in `src/lib/`

### Naming Conventions
- React components: PascalCase (`HeroSection.tsx`)
- AI flows: kebab-case (`summarize-group-chat.ts`)
- Utilities: camelCase (`utils.ts`)
- CSS classes: Tailwind utility classes

### TypeScript Usage
- Strict mode enabled
- Zod schemas for AI flow input/output validation
- Path aliases configured (`@/*` → `./src/*`)
- All components are TypeScript with proper typing

### Responsive Design
- Mobile-first approach with `sm:`, `lg:`, `xl:` breakpoints
- Custom container max-width of 1200px
- Flexible grid layouts using CSS Grid and Flexbox
- Adaptive text sizes and spacing

## Project-Specific Notes

### Landing Page Focus
This is primarily a landing page for lead generation and product validation. The main goal is email capture for the waitlist, not a full application.

### French Localization  
- All content is in French (`lang="fr"`)
- Metadata and SEO optimized for French market
- Cultural considerations for messaging and value propositions

### Performance Optimizations
- Next.js 15 with Turbopack for faster development
- Image optimization configured for external sources
- Lazy loading and code splitting via Next.js
- CSS-in-JS avoided in favor of Tailwind for better performance

### Build Considerations
- TypeScript errors ignored in build (`ignoreBuildErrors: true`)
- ESLint ignored during builds for faster CI/CD
- Remote image patterns configured for placeholder services