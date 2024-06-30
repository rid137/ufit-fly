import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.566rem",
        sm: '0.7924rem',
        normal: '0.9056rem',
        md: '1.132rem',
        lg: '1.3584rem',
        xl: '1.5848rem',
        xxl: '1.8112rem',
        xxxl: '2.0376rem'
      },
        colors: {
          primary: "#1C1C1C",
        },
        fontFamily: {
          sans: ["Open Sans", "sans-serif"],
          libre: ["Libre Baskerville", "serif"],
        },
    },
  },
  plugins: [],
};
export default config;

