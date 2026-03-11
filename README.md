# @everystate/renderer v1.0.4

**Direct-binding reactive renderer for EveryState. Zero build step.**

Bind DOM elements directly to state paths. No virtual DOM, no compilation, no build step.

## Installation

```bash
npm install @everystate/renderer @everystate/core
```

## Quick Start

```html
<div id="app">
  <h1 data-bind="title"></h1>
  <p data-bind="message"></p>
</div>

<script type="module">
import { createEventState } from '@everystate/core';
import { createRenderer } from '@everystate/renderer';

const store = createEventState({
  title: 'Hello',
  message: 'World'
});

const renderer = createRenderer(store);
renderer.mount('#app');

// Updates automatically
store.set('title', 'Hi');
</script>
```

## Features

- **Direct binding** - `data-bind="path"` attribute
- **Zero build** - Works in the browser directly
- **Reactive updates** - DOM updates on state change
- **Minimal overhead** - Only bound elements re-render

## Documentation

Full documentation available at [everystate.dev](https://everystate.dev).

## Ecosystem

| Package | Description | License |
|---|---|---|
| [@everystate/aliases](https://www.npmjs.com/package/@everystate/aliases) | Ergonomic single-character and short-name DOM aliases for vanilla JS | MIT |
| [@everystate/angular](https://www.npmjs.com/package/@everystate/angular) | Angular adapter: `usePath`, `useIntent`, `useWildcard`, `useAsync` — bridges store to Angular signals | MIT |
| [@everystate/core](https://www.npmjs.com/package/@everystate/core) | Path-based state management with wildcard subscriptions and async support | MIT |
| [@everystate/css](https://www.npmjs.com/package/@everystate/css) | Reactive CSSOM engine: design tokens, typed validation, WCAG enforcement, all via path-based state | MIT |
| [@everystate/examples](https://www.npmjs.com/package/@everystate/examples) | Example applications and patterns | MIT |
| [@everystate/perf](https://www.npmjs.com/package/@everystate/perf) | Performance monitoring overlay | MIT |
| [@everystate/react](https://www.npmjs.com/package/@everystate/react) | React hooks adapter: `usePath`, `useIntent`, `useAsync` hooks and `EventStateProvider` | MIT |
| [@everystate/renderer](https://www.npmjs.com/package/@everystate/renderer) | Direct-binding reactive renderer: `bind-*`, `set`, `each` attributes. Zero build step | MIT |
| [@everystate/router](https://www.npmjs.com/package/@everystate/router) | SPA routing as state | MIT |
| [@everystate/solid](https://www.npmjs.com/package/@everystate/solid) | Solid adapter: `usePath`, `useIntent`, `useWildcard`, `useAsync` — bridges store to Solid signals | MIT |
| [@everystate/test](https://www.npmjs.com/package/@everystate/test) | Event-sequence testing for EveryState stores. Zero dependency. | MIT |
| [@everystate/types](https://www.npmjs.com/package/@everystate/types) | Typed dot-path autocomplete for EveryState stores | MIT |
| [@everystate/view](https://www.npmjs.com/package/@everystate/view) | State-driven view: DOMless resolve + surgical DOM projector. View tree as first-class state | MIT |
| [@everystate/vue](https://www.npmjs.com/package/@everystate/vue) | Vue 3 composables adapter: `provideStore`, `usePath`, `useIntent`, `useWildcard`, `useAsync` | MIT |

## Self-test (CLI, opt-in)

The self-test verifies the pure helper functions (`parseSetExpr`, `evalExpr`, `parsePush`).
It is **zero-dependency** - no `@everystate/core` or DOM required.
It is **opt-in** and never runs automatically on install:

```bash
# via npx (no install needed)
npx everystate-renderer-self-test

# if installed locally
everystate-renderer-self-test

# or directly
node node_modules/@everystate/renderer/self-test.js
```

You can also run the npm script from the package folder:

```bash
npm --prefix node_modules/@everystate/renderer run self-test
```

### Integration tests (@everystate/test)

The `tests/` folder contains a separate integration suite that uses
`@everystate/test` and `@everystate/core` (declared as `devDependencies` / `peerDependencies`).
The **self-test** stays zero-dependency, while integration tests
remain available for deeper store-level validation.

**For end users** (after installing the package):

```bash
# Install test dependency
npm install @everystate/test

# Run from package folder
cd node_modules/@everystate/renderer
npm run test:integration
# or short alias
npm run test:i
```

Or, from your project root:

```bash
npm --prefix node_modules/@everystate/renderer run test:integration
```

**For package developers** (working in the source repo):

```bash
npm install
npm run test:integration
```

## License

MIT © Ajdin Imsirovic
