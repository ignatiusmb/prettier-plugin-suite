import mauss from 'mauss/prettier.config.js';

export default {
	...mauss,
	plugins: ['./workspace/prettier-plugin-sort-package-json/src/index.js'],
	overrides: mauss.overrides.filter((o) => {
		return !o.options.plugins?.includes('prettier-plugin-sort-package-json');
	}),
};
