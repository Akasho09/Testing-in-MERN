import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.ts"], // 👈 change this if your test files live elsewhere
  },
});
