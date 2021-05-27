const mongo = require("mongoose");
const Schema = mongo.Schema;

// create schema
const EcoProjectSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String },
  description: { type: String },
  link: { type: String },
  eventDate: { type: String },
  url: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = EcoProject = mongo.model("ecoProject", EcoProjectSchema);
