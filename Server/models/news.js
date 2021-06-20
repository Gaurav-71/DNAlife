const mongo = require("mongoose");
const Schema = mongo.Schema;

// create schema
const NewsSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String },
  filename: { type: String },
  url: { type: String },
  link: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = News = mongo.model("news", NewsSchema);
