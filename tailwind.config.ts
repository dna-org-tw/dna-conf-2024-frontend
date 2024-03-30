import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundSize: {
        "w-100%": "100% auto",
      },
      letterSpacing: {
        widest: "0.2em",
      },
      backgroundImage: {
        "highlight-text-gradient":
          "linear-gradient(135deg, #fff 41px, #000 41px)",
        "mobile-TBD-zh": "url('/images/mobile-TBD-zh.png')",
        "mobile-TBD-en": "url('/images/mobile-TBD-en.png')",
        "desktop-TBD-zh": "url('/images/TBD-zh.png')",
        "desktop-TBD-en": "url('/images/TBD-en.png')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          gray: "#1E1F1C",
        },
        cta: "#E74310",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "highlight-text-gradient":
          "linear-gradient(135deg, #fff 41px, #000 41px)",
      },
      backgroundColor: {
        "single-ticket": "#FFD028",
        "group-ticket": "#F9D2E5",
        "classic-ticket": "#10B8D9",
        "vip-ticket": "#E4003D",
      },
      borderColor: {
        "single-ticket": "#FFD028",
        "group-ticket": "#F9D2E5",
        "classic-ticket": "#10B8D9",
        "vip-ticket": "#E4003D",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
