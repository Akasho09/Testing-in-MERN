// src/tests/index.test.ts
import { describe, test, expect, vi, beforeEach } from "vitest";
import request from "supertest";
import app from "../index";


vi.mock("../db", () => {
  return {
    default: {
      t1: { // table
        create: vi.fn(), // mock fns 
        update : vi.fn()
      },
    },
  };
});

describe("Testing Post Server", () => {
  test("It returns 1+2", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });
});
