

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


