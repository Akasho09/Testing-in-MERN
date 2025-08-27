
import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.status(200).json({
        answer
    })
});


app.get("/sum" , (req,res)=>{
    return res.json({
        answer : Number(req.headers["a"] || 1) + Number(req.headers["b"] || 1)
    })
})

