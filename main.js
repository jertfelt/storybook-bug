const config = {
    stories: [
        "../src/stories/changelog.mdx",
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
        "@storybook/addon-mdx-gfm",
        "@whitespace/storybook-addon-html",
        "@storybook/addon-webpack5-compiler-babel",
        "@chromatic-com/storybook"
    ],
    framework: {
        name: "@storybook/html-vite",
        options: {},
    },
    docs: {
        autodocs: true,
    },
    core: {
        disableTelemetry: true
    },
    staticDirs: ["../src/stories/assets", "../dist/"],
    

};

export default config
