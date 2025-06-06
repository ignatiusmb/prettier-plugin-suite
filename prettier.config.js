import mauss from 'mauss/prettier.config.js';

function detect(plugin) {
	try {
		// out from experimental since v18.19 and v20.6
		// https://nodejs.org/api/esm.html#importmetaresolvespecifier
		import.meta.resolve(plugin);
		return true;
	} catch (error) {
		return false;
	}
}
console.log(
	detect('prettier-plugin-sort-package-json'),
	detect('prettier-plugin-sort-package-json') &&
		import.meta.resolve('prettier-plugin-sort-package-json'),
);

export default {
	...mauss,
	plugins: ['./workspace/prettier-plugin-sort-package-json/src/index.js'],
	overrides: mauss.overrides.filter((o) => {
		return o.files !== 'package.json';
	}),
};
