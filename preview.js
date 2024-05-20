import "../dist/screen.css";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    
  }, options: {
    storySort: {
        order: [
            "Info",
            "Foundation",
            "Komponenter",
            ["Atoms", "Molecules", "Organisms", "Pages"],
         
        ],
    },
},
};
