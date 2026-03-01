# @everystate/renderer

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

- **Direct binding** — `data-bind="path"` attribute
- **Zero build** — Works in the browser directly
- **Reactive updates** — DOM updates on state change
- **Minimal overhead** — Only bound elements re-render

## Ecosystem

| Package | Description | License |
|---|---|---|
| [@everystate/aliases](https://www.npmjs.com/package/@everystate/aliases) | Ergonomic single-character and short-name DOM aliases for vanilla JS | MIT |
| [@everystate/core](https://www.npmjs.com/package/@everystate/core) | Path-based state management with wildcard subscriptions and async support. Core state engine (you are here). | MIT |
| [@everystate/css](https://www.npmjs.com/package/@everystate/css) | Reactive CSSOM engine: design tokens, typed validation, WCAG enforcement, all via path-based state | MIT |
| [@everystate/examples](https://www.npmjs.com/package/@everystate/examples) | Example applications and patterns | MIT |
| [@everystate/perf](https://www.npmjs.com/package/@everystate/perf) | Performance monitoring overlay | MIT |
| [@everystate/react](https://www.npmjs.com/package/@everystate/react) | React hooks adapter: `usePath`, `useIntent`, `useAsync` hooks and `EveryStateProvider` | MIT |
| [@everystate/renderer](https://www.npmjs.com/package/@everystate/renderer) | Direct-binding reactive renderer: `bind-*`, `set`, `each` attributes. Zero build step | Proprietary |
| [@everystate/router](https://www.npmjs.com/package/@everystate/router) | SPA routing as state | MIT |
| [@everystate/test](https://www.npmjs.com/package/@everystate/test) | Event-sequence testing for EveryState stores. Zero dependency. | Proprietary |
| [@everystate/view](https://www.npmjs.com/package/@everystate/view) | State-driven view: DOMless resolve + surgical DOM projector. View tree as first-class state | MIT |

## License

MIT © Ajdin Imsirovic
