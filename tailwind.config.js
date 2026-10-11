/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#08090D', // Primary background: Near-black
          darker: '#050608',
          card: '#111318',   // Secondary background: Dark charcoal
          surface: '#161922',
          hover: '#1B1F2B',
        },
        border: {
          DEFAULT: '#1E2230',
          subtle: '#151824',
          bright: '#282F42',
        },
        accent: {
          // Secondary accent — Electric Blue
          blue: '#3157E8',
          'blue-hover': '#2445C7',
          'blue-dim': 'rgba(49, 87, 232, 0.12)',
          'blue-border': 'rgba(49, 87, 232, 0.28)',
          'blue-glow': 'rgba(49, 87, 232, 0.18)',
          // Backward-compatible alias for rapid theme shift
          red: '#3157E8',
          'red-hover': '#2445C7',
          'red-dim': 'rgba(49, 87, 232, 0.12)',
          'red-border': 'rgba(49, 87, 232, 0.28)',
          'red-glow': 'rgba(49, 87, 232, 0.18)',
        },
        warm: {
          DEFAULT: '#F5F6FA', // Primary text: Soft white
          muted: '#A1A5B0',   // Secondary text: Muted gray
          dim: '#6D7385',
          subtle: '#4B5162',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
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
