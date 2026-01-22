/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // Safelist critical responsive classes to prevent purging
  safelist: [
    'hidden',
    'block',
    'flex',
    'grid',
    'sm:block',
    'sm:hidden',
    'sm:flex',
    'md:block',
    'md:hidden',
    'md:flex',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'lg:block',
    'lg:hidden',
    'lg:flex',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
  ],
  theme: {
    extend: {
      colors: {
        // Cooley-inspired red palette - confident, energetic, premium
        primary: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#DC2626',  // Cooley red - confident, energetic
          600: '#B91C1C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#641E1E',
          950: '#450A0A',
        },
        // Secondary navy palette - can be used for conservative firms
        navy: {
          50: '#EEF2F7',
          100: '#D9E2ED',
          200: '#B3C5DB',
          300: '#8DA8C9',
          400: '#678BB7',
          500: '#1E3A5F',
          600: '#1A3352',
          700: '#152B46',
          800: '#112339',
          900: '#0D1B2D',
          950: '#080F19',
        },
        // Dark charcoal backgrounds
        charcoal: {
          50: '#F7F7F8',
          100: '#EEEEF0',
          200: '#D9D9DD',
          300: '#B8B8BF',
          400: '#91919C',
          500: '#737381',
          600: '#5D5D69',
          700: '#4C4C56',
          800: '#414149',
          900: '#27272B',  // Near black for sections
          950: '#18181B',  // Deep black
        },
        // Neutral grays
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Success/warning for badges
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        // Serif for headlines (premium legal feel)
        display: ['Playfair Display', 'Georgia', 'serif'],
        // Clean sans-serif for body
        body: ['Inter', 'system-ui', 'sans-serif'],
        // Monospace for badges/tags
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        '4.5xl': ['2.5rem', { lineHeight: '1.15' }],
        '5.5xl': ['3.25rem', { lineHeight: '1.1' }],
        '6.5xl': ['4rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'glow': '0 0 40px rgba(220, 38, 38, 0.15)',
        'glow-red': '0 0 60px rgba(220, 38, 38, 0.2)',
      },
      animation: {
        'slide-left': 'slideLeft 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
