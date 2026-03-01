/**
 * @everystate/renderer
 *
 * Direct-binding reactive renderer for EveryState.
 * Bind DOM nodes to store paths with bind-* attributes and set actions.
 */
export {
  parseSetExpr,
  evalExpr,
  parsePush,
  mount,
} from './renderer.js';
