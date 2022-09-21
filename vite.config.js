/* eslint-disable import/no-extraneous-dependencies */
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvgPlugin from 'vite-plugin-react-svg';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		reactRefresh(),
		reactSvgPlugin({
			defaultExport: 'component',
		}),
	],
	server: {
		port: 7779,
		proxy: {
			'/api': {
				target: 'http://localhost:3000/v1',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	esbuild: {
		jsx: 'transform',
		jsxFactory: '_jsx',
		jsxFragment: '_jsxFragment',
		jsxInject: `import { createElement as _jsx, Fragment as _jsxFragment } from 'react'`,
	},
	define: {
		'process.env': {},
	},
});
