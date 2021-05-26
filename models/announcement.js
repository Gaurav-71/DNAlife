const mongo = require("mongoose");
const Schema = mongo.Schema;

// create schema
const AnnouncementSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String },
  description: { type: String },
  link: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = Announcement = mongo.model("announcement", AnnouncementSchema);
