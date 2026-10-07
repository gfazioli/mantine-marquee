# CLAUDE.md

## Project
`@gfazioli/mantine-marquee` — A Mantine 9 marquee component that creates seamless infinite-scrolling content loops with GPU-accelerated CSS keyframe animations, supporting horizontal/vertical directions, responsive props, and CSS-mask fade edges.

## Commands
| Command | Purpose |
|---------|---------|
| `yarn build` | Build the npm package via Rollup |
| `yarn dev` | Start the Next.js docs dev server (port 9281) |
| `yarn test` | Full test suite (syncpack + oxfmt + typecheck + lint + jest) |
| `yarn jest` | Run only Jest unit tests |
| `yarn docgen` | Generate component API docs (docgen.json) |
| `yarn docs:build` | Build the Next.js docs site for production |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn lint` | Run oxlint + Stylelint |
| `yarn format:write` | Format all files with oxfmt |
| `yarn storybook` | Start Storybook dev server |
| `yarn clean` | Remove build artifacts |
| `yarn release:patch` | Bump patch version and deploy docs |
| `diny yolo` | AI-assisted commit (stage all, generate message, commit + push); it needs a TTY, so from Claude Code commit with `git commit` + `git push` |

> **Important**: After changing the public API (props, types, exports), always run `yarn clean && yarn build` before `yarn test`, because `yarn docgen` needs the fresh build output.

## Architecture

### Workspace Layout
Yarn workspaces monorepo with two workspaces: `package/` (npm package) and `docs/` (Next.js 16 documentation site).

### Package Source (`package/src/`)
```
Marquee.tsx          # Component implementation (factory pattern)
Marquee.module.css   # CSS Modules with animation keyframes
Marquee.story.tsx    # Storybook stories
Marquee.test.tsx     # Jest unit test
index.ts             # Public exports
```

Single-component package — `Marquee` is the only exported component, built with Mantine's `factory<MarqueeFactory>` pattern (`useProps`, `useStyles`, `createVarsResolver`).

### Build Pipeline
Rollup bundles to dual ESM (`dist/esm/`) and CJS (`dist/cjs/`) with `'use client'` banner. CSS modules are hashed with `hash-css-selector` (prefix `me`). TypeScript declarations via `rollup-plugin-dts`. CSS is split into `styles.css` and `styles.layer.css` (layered version).

## Component Details

### Factory pattern
`Marquee` uses Mantine's `factory<MarqueeFactory>` which requires a `Factory` type declaring `props`, `ref`, `stylesNames`, and `vars`, plus `createVarsResolver` to map props to CSS custom properties on `.root`, `useProps` for default prop merging, and `useStyles` for the `getStyles` accessor.

### CSS custom properties split
CSS custom properties in `Marquee.module.css` control animation: `--marquee-duration`, `--marquee-gap`, `--marquee-animation-direction`, `--marquee-direction`, `--marquee-play-state`, `--marquee-fade-edge-size`, `--marquee-fade-color`. The `varsResolver` sets static props (`duration`, `reverse`, `fadeEdgesSize`, `fadeEdgeColor`, the 3D props). Two variables are set via inline `style` in `useStyles` because they depend on hooks:
- `--marquee-direction` — `vertical` can be a responsive breakpoint object resolved by `useMatches`
- `--marquee-gap` — `gap` can be a responsive breakpoint object resolved by `useMatches`

The `varsResolver` only receives raw props and cannot call hooks, which is why these two are excluded from it and from `MarqueeCssVariables`.

`--marquee-play-state` is never set inline: `.root` declares it `running`, and `.root[data-pause-on-hover]:where(:hover, :has(:focus-visible))` sets it to `paused`. That is the whole of `pauseOnHover` (hover and keyboard focus, all variants, no React state). An inline value would beat the rule, so keep it out of `style`.

### Animation mechanics
The marquee loop clones `children` into `repeat` wrapper `<div>`s (the `group` selector) inside one holder (the `content` selector), all sharing the same CSS keyframe. `content` and `group` are core's selector names, reached through `getStyles` so `classNames`, `styles` and `attributes` apply; vertical is a `data-vertical` attribute on each group, not a class, so nested marquees cannot inherit it. Each clone translates by `translateX(calc(-100% - var(--marquee-gap)))`, exactly the distance to the next clone, making the loop geometrically seamless.

Key CSS decisions:
- `will-change: transform` on `.group` — promotes each clone to a GPU compositor layer, preventing frame drops.
- `backface-visibility: hidden` — prevents flickering on Safari/iOS during animation loop reset.
- `overflow: hidden` only on `.root`, not `.content` — having it on both creates an extra stacking context that interferes with GPU layer compositing.
- The CSS keyframe + `transform` approach runs entirely on the GPU compositor thread without touching layout or paint.

### Responsive `vertical` prop
`vertical` accepts `boolean | Partial<Record<MantineBreakpoint, boolean>>` (exported as `MarqueeVertical`). `useMatches` is always called (React hooks rules). A plain boolean is wrapped as `{ base: bool }` (no-op for `useMatches`). The resolved boolean is stored as `resolvedVertical` and used for `data-vertical` (on the root and on each group), `data-orientation`, and the `--marquee-direction` inline style.

### Responsive `gap` prop
`gap` accepts `MantineSpacing | Partial<Record<MantineBreakpoint, MantineSpacing>>` (exported as `MarqueeGap`), default `'md'`. Same `useMatches` pattern as `vertical`. A plain value is wrapped as `{ base: gap }`. The resolved value passes through `getSpacing()`, as in core (tokens → `theme.spacing`, numbers → rem), and is set as `--marquee-gap` via inline style. Until v5 the tokens used a private 1/2/4/8/16px scale; the Upgrade guide (`docs/migrations.mdx`) has the mapping.

### Fade edges — CSS mask system
`fadeEdges` uses `mask-image` (not DOM overlay divs) for true alpha compositing, independent of background color. Accepts `boolean | 'linear' | 'ellipse' | 'rect'` (`true` equals `'linear'`). The resolved shape is set as `data-fade-edges="<shape>"` on `.root`; orientation via `data-vertical`.

Types exported: `MarqueeFadeEdges`, `MarqueeFadeEdgesSize`. Internal helpers: `resolveFadeEdges()` converts the union to the data-attribute string; `resolveFadeEdgeSize()` splits the value into `{ single, x, y }`.

`fadeEdgesSize` accepts `MantineSize | (string & {}) | [x, y]` tuple. For a single value, `single`/`x`/`y` resolve identically. The `varsResolver` sets `--marquee-fade-edge-size`, `--marquee-fade-edge-size-x`, and `--marquee-fade-edge-size-y`.

**One-sided gradient technique:** All linear/rect masks use one-sided gradients (one per edge) composited with `mask-composite: intersect`, not a single double-sided gradient per axis. A double-sided gradient breaks when `size > 50%` because left/right stop positions swap, causing the browser to clamp them per CSS spec and produce a hard alpha seam. One-sided gradients can never have overlapping stops.

**Shapes:**
- `"linear"` — 2 one-sided gradients (left + right, or top + bottom for vertical). Uses `[data-vertical]` to switch directions.
- `"ellipse"` — radial vignette fade (`radial-gradient(ellipse at center, ...)`). Orientation-independent. The `* 2` multiplier on `--marquee-fade-edge-size` makes the fade visually comparable to linear mode.
- `"rect"` — 4 one-sided gradients (left + right + top + bottom) via `mask-composite: intersect` (`-webkit-mask-composite: source-in`). Uses `--marquee-fade-edge-size-x` for left/right and `--marquee-fade-edge-size-y` for top/bottom. At corners alpha values multiply naturally (e.g. 0.5 × 0.5 = 0.25).

`isolation: isolate` on the masked element prevents Safari compositing glitches when `will-change: transform` children are present.

`postcss-preset-mantine` does NOT include autoprefixer — `-webkit-mask-image` and `-webkit-mask-composite: source-in` must always be written explicitly alongside standard `mask-image` and `mask-composite: intersect`.

### Fade edges — `fadeEdgeColor`
With `fadeEdgeColor` set (and `fadeEdges` on) the root gets `data-fade-color`, the mask rules are skipped (`:not([data-fade-color])`: a mask on the root would mask the overlay too) and one `::after` overlay paints the same gradients inverted: the color at the edge, transparent at the fade size, with `color-mix()` stops matching the mask's eased alpha. Background layers composite "over", which for inverted layers equals the masks' intersect, so rect corners fall off identically. The color goes through `getThemeColor` (`'blue'`, `'blue.3'`, or any CSS color) into `--marquee-fade-color`, core's variable name. The overlay has `pointer-events: none` and `z-index: 1` inside the isolated root.

`fadeEdgesColor` (plural) was removed in the major release that introduced CSS masks; `fadeEdgeColor` (singular, core's name) came back as the painted mode in v5.

### Styling
CSS Modules with hashed class names (prefix `me`). PostCSS with `postcss-preset-mantine` handles `@mixin dark` and other extensions. Fade size tokens (`xs`/`sm`/`md`/`lg`/`xl`) map to an explicit CSS custom property scale defined in `.root`; `gap` tokens map to `theme.spacing`.

## Testing
Jest with `jsdom` environment, `esbuild-jest` transform, CSS mocked via `identity-obj-proxy`. Component tests use `@mantine-tests/core` render helper. Test file: `package/src/Marquee.test.tsx`.

## Ecosystem
This repo is part of the Mantine Extensions ecosystem, derived from the `mantine-base-component` template. See the workspace (the parent directory) for:
- Development checklist and cross-cutting patterns (compound components, responsive CSS, GitHub sync): the workspace's `.claude/rules/component-development.md`, which loads with this repo's files
- Update packages workflow: the workspace's `fleet-maintenance` skill
- Release process: the workspace's `/release` command
