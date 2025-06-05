import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        primary: {
          500: '#FF0000',
          600: '#CC0000',
        }
      },
      skeleton: {
        default: {
          color: 'gray-800',
          highlightColor: 'gray-700',
          animationDuration: '1.5s',
          animationDirection: 'alternate',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease-in-out',
          animationDelay: '0s',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config