/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // High-end Studio Palette (Devon Stank + Nick.design + Reference Image)
        brand: {
          blue: '#2649F4',        // Signature Electric Cobalt Blue from reference image
          blueHover: '#1B3CD2',   // Punchy hover state
          blueDim: 'rgba(38, 73, 244, 0.08)',
          blueBorder: 'rgba(38, 73, 244, 0.22)',
          blueGlow: 'rgba(38, 73, 244, 0.16)',
          dark: '#0A0C11',        // Razor-sharp near-black for editorial headings
          charcoal: '#141721',    // Secondary deep tone
          muted: '#525866',       // Refined editorial gray for body
          dim: '#858D9D',         // Subtle captions/meta
          light: '#F4F6FB',       // Crisp studio canvas background
          surface: '#FFFFFF',     // Pure white card surfaces
          border: '#E2E6F0',      // Clean structural card borders
          surfaceDark: '#0E1017', // High-contrast dark surfaces for footer/contrast
          darkBorder: '#1E2230',  // Dark surface border
        },
        // Backward-compatible tokens mapped to the refined palette
        canvas: {
          DEFAULT: '#F4F6FB',
          darker: '#EAEEF6',
          card: '#FFFFFF',
          surface: '#FFFFFF',
          hover: '#F0F3FA',
        },
        border: {
          DEFAULT: '#E2E6F0',
          subtle: '#EEF1F7',
          bright: '#CBD2E0',
        },
        accent: {
          blue: '#2649F4',
          'blue-hover': '#1B3CD2',
          'blue-dim': 'rgba(38, 73, 244, 0.08)',
          'blue-border': 'rgba(38, 73, 244, 0.22)',
          'blue-glow': 'rgba(38, 73, 244, 0.16)',
          red: '#2649F4',
          'red-hover': '#1B3CD2',
          'red-dim': 'rgba(38, 73, 244, 0.08)',
          'red-border': 'rgba(38, 73, 244, 0.22)',
          'red-glow': 'rgba(38, 73, 244, 0.16)',
        },
        warm: {
          DEFAULT: '#0A0C11',
          muted: '#525866',
          dim: '#858D9D',
          subtle: '#9EA5B4',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Syne', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'studio': '0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 20px 40px -15px rgba(38, 73, 244, 0.05)',
        'studio-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 30px 60px -15px rgba(38, 73, 244, 0.12)',
        'blue-card': '0 20px 50px -10px rgba(38, 73, 244, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
