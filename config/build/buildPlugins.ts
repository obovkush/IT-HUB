import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance} from 'webpack';
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import {BuildOptions} from './types/config';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const {paths, isDev, apiUrl, project} = options;
    const isProd = !isDev;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new HotModuleReplacementPlugin());
        // plugins.push(
        //     new BundleAnalyzerPlugin({
        //         openAnalyzer: false,
        //         analyzerPort: 4444,
        //     })
        // );
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        );
        plugins.push(
            new CopyPlugin({
                patterns: [{from: paths.locales, to: paths.buildLocales}],
            })
        );
    }

    return plugins;
}
