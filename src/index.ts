import babel from 'prettier/parser-babel';

export const parsers: Record<string, import('prettier').Parser> = {
	'json-stringify': {
		...babel.parsers['json-stringify'],
		preprocess(text, options) {
			if (!/[\\/]package\.json$/.test(options.filepath)) {
				if (!babel.parsers['json-stringify'].preprocess) return text;
				return babel.parsers['json-stringify'].preprocess(text, options);
			}

			const original = JSON.parse(text);
			const sorted = order.reduce(
				(pkg, k) => {
					if (k in original) pkg[k] = original[k];
					return delete original[k], pkg;
				},
				{} as Record<string, unknown>,
			);

			const space = options.useTabs ? '\t' : options.tabWidth;
			return JSON.stringify({ ...sorted, ...original }, null, space);
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
	'main',
	'module',
	'browser',
	'svelte',
	'types',
	'typings',

	'exports',
	'files',
	'packageManager',
	'engineStrict',
	'engines',
	'os',
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
	'workspaces',
	'pnpm',
];
