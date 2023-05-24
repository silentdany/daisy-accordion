/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "330px",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: colors.emerald[50],
          100: colors.emerald[100],
          200: colors.emerald[200],
          300: colors.emerald[300],
          400: colors.emerald[400],
          500: colors.emerald[500],
          600: colors.emerald[600],
          700: colors.emerald[700],
          800: colors.emerald[800],
          900: colors.emerald[900],
        },
        secondary: {
          50: colors.fuchsia[50],
          100: colors.fuchsia[100],
          200: colors.fuchsia[200],
          300: colors.fuchsia[300],
          400: colors.fuchsia[400],
          500: colors.fuchsia[500],
          600: colors.fuchsia[600],
          700: colors.fuchsia[700],
          800: colors.fuchsia[800],
          900: colors.fuchsia[900],
        },
        tertiary: {
          50: colors.teal[50],
          100: colors.teal[100],
          200: colors.teal[200],
          300: colors.teal[300],
          400: colors.teal[400],
          500: colors.teal[500],
          600: colors.teal[600],
          700: colors.teal[700],
          800: colors.teal[800],
          900: colors.teal[900],
        },
        danger: colors.red[600],
        "danger-plus": colors.red[800],
        warning: colors.amber[600],
        "warning-plus": colors.orange[800],
        success: colors.green[600],
        "success-plus": colors.green[800],
        info: colors.blue[600],
        "info-plus": colors.blue[800],
        disabled: colors.gray[400],
        "disabled-plus": colors.gray[600],
      },
      animation: {
        "pulse-slow": "pulse 12s linear infinite",
        "bounce-slow": "bounce 3s linear infinite",
        border: "border 3s ease infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
