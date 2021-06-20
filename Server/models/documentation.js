const mongo = require("mongoose");
const Schema = mongo.Schema;

// create schema
const DocumentationSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String },
  filename: { type: String },
  url: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = Documentation = mongo.model(
  "documentation",
  DocumentationSchema
);
