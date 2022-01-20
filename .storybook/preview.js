import '@monto/tailwindcss/default.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div className="font-scale-md sm:font-scale-lg antialiased leading-[120%]">
      <Story />
    </div>
  ),
];
