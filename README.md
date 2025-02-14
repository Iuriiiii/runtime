# Runtime Detection Utility

A lightweight TypeScript utility that detects the current JavaScript runtime environment (Deno, Node.js, Bun, or Browser).

## Installation

```bash
deno add jsr:@online/runtime
```

## Usage

```typescript
import { getRuntime, EngineType } from '@online/runtime';

const currentRuntime = getRuntime();

switch (currentRuntime) {
  case EngineType.Deno:
    console.log('Running in Deno');
    break;
  case EngineType.Node:
    console.log('Running in Node.js');
    break;
  case EngineType.Bun:
    console.log('Running in Bun');
    break;
  case EngineType.Browser:
    console.log('Running in Browser');
    break;
  default:
    console.log('Unknown runtime environment');
}
```

## API Reference

### `EngineType`

An enum representing different JavaScript runtime environments:

```typescript
enum EngineType {
  Deno = "deno",
  Node = "node", 
  Bun = "bun",
  Browser = "browser",
  Unknown = "unknown"
}
```

### `getRuntime()`

Returns the current runtime environment as an `EngineType`.

Returns:
- `EngineType.Deno` - When running in Deno
- `EngineType.Node` - When running in Node.js
- `EngineType.Bun` - When running in Bun
- `EngineType.Browser` - When running in a browser environment
- `EngineType.Unknown` - When the runtime cannot be determined

## How it Works

The utility determines the runtime environment by checking for the existence of runtime-specific global variables:

1. Checks for `Deno` global object (Deno)
2. Checks for `Bun` global object (Bun)
3. Checks for `process.versions.node` (Node.js)
4. Checks for `window` object (Browser)
5. Returns `Unknown` if none of the above are detected

## TypeScript Support

This utility is written in TypeScript and includes type definitions out of the box.

## License

MIT (or specify your chosen license)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.