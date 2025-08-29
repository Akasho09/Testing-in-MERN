import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/tests/**/*.tests.ts"],  // allow .tests.ts files
  },
});
