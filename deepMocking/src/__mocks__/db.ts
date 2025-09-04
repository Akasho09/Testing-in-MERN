// src/db.mock.ts
import { PrismaClient } from "@prisma/client";
import { mockDeep } from "vitest-mock-extended";

export const prismaMock = mockDeep<PrismaClient>();
export default prismaMock;
