# prettier-plugin-sort-package-json

A [Prettier](https://prettier.io/) plugin to automatically keep `package.json` consistently tidy, sorted, and stress-free.

- 🔌 Zero dependencies
- ⚙️ No config, no hassle
- 🧹 Auto-lint with Prettier
- 🚀 Auto-sort with Prettier
- 🌟 Set once and forget

## Installation

This example use `pnpm`, but this works with any package manager

```bash
pnpm add -D prettier-plugin-sort-package-json
# or
npm install -D prettier-plugin-sort-package-json
```

## Usage

Use like [any other Prettier plugin](https://prettier.io/docs/plugins), load it with the CLI via `--plugin`:

```diff
- prettier --write .
+ prettier --write . --plugin=prettier-plugin-sort-package-json
```

Or, include it in your [config file](https://prettier.io/docs/configuration) via `"plugins"` list:

```json
{
	"plugins": ["prettier-plugin-sort-package-json"]
}
```

That's it. No mental overhead.
