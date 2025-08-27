import  request  from "supertest";
import { describe , test , expect } from "@jest/globals"
import {app} from '../index'

describe("Testing Routes " , ()=>{
    test("POST /sum route test " , async ()=>{
    
    const res = await request(app).post("/sum").send({
            a : 2 , 
            b : 3 
        })

    expect(res.status).toBe(200)
    expect(res.body.answer).toBe(5)
    });

    test("GET /sum route test " , async ()=>{
    
    const res = await request(app)
        .get("/sum")
        .set({
            a: "2" , b: "3"
        }).send()

    expect(res.status).toBe(200)
    expect(res.body.answer).toBe(5)
    });
})

