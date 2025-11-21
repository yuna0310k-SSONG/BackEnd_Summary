const cors = require("cors"); //허용된 사람만 들어오는 역할
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors()); //cors() -> 괄호 안에 허용된 도메인만 허용

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/pizzas", async (req, res) => {
  const pizzas = await prisma.pizza.findMany();
  res.json(pizzas);
});

app.get("/ingredients", async (req, res) => {
  const ingredients = await prisma.ingredients.findMany();
  res.json(ingredients);
});

app.listen(3000, () => {
  console.log("서버 시즌 4(Δ) 시작");
});
