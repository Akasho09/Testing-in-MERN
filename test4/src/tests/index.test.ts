import {  test , describe , expect }  from "vitest"
import app  from '../bin'
import request from "supertest"

describe("Testing Post Server" , async  ()=>{
    test("It returns 1+2 " , async ()=>{
        const res = await request(app).post("/sum").send({
            a:1 , b:2 
        })
        expect(res.body.answer).toBe(3)
        expect(res.statusCode).toBe(200)
    })
})