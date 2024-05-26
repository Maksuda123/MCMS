import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     backgroundImage: {
        'add-button': 'linear-gradient(175.74deg, #BBB0A7 3.44%, #BBB0A7 96.56%)',
      },
      colors: {
        'plus-icon': '#FF4500',
      },
    },
  },
  plugins: [],
};
export default config;