/**
 * @everystate/renderer
 *
 * Direct-binding reactive renderer for EveryState.
 * Bind DOM nodes to store paths with bind-* attributes and set actions.
 */

import type { EveryStateStore } from '@everystate/core';

/** Parse a set expression string (e.g. "path = value") */
export function parseSetExpr(expr: string): { path: string; value: any } | null;

/** Evaluate an expression in the context of a store */
export function evalExpr(expr: string, store: EveryStateStore): any;

/** Parse a push expression for array operations */
export function parsePush(expr: string): { path: string; value: any } | null;

/**
 * Mount a reactive renderer on a DOM container.
 * Scans for `bind-*` attributes and creates store subscriptions.
 * @returns Cleanup function
 */
export function mount(store: EveryStateStore, container: HTMLElement): () => void;
