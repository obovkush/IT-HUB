import {defineConfig} from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3010/',
    },
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
    },
});
