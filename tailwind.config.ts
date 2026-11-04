import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        text: "var(--text)",
        muted: "var(--muted)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        whatsapp: "var(--whatsapp)",
        border: "var(--border)",
        focus: "var(--focus)",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-lato)", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
