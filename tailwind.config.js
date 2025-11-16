export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f1724',
          main: '#0ea5a4',
          accent: '#d4af37'
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-in': 'slideIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: []
}