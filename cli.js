#!/usr/bin/env node

/**
 * @everystate/renderer CLI - opt-in self-test
 *
 * Usage:
 *   npx everystate-renderer-self-test          # run self-test
 *   npx everystate-renderer-self-test --help   # show help
 */

(async () => {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
@everystate/renderer - self-test CLI

Usage:
  everystate-renderer-self-test          Run the bundled self-test
  everystate-renderer-self-test --help   Show this help message

The self-test verifies the pure helper functions shipped with the
renderer: parseSetExpr, evalExpr, and parsePush.

It is zero-dependency - no @everystate/core or DOM required.
It is opt-in and never runs automatically on install.
`.trim());
    process.exit(0);
  }

  try {
    await import('./self-test.js');
  } catch (err) {
    console.error('Self-test failed:', err.message);
    process.exit(1);
  }
})();
