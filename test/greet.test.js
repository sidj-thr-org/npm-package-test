import assert from "node:assert/strict";
import { test } from "node:test";
import { greet } from "../src/index.js";

test("greet uses default name", () => {
  assert.equal(greet(), "Hello, world!");
});

test("greet uses given name", () => {
  assert.equal(greet("npm"), "Hello, npm!");
});
