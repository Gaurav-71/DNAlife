const mongo = require("mongoose");
const Schema = mongo.Schema;

// create schema
const TrainingSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String },
  description: { type: String },
  link: { type: String },
  eventDate: { type: String },
  filename: { type: String },
  url: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = Training = mongo.model("training", TrainingSchema);
