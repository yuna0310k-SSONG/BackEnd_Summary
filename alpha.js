const express = require("express");
const app = express();

// 웹 브라우저(주인님)
// Req <-> Res [http 방식]
// 웹 서버(따까리)는 CRUD"읽기,수정하기,생성하기,삭제하기" -> 생성(post), 조회 (GET), 수정(PUT), 삭제(Delete)
app.get("/caffein", (req, res) => {
  res.json(["아메리카노", "라떼", "카페모카"]);
});
app.get("/bread", (req, res) => {
  res.json(["팥빵", "소보로빵", "초코소라빵"]);
});

app.listen(3000, () => {
  console.log("서버 시작 http://localhost:3000/");
});
