import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.post("/", (req, res) => {
  req.on("data", (chunk) => {
    console.log(JSON.parse(chunk));
    console.log(req.body);
    res.json({ message: "Hello World from post" });
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
