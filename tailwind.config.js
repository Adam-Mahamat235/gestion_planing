/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html.twig', // Si tu utilises Twig
    './src/**/*.php', // Si tu utilises PHP pour générer des vues
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

