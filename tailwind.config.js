/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        1: '1', // Add custom z-index values.
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        bounce: 'bounce 4s infinite ease-in-out',
        blink: 'blink 1.2s ease-in-out 0.1s 1 forwards',
        blinks: 'blinks 1.2s ease-in-out 0.1s 1 forwards',
        blinkss: 'blinkss 1.2s ease-in-out 0.1s 1 forwards',
        blinksss: 'blinksss 1.2s ease-in-out 0.2s 1 forwards',
        blinkssss: 'blinkssss 1.2s ease-in-out 0.3s 1 forwards',
        blinksssss: 'blinksssss 1.2s ease-in-out 0.2s 1 forwards',
        blinkssssss: 'blinkssssss 1.2s ease-in-out 0.3s 1 forwards',
        blinksssssss: 'blinksssssss 1.2s ease-in-out 0.4s 1 forwards',
        blinkssssssss: 'blinkssssssss 1s ease-in-out 0.1s 1 forwards',
        'slide-in-bottom': 'slide-in-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        blink: {
          from : {opacity: '0', transform: 'translate(0, 100px)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0)', filter: 'blur(0)'},
        },
        blinks: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinkss: {
          from : {opacity: '0', transform: 'translate(100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinksss: {
          from : {opacity: '0', transform: 'translate(100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinkssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinksssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinkssssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinksssssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinkssssssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        bounce:{
          '0%, 100%': { transform: 'translateY(0)'},
          '50%': { transform: 'translateY(-20px)'},
        },
        move: {
          '0%, 49.99%': {opacity: '0', z_index: '1'},
          '50%, 100%': {opacity: '1', z_index: '5'},
        },
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },

      
    },
    },
  },
  plugins: [],
};
