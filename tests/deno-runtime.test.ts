import { assertEquals, test } from "@inspatial/test";
import { getRuntime, Runtime } from "../mod.ts";

test("Runtime", () => {
  assertEquals(getRuntime(), Runtime.Deno);
});
