# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run all commands from the **repository root** using `yarn`:

| Command | Purpose |
|---------|---------|
| `yarn dev` | Start Next.js docs dev server at http://localhost:9281 |
| `yarn build` | Build the npm package via Rollup (output: `package/dist/`) |
| `yarn test` | Full test suite: syncpack + prettier + typecheck + lint + jest |
| `yarn jest` | Run Jest unit tests only |
| `yarn docgen` | Regenerate `docs/docgen.json` from component source (run after changing props) |
| `yarn docs:build` | Build the static docs site |
| `yarn docs:deploy` | Build + deploy docs to GitHub Pages |
| `yarn lint` | ESLint + Stylelint |
| `yarn prettier:write` | Auto-format all `.ts`, `.tsx`, `.css`, `.mdx` files |
| `yarn storybook` | Start Storybook at http://localhost:8271 |
| `yarn clean` | Remove `package/dist/` |

To run a single Jest test file:
```sh
yarn jest package/src/Marquee.test.tsx
```

## Architecture

### Package structure

```
package/src/
  Marquee.tsx          # Component implementation
  Marquee.module.css   # CSS Modules with animation keyframes
  Marquee.story.tsx    # Storybook stories
  Marquee.test.tsx     # Jest unit test
  index.ts             # Public exports
```

The Rollup build produces both ESM (`package/dist/esm/*.mjs`) and CJS (`package/dist/cjs/*.cjs`) outputs, plus extracted CSS at `package/dist/styles.css` and `package/dist/styles.layer.css`.

### Component pattern

`Marquee` uses Mantine's **factory pattern** (`factory<MarqueeFactory>`) which requires:
- A `Factory` type declaring `props`, `ref`, `stylesNames`, and `vars`
- `createVarsResolver` to map props → CSS custom properties on the `.root` element
- `useProps` for default prop merging
- `useStyles` for the `getStyles` accessor (handles `classNames`, `styles`, `unstyled`)

CSS custom properties defined in `Marquee.module.css` control animation behavior (`--marquee-duration`, `--marquee-gap`, `--marquee-animation-direction`, `--marquee-direction`, `--marquee-play-state`, `--marquee-fade-edge-size`, `--marquee-fade-edge-color`). The `varsResolver` sets these from props; `pauseOnHover` is handled inline via `style` in `useStyles` because it depends on component state (`over`).

The component clones `children` into `repeat` number of wrapper `<div>`s to create the seamless loop illusion.

### Docs site

```
docs/
  demos/               # MantineDemo objects (configurator, examples)
  components/          # Shared UI: Shell, Footer, PageHeader, DocsTabs, etc.
  pages/index.tsx      # Single-page docs using DocsTabs
  docs.mdx             # Documentation content (MDX)
  docgen.json          # Auto-generated prop types (via yarn docgen)
  styles-api/          # Styles API documentation data
  data.ts              # Package metadata for PageHeader
```

Demo files export a `MantineDemo` object consumed by `<Demo data={demos.xxx} />` in `docs.mdx`. After modifying component props or adding new demos, run `yarn docgen` to update `docgen.json`.

#### Demo files checklist

Each demo has two parts: a `Wrapper` function (the actual rendered component) and a `code` string (the snippet shown to users in the docs). These must stay in sync. When editing or adding demos:

- All imports used in the `code` string must be explicitly declared in the `code` string itself — they are not inherited from the file's top-level imports.
- The `code` string for `type: 'configurator'` demos must include `function Demo() { ... }` as the outer wrapper.
- `libraryValue` in configurator controls must match the actual `defaultProps` in `Marquee.tsx`. `initialValue` can differ (it's the demo's starting value, not the library default).
- Width/height values in the `Wrapper` and in the `code` string must be consistent.

#### `docs/styles-api/Marquee.styles-api.ts`

Documents the selectors and CSS variables exposed via the Styles API. The `selectors` object must match `MarqueeStylesNames`; the `vars.root` object must match `MarqueeCssVariables` in `Marquee.tsx`. Note: `--marquee-play-state` is intentionally absent — it is set via inline `style` (not through `varsResolver`) because it depends on runtime hover state.

### Styling

CSS Modules are used with hashed class names (via `hash-css-selector` with prefix `me`). PostCSS with `postcss-preset-mantine` handles Mantine's `@mixin dark` syntax and other extensions. Size tokens (`xs`/`sm`/`md`/`lg`/`xl`) map to explicit CSS custom property scales defined in `.root`.

### Release workflow

`yarn release:patch|minor|major` bumps `package/package.json` version, then runs `docs:deploy`. Always run from repo root. See the parent workspace `CLAUDE.md` for the full update/release workflow.
