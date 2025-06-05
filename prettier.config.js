import * as mauss from 'mauss/prettier.config.js';

export default {
	...mauss,
	overrides: [
		...mauss.overrides,
		{ files: 'package.json', options: { plugins: ['./workspace/sort-package-json/src/index.js'] } },
	],
};
