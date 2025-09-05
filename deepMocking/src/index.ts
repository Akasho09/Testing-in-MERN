import express, { Request, Response } from "express";
import prisma from "./db";

const app = express();
app.use(express.json());

app.post("/sum", async (req: Request, res: Response) => {
  const { a, b } = req.body;
  const sum = b + a;

  const user  = await prisma.add.create({
    data: {
      num1 : a,
      num2 : b,
    },
  });

  res.json({
    answer: Number(sum),
    user : user.id
  });
});

export default app;
