module.exports = {
    /** stories path */
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
        '../components/stories/**/*.stories.mdx',
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-essentials'],
    /** storybook 의 환경설정 */
    framework: '@storybook/vue3',

    /** storybook 빌더 옵션설정 */
    core: {
        builder: '@storybook/builder-vite',
    },
};
