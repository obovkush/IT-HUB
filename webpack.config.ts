import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWeppackConfig';
import { buildPaths } from './config/build/types/config';
import path from 'path';

const paths: buildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
};

const config: webpack.Configuration = buildWebpackConfig({
	mode: 'development',
	paths: paths,
});

export default config;
