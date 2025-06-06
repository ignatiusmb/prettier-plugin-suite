import { parsers as babel } from 'prettier/plugins/babel';

export const parsers: Record<string, import('prettier').Parser> = {
	'json-stringify': {
		...babel['json-stringify'],
		preprocess(text, options) {
			if (!/[\\/]package\.json$/.test(options.filepath)) {
				const { preprocess } = babel['json-stringify'];
				return preprocess ? preprocess(text, options) : text;
			}

			const original = JSON.parse(text);
			const sorted: Record<string, unknown> = {};

			for (const key of order) {
				if (!(key in original)) continue;
				sorted[key] = original[key];
				delete original[key];
			}
			for (const key in original) {
				sorted[key] = original[key];
			}

			const space = options.useTabs ? '\t' : options.tabWidth;
			return JSON.stringify(sorted, null, space);
		},
	},
};

const order = [
	'$schema',
	'private',
	'name',
	'version',
	'description',
	'repository',
	'bugs',
	'homepage',
	'author',
	'maintainers',
	'contributors',
	'funding',
	'license',
	'type',

	'scripts',
	'config',
	'bin',
	'man',
	'main',
	'module',
	'browser',
	'svelte',
	'types',
	'typings',

	'exports',
	'files',
	'directories',
	'packageManager',
	'engineStrict',
	'engines',
	'os',
	'libc',
	'cpu',
	'prettier',

	'keywords',
	'dependencies',
	'peerDependencies',
	'peerDependenciesMeta',
	'bundleDependencies',
	'bundledDependencies',
	'optionalDependencies',
	'devDependencies',
	'overrides',

	'publishConfig',
	'devEngines',
	'workspaces',
	'pnpm',
];
