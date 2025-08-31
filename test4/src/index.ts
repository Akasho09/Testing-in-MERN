import express , { Request, Response } from 'express';
import app from './bin';  

app.use(express.json())

app.post("/sum",  (req: Request, res: Response) => {
  console.log("sum")

  const data =  req.body;
  const sum = data.a + data.b 
  console.log(sum)

  res.json({
    answer: sum
  });
  
});

