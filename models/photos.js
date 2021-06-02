const mongo = require("mongoose");
const Schema = mongo.Schema;

// create schema
const PhotoSchema = new Schema({
  title: { type: String },
  description: { type: String },
  link: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = Photo = mongo.model("photo", PhotoSchema);
