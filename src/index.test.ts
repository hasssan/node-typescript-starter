import { expect, test } from "vitest";

import { redundantIsoString } from "./index.js";

test("greet", () => {
  expect(redundantIsoString(new Date("2022-05-26"))).toBe(
    "2022-05-26T00:00:00.000Z",
  );
});
