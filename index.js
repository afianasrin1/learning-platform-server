const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;
app.use(cors());
const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Courses Api Running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("learning programming server on port", port);
});
