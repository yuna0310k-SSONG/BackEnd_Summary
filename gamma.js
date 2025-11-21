const cors = require("cors");
const express = require("express");
const app = express();

//req.body를 json으로 해석함
app.use(express.json());
app.use(cors());

const pizza = [
  {
    id: 0,
    name: "포테이토 피자",
    ingredients: ["감자", "치즈", "빵", "토마토소스"],
    kcal: 800,
  },
  {
    id: 1,
    name: "콤비네이션 피자",
    ingredients: ["파프리카", "치즈", "빵", "토마토소스", "올리브", "페퍼로니"],
    kcal: 900,
  },
  {
    id: 2,
    name: "페퍼로니 피자",
    ingredients: ["페퍼로니", "치즈", "빵", "토마토소스", "올리브"],
    kcal: 600,
  },
];
app.get("/pizza", (req, res) => {
  res.json(pizza);
});

//Request(신규추가)
app.post("/pizza", (req, res) => {
  const { name, ingredients, kcal } = req.body;
  pizza.push({ id: pizza.length, name, ingredients: ingredients, kcal });
  res.json({ msg: `${name}피자가 추가되었습니다!` });
});

//Delete(삭제)
app.delete("/pizza/:id", (req, res) => {
  const { id } = req.params;
  const targetIndex = pizza.findIndex((v) => v.id == id);
  pizza.splice(targetIndex, 1);
  res.json({ msg: `${id}번 피자가 삭제되었습니다.` });
});

//Put(수정)
app.put("/pizza/:id", (req, res) => {
  const { id } = req.params;
  const targetIndex = pizza.findIndex((v) => v.id == id);

  if (targetIndex === -1) {
    return res.json({ msg: "해당 피자가 존재하지 않습니다." });
  }
  const { name, ingredients, kcal } = req.body;
  pizza[targetIndex].name = name || pizza[targetIndex].name;
  pizza[targetIndex].ingredients =
    ingredients || pizza[targetIndex].ingredients;
  pizza[targetIndex].kcal = kcal || pizza[targetIndex].kcal;

  //   // req.body에 들어온 값만 기존 피자에 덮어쓰기
  //   pizza[targetIndex] = { ...pizza[targetIndex], ...req.body };

  res.json({
    msg: `${id}번 피자가 수정되었습니다.`,
  });
});

app.listen(3000, () => {
  console.log("서버 시즌 3 시작");
});
