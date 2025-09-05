

## Mocking using vitest
Mocking is useful when you want to isolate what you test — for example, not hitting the real database or API but instead replacing it with fake data.
-  👉 Mocking is mainly used in unit testing, but it can also appear in certain kinds of integration testing depending on your goal.

- on top of file and runs first b4 all imports 


### Deep mocking

- npm i -D vitest-mock-extended 

- Create __mocks__/db.ts
```c
import { PrismaClient } from '@prisma/client'
import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>()
```


## 🔹 beforeEach

Runs before every test (it) in the current describe block.
Good for setting up a fresh state for each test.
Ensures tests are isolated and don’t affect each other.
```ts
import { describe, it, beforeEach, expect } from "vitest";

let arr: number[];

describe("beforeEach example", () => {
  beforeEach(() => {
    arr = []; // reset before every test
  });

  it("starts empty", () => {
    expect(arr.length).toBe(0);
  });

  it("can push an item", () => {
    arr.push(1);
    expect(arr.length).toBe(1);
  });
});
```

## beforeAll

Runs once before all tests in the current describe block.
Good for expensive setup you only want to do once (e.g., connecting to a database, starting a server, seeding test data).
Shared state persists across all tests unless you clean it up manually.
```ts
import { describe, it, beforeAll, expect } from "vitest";

let db: string[];

describe("beforeAll example", () => {
  beforeAll(() => {
    db = ["Alice"]; // setup once
  });

  it("has Alice initially", () => {
    expect(db).toContain("Alice");
  });

  it("can add Bob", () => {
    db.push("Bob");
    expect(db).toContain("Bob");
  });
});
```

