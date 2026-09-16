/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#041628',
          900: '#072444',
          800: '#0B335E',
          700: '#11477F',
          600: '#195DA2',
          100: '#E4EDF7',
          50: '#F0F5FA',
        },
        teal: {
          900: '#074844',
          800: '#095C57',
          700: '#0C726B',
          600: '#0D8B83',
          500: '#11A59C',
          400: '#2AC2B9',
          100: '#D5F3EE',
          50: '#EDFAF7',
        },
        mint: {
          50: '#F4FBF9',
          100: '#E7F7F3',
          200: '#D1EFE7',
          300: '#A9DFD2',
        },
        sand: {
          50: '#FAF9F6',
          100: '#F4F1EA',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(7, 36, 68, 0.04)',
        'card': '0 4px 20px -2px rgba(7, 36, 68, 0.05), 0 2px 6px -1px rgba(7, 36, 68, 0.03)',
        'card-hover': '0 12px 28px -4px rgba(7, 36, 68, 0.09), 0 4px 10px -2px rgba(7, 36, 68, 0.04)',
        'elevated': '0 20px 40px -8px rgba(7, 36, 68, 0.12)',
        'glow-teal': '0 0 25px -5px rgba(13, 139, 131, 0.15)',
        'nav': '0 4px 20px rgba(7, 36, 68, 0.05)',
      },
      borderRadius: {
        'pill': '9999px',
        'subtle': '8px',
        'panel': '18px',
        'section': '28px',
      }
    },
  },
  plugins: [],
};
