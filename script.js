/** @param {string} plugin */
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

console.log(detect('prettier-plugin-sort-package-json'));
