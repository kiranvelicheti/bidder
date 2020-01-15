var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("item", ItemSchema);
