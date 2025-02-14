export enum EngineType {
  Deno = "deno",
  Node = "node",
  Bun = "bun",
  Browser = "browser",
  Unknown = "unknown"
}

export function getRuntime(): EngineType {
  switch (true) {
    case typeof Deno !== "undefined":
      return EngineType.Deno;
    // @ts-ignore: check Bun 
    case typeof Bun !== "undefined":
      return EngineType.Bun;
    // @ts-ignore: check process 
    // deno-lint-ignore no-process-globals
    case typeof process !== "undefined" && process.versions?.node:
      return EngineType.Node;
    case typeof window !== "undefined":
      return EngineType.Browser;
    default:
      return EngineType.Unknown;
  }
}