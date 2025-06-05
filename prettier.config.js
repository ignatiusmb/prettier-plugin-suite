import * as mauss from 'mauss/prettier.config.js';

export default {
	...mauss,
	plugins: ['./workspace/prettier-plugin-sort-package-json/src/index.js'],
};
