const mongo = require("mongoose");
const Schema = mongo.Schema;

// create schema
const ItemSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = Item = mongo.model("item", ItemSchema);
