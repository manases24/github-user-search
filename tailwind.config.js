/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary), <alpha-value>)",
          lighter: "hsl(var(--primary-lighter), <alpha-value>)",
          foreground: "hsl(var(--primary-foreground), <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary), <alpha-value>)",
          lighter: "hsl(var(--secondary-lighter), <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground), <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card), <alpha-value>)",
          foreground: "hsl(var(--card-foreground), <alpha-value>)",
        },
        btn: {
          DEFAULT: "hsl(var(--btn), <alpha-value>)",
          hover: "hsl(var(--btn-hover), <alpha-value>)",
        },
        noContent: {
          DEFAULT: "hsl(var(--no-content), <alpha-value>)",
          disabled: "hsl(var(--no-content-disabled), <alpha-value>)",
        },
        svg: {
          DEFAULT: "hsl(var(--svg), <alpha-value>)",
          disabled: "hsl(var(--svg-disabled), <alpha-value>)",
        },
        fill: {
          DEFAULT: "hsl(var(--fill), <alpha-value>)",
          hover: "hsl(var(--fill-hover), <alpha-value>)",
        },
      },
      borderRadius: {
        xl: "var(--radius)",
        lg: "calc(var(--radius) - 2px",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 6px)",
      },
    },
  },
};
