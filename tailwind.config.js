/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xl': '1800px',
      '2xl': '1536px',
      'xl': '1200px',
      'md': '768px',
    },
    extend: {
      fontFamily: {
  			display: [
  				'var(--font-dm-sans)',
  			]
  		},
      colors: {
        'button-orange': '#8F3C00',
        'yellow': '#FDF83A',
        'description-gray': 'rgba(255, 255, 255, 0.60)',
        'copyright-gray': 'rgba(255, 255, 255, 0.49)'
      },
      backgroundColor: {
        'button-bg': '#FFF471',
      },
      backgroundImage: {
        'carousel-before': "linear-gradient(95deg, #000 40.44%, rgba(0, 0, 0, 0.00) 102.52%)",
        'carousel-after': "linear-gradient(-90deg, #000 40.44%, rgba(0, 0, 0, 0.00) 102.52%)"
      },
      borderRadius: {
        
      },
      borderColor: {
        'dashed-border': 'rgba(255, 255, 255, 0.12)',
        'input-border': 'rgba(255, 255, 255, 0.10)',
      },
      spacing: {
        18: '72px',
        13: '52px',
        14: '56px',
        15: '60px',
        21: '84px',
      },
      fontSize: {
        'button': ['18px', { lineHeight: '100%', fontWeight: 600, letterSpacing: '-1.26px' }],
        'top-title-2xl': ['76px', { lineHeight: '100%', fontWeight: 600, letterSpacing: '-5.32px' }],
        'built-label': ['18px', { lineHeight: '100%', letterSpacing: 0.18 }],
        'title-2xl': ["50px", { lineHeight: '100%', fontWeight: 600, letterSpacing: "-3.5px"}],
        'description-2xl': ["18px", { lineHeight: '150%', letterSpacing: '-0.54px' }],
        'product-label-2xl': ["18px", { lineHeight: '100%', fontWeight: 600, letterSpacing: '-1.26px' }],
        'product-description-2xl': ["12px", { lineHeight: '130%', fontWeight: 400, letterSpacing: '-0.36px' }],
        'big-text-2xl': ["100px", { lineHeight: '100%', fontWeight: 600, letterSpacing: '-7px' }],
        'subscribe-2xl': ["16px", { lineHeight: "100%", fontWeight: 600, letterSpacing: '-1.12px' }],
        'input-2xl': ["14px", { lineHeight: "150%", fontWeight: 300, letterSpacing: '-0.42px' }],
        'subscribe-button-2xl': ['16px', { lineHeight: '100%', fontWeight: 600, letterSpacing: '-1.12px' }],
        'copyright-2xl': ["12px", { lineHeight: "100%", fontWeight: 300, letterSpacing: '-0.36px' }],
      },
      boxShadow: {
        'button-shadow': "0px 12px 20px 0px rgba(0, 0, 0, 0.30), 0px 4px 30px 0px rgba(225, 9, 1, 0.95) inset",
        'button-hover': '0px 12px 20px 0px rgba(0, 0, 0, 0.30), 0px 0 16px 0px rgba(225, 9, 1, 0.95) inset'
      }
    },
  },
  plugins: [],
}

