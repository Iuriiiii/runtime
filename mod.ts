// deno-lint-ignore-file no-process-global
/**
 * The runtime.
 */
export enum Runtime {
  Deno = "deno",
  Node = "node",
  Bun = "bun",
  Browser = "browser",
  Unknown = "unknown",
}

/**
 * Get the current runtime.
 *
 * @returns The current runtime.
 */
export function getRuntime(): Runtime {
  switch (true) {
    case typeof Deno !== "undefined":
      return Runtime.Deno;
    // @ts-ignore: check Bun
    case typeof Bun !== "undefined":
      return Runtime.Bun;
    // @ts-ignore: check process
    case typeof process !== "undefined" &&
      process.toString() === "[object process]":
      return Runtime.Node;
    case typeof window !== "undefined":
      return Runtime.Browser;
    default:
      return Runtime.Unknown;
  }
}
