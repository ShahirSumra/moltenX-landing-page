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
        'green': '#2BF5AB',
        'description-gray': 'rgba(255, 255, 255, 0.60)',
        'copyright-gray': 'rgba(255, 255, 255, 0.49)'
      },
      backgroundColor: {
        'button-bg': '#82FFD1',
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
        'swipe-button-border': '#2C2C2C'
      },
      spacing: {
        18: '72px',
        13: '52px',
        14: '56px',
        15: '60px',
        21: '84px',
      },
      fontSize: {
        'button': ['14px', { lineHeight: '100%', fontWeight: 600, letterSpacing: '-0.98px' }],
        'button-xl': ['16px', { letterSpacing: '-1.12px' }],
        'button-2xl': ['18px', { letterSpacing: '-1.26px' }],
        'button-3xl': ['22px', { letterSpacing: '-1.4px' }],
        'top-title': ['44px', { lineHeight: '100%', fontWeight: 600, letterSpacing: '-3.08px' }],
        'top-title-xl': ['62px', { letterSpacing: '-4.34px' }],
        'top-title-2xl': ['76px', { letterSpacing: '-5.32px' }],
        'top-title-3xl': ['84px', { letterSpacing: '-5.88px' }],
        'built-label': ['14px', { lineHeight: '100%', letterSpacing: "0.14px" }],
        'built-label-xl': ['16px', { letterSpacing: '0.16px' }],
        'built-label-2xl': ['18px', { letterSpacing: '0.18px' }],
        'built-label-3xl': ['20px', { letterSpacing: '0.20px' }],
        'title': ["32px", { lineHeight: '100%', fontWeight: 600, letterSpacing: "-2.24px" }],
        'title-xl': ["44px", { letterSpacing: "-3.08px" }],
        'title-2xl': ["50px", { letterSpacing: "-3.5px"}],
        'title-3xl': ["62px", { letterSpacing: "-4.34px" }],
        'description': ["14px", { lineHeight: '150%', letterSpacing: '-0.42px' }],
        'description-xl': ["16px", { letterSpacing: '-0.48px' }],
        'description-2xl': ["18px", { letterSpacing: '-0.54px' }],
        'description-3xl': ["20px", { letterSpacing: '-0.6px' }],
        'metals': ["14px", { fontWeight: 600, lineHeight: '100%', letterSpacing: '-0.98px' }],
        'metals-xl': ["16px", { letterSpacing: '-1.12px' }],
        'metals-2xl': ["18px", { letterSpacing: '-1.26px' }],
        'metals-3xl': ["20px", { letterSpacing: '-1.34px', }],
        'product-label': ["16px", { lineHeight: '100%', fontWeight: 600, letterSpacing: '-1.12px' }],
        'product-label-2xl': ["18px", { letterSpacing: '-1.26px' }],
        'product-label-3xl': ["20px", { letterSpacing: '-1.34px' }],
        'product-description': ["11px", { lineHeight: '130%', fontWeight: 400, letterSpacing: '-0.33px' }],
        'product-description-2xl': ["12px", { letterSpacing: '-0.36px' }],
        'product-description-3xl': ["14px", { letterSpacing: '-0.42px' }],
        'big-text-2xl': ["100px", { lineHeight: '100%', fontWeight: 600, letterSpacing: '-7px' }],
        'subscribe': ["14px", { lineHeight: "100%", fontWeight: 600, letterSpacing: '-0.98px' }],
        'subscribe-2xl': ["16px", { letterSpacing: '-1.12px' }],
        'subscribe-3xl': ["18px", { letterSpacing: '-1.26px' }],
        'input': ["12px", { lineHeight: "150%", fontWeight: 300, letterSpacing: '-0.36px' }],
        'input-2xl': ["14px", { letterSpacing: '-0.42px' }],
        'input-3xl': ["16px", { letterSpacing: '-0.48px' }],
        'subscribe-button': ['12px', { lineHeight: '100%', fontWeight: 600, letterSpacing: '-0.84px' }],
        'subscribe-button-xl': ['14px', { letterSpacing: '-0.98px' }],
        'subscribe-button-2xl': ['16px', { letterSpacing: '-1.12px' }],
        'subscribe-button-3xl': ['18px', { letterSpacing: '-1.26px' }],
        'copyright': ["10px", { lineHeight: "100%", fontWeight: 300, letterSpacing: '-0.32px' }],
        'copyright-2xl': ["12px", { letterSpacing: '-0.36px' }],
        'copyright-3xl': ["14px", { letterSpacing: '-0.42px' }],
      },
      boxShadow: {
        'button-shadow': "0 12px 20px 0 rgba(0, 0, 0, 0.30), 0 4px 30px 0 rgba(0, 72, 45, 0.95) inset",
        'button-hover': '0px 12px 20px 0px rgba(0, 0, 0, 0.30), 0px 0 16px 0px rgba(0, 72, 45, 0.95) inset'
      }
    },
  },
  plugins: [],
}

