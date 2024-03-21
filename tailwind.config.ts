import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "w-100%": "100% auto",
      },
      letterSpacing: {
        widest: "0.2em",
      },
      backgroundImage: {
        "highlight-text-gradient": "linear-gradient(135deg, #fff 41px, #000 41px)",
        'mobile-TBD-zh': "url('/images/mobile-TBD-zh.png')",
        'mobile-TBD-en': "url('/images/mobile-TBD-en.png')",
        'desktop-TBD-zh': "url('/images/TBD-zh.png')",
        'desktop-TBD-en': "url('/images/TBD-en.png')",
      },
    },
  },
  plugins: [],
};
export default config;
