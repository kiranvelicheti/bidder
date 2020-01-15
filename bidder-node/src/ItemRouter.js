const ItemSchema = require("./schemas/ItemSchema");

var express = require("express");
var router = express.Router();

router.get("/items", async (req, res) => {
  await ItemSchema.find({})
    .then(result => res.send(result))
    .catch(console.error());
});

module.exports = router;
