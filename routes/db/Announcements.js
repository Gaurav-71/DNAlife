const express = require("express");
const router = express.Router();

// Announcement model
const Announcement = require("../../models/announcement");

// @route GET api/announcements
// @desc Get all announcements
// @access Public
router.get("/", (req, res) => {
  Announcement.find()
    .sort({ date: -1 }) // -1 represents ascending
    .then((announcements) => res.json(announcements))
    .catch((err) => res.status(500).json({ success: false, err }));
  //res.send("Hi from server");
});

// @route POST api/announcements
// @desc Create an announcement
// @access Public
router.post("/", (req, res) => {
  const newAnnouncement = new Announcement({
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
  });
  newAnnouncement
    .save()
    .then((announcement) => {
      res.json(announcement);
    })
    .catch((err) => res.status(500).json({ success: false, err }));
});

// @route PUT api/announcements/:id
// @desc put all announcements
// @access Public
router.put("/:id", async (req, res) => {
  try {
    const updatedAnnouncement = await Announcement.findOne({
      _id: req.params.id,
    });
    updatedAnnouncement.type = req.body.type;
    updatedAnnouncement.title = req.body.title;
    updatedAnnouncement.description = req.body.description;
    updatedAnnouncement.link = req.body.link;
    updatedAnnouncement
      .save()
      .then((announcement) => {
        res.json(announcement);
      })
      .catch((err) =>
        res.status(500).json({ success: false, from: "save", err })
      );
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, from: "id query", err });
  }
});

// @route DELETE api/announcements/:id
// @desc Delete announcement
// @access Public
router.delete("/:id", (req, res) => {
  Announcement.findById(req.params.id)
    .then((announcement) => {
      announcement.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => res.status(404).json({ success: false, err: err }));
});

module.exports = router;
