import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(600px circle at 20% 20%, rgba(99,102,241,0.18), transparent 40%), radial-gradient(700px circle at 80% 0%, rgba(16,185,129,0.14), transparent 42%), radial-gradient(700px circle at 50% 90%, rgba(244,63,94,0.10), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
