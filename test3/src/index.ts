import express from "express"
import { z } from "zod";
import { prismaclient } from "./db/db";

export const app = express()
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b : z.number()
})


app.post("/sum" , async (req :any, res:any )=>{
    const data = req.body
    const { success } =  sumInput.safeParse(data)

    if(success){
        return res.json({
            answer : (Number(data["a"] )+ Number(data["b"]))
        })
    }

    prismaclient.table1.create({
        data: {
            a:1,
            b:2,
            sum:3
        }
    })

    return res.status(411).json({
        message : "Invalid Inputs"
    })
})


app.get("/sum" , async (req , res )=>{
    const data = req.headers
    const { success } =  sumInput.safeParse(data)

    if(success){
        return res.json({
            answer : (Number(data["a"] )+ Number(data["b"]))
        })
    }


    return res.status(411).json({
        err : "Invalid Inputs"
    })
})