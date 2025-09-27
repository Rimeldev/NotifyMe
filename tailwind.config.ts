import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // NotifyMe Brand Colors
        background: '#0f172a', // slate-900
        foreground: '#f8fafc', // slate-50
        
        // Brand Primary Colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main brand blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        
        // Brand Accent Colors
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // Cyan accent from logo
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          DEFAULT: '#06b6d4',
        },
        
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#8b5cf6', // Secondary purple
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          DEFAULT: '#8b5cf6',
        },
        
        // Neutral Colors
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
        },
        secondary: {
          DEFAULT: '#f1f5f9', // slate-100
          foreground: '#0f172a',
        },
        muted: {
          DEFAULT: '#f8fafc', // slate-50
          foreground: '#64748b', // slate-500
        },
        accent: {
          DEFAULT: '#06b6d4', // cyan-500
          foreground: '#ffffff',
        },
        
        // State Colors
        success: {
          DEFAULT: '#10b981', // emerald-500
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444', // red-500
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#f59e0b', // amber-500
          foreground: '#ffffff',
        },
        
        // UI Colors
        border: '#e2e8f0', // slate-200
        input: '#f1f5f9', // slate-100
        ring: '#3b82f6', // primary-500
        
        // Chart Colors (brand-aligned)
        chart: {
          '1': '#3b82f6', // primary-500
          '2': '#06b6d4', // cyan-500
          '3': '#8b5cf6', // purple-500
          '4': '#10b981', // emerald-500
          '5': '#f59e0b', // amber-500
        },
      },
      
      // Brand Gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
        'gradient-secondary': 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
        'gradient-success': 'linear-gradient(135deg, #10b981, #059669)',
        'gradient-hero': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(59, 130, 246, 0.3), rgba(255, 255, 255, 0))',
      },
      
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.6',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.9',
            transform: 'scale(1.02)',
          },
        },
        slideIn: {
          from: {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'laser-pulse': {
          '0%, 100%': { 
            opacity: '0.7',
            filter: 'brightness(1)',
          },
          '50%': { 
            opacity: '1',
            filter: 'brightness(1.2)',
          },
        },
      },
      
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'laser-pulse': 'laser-pulse 3s ease-in-out infinite',
        slideIn: 'slideIn 0.6s ease-out forwards',
      },
      
      // Box Shadow Extensions
      boxShadow: {
        'glow-primary': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;