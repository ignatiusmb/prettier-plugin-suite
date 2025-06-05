import mauss from 'mauss/prettier.config.js';

console.log(mauss.overrides);

export default {
	...mauss,
	plugins: ['./workspace/prettier-plugin-sort-package-json/src/index.js'],
};
