import { describe, test, expect, vi} from "vitest";
import request from "supertest";
import app from "../index";
import prismaMock from "../__mocks__/db";

vi.mock("../db" );

describe("Testing Post Server", () => {
  test("It returns 1+2", async () => {

    prismaMock.add.create.mockResolvedValue({
        id : 1 ,
        num1  : 1,
        num2 : 2
    })

    vi.spyOn(prismaMock.add , "create")

    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });

    expect(prismaMock.add.create).toHaveBeenCalledWith({
        data : {
            num1 : 1 ,
            num2 : 2
        }
    })



    expect(res.body.answer).toBe(3);
  });
});
