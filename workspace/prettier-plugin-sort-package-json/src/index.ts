import { parsers as babel } from 'prettier/plugins/babel';

function sort(json: Record<string, unknown>) {
	const sorted: Record<string, unknown> = {};

	for (const key of order) {
		if (!(key in json)) continue;
		sorted[key] = json[key];
		delete json[key];
	}
	for (const key in json) {
		sorted[key] = json[key];
	}

	return sorted;
}

export const parsers: Record<string, import('prettier').Parser> = {
	'sort-package-json': {
		...babel['json-stringify'],
		preprocess(text, options) {
			const space = options.useTabs ? '\t' : options.tabWidth;
			return JSON.stringify(sort(JSON.parse(text)), null, space);
		},
	},
	'json-stringify': {
		...babel['json-stringify'],
		preprocess(text, options) {
			if (!/[\\/]package\.json$/.test(options.filepath)) {
				const { preprocess } = babel['json-stringify'];
				return preprocess ? preprocess(text, options) : text;
			}
			const space = options.useTabs ? '\t' : options.tabWidth;
			return JSON.stringify(sort(JSON.parse(text)), null, space);
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
