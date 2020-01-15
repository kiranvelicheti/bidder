var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./db");
const ItemRouter = require("./ItemRouter");
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.listen(8080, () => {
  console.log("server is running on port 8080");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", ItemRouter);
