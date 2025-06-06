import mauss from 'mauss/prettier.config.js';

export default {
	...mauss,
	plugins: ['./workspace/prettier-plugin-sort-package-json/src/index.js'],
	// the packages in the workspace directory have the exact name of the package
	// and the detection of the plugin gets confused because of the monorepo structure
	// so we need to clear the packages from the config, only for this monorepo
	overrides: mauss.overrides.filter((o) => {
		return !o.options.plugins?.includes('prettier-plugin-sort-package-json');
	}),
};
