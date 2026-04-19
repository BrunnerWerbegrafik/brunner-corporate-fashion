/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        brunner: {
          cyan: '#009fe3',
          black: '#000000',
          white: '#ffffff',
          'white-smoke': '#f4f4f4',
          silver: '#b6b6b6',
          dunkelblau: '#003e58',
          turkis: '#30585f',
          rosa: '#e1a9a1',
          'midnight-blue': '#002c3f',
          'light-grey': '#d1d1d1',
        },
      },
      fontFamily: {
        sans: ['"Avenir LT"', 'system-ui', 'sans-serif'],
        italic: ['"Avenirnextltpro It"', 'serif'],
        icon: ['Materialicons', 'sans-serif'],
      },
      fontSize: {
        h1: ['100px', { lineHeight: '1.1', fontWeight: '800' }],
        h2: ['80px', { lineHeight: '1.2', fontWeight: '800' }],
        h3: ['60px', { lineHeight: '1.3', fontWeight: '800' }],
        h4: ['40px', { lineHeight: '1.4', fontWeight: '800' }],
        h5: ['26px', { lineHeight: '1.5', fontWeight: '800' }],
        h6: ['20px', { lineHeight: '28px', fontWeight: '800' }],
        body: ['22px', { lineHeight: '1.8', fontWeight: '300' }],
        'paragraph-lg': ['26px', { lineHeight: '1.5', fontWeight: '300' }],
        'paragraph-sm': ['18px', { lineHeight: '1.8', fontWeight: '300' }],
      },
      spacing: {
        'section-desktop': '240px',
        'section-mobile': '120px',
        'section-reduced-desktop': '120px',
        'section-reduced-mobile': '80px',
      },
    },
  },
  plugins: [],
};
