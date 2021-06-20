const mongo = require("mongoose");
const Schema = mongo.Schema;

// create schema
const ResourceSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String },
  link: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = Resource = mongo.model("resource", ResourceSchema);
