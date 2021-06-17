const express = require("express");
const router = express.Router();

// Activity model
const Activity = require("../../models/plantationDrive");

// @route GET api/activities
// @desc Get all activities
// @access Public
router.get("/", (req, res) => {
  Activity.find()
    .sort({ date: -1 }) // -1 represents ascending
    .then((activities) => res.json(activities))
    .catch((err) => res.status(500).json({ success: false, err }));
  //res.send("Hi from server");
});

// @route POST api/activities
// @desc Create an activity
// @access Public
router.post("/", (req, res) => {
  const newActivity = new Activity({
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    eventDate: req.body.eventDate,
    filename: req.body.filename,
    url: req.body.url,
  });
  newActivity
    .save()
    .then((activity) => {
      res.json(activity);
    })
    .catch((err) => res.status(500).json({ success: false, err }));
});

// @route PUT api/activities/:id
// @desc put all activities
// @access Public
router.put("/:id", async (req, res) => {
  try {
    const updatedActivity = await Activity.findOne({
      _id: req.params.id,
    });
    updatedActivity.type = req.body.type;
    updatedActivity.title = req.body.title;
    updatedActivity.description = req.body.description;
    updatedActivity.link = req.body.link;
    updatedActivity.eventDate = req.body.eventDate;
    updatedActivity.filename = req.body.filename;
    updatedActivity.url = req.body.url;
    updatedActivity
      .save()
      .then((activity) => {
        res.json(activity);
      })
      .catch((err) =>
        res.status(500).json({ success: false, from: "save", err })
      );
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, from: "id query", err });
  }
});

// @route DELETE api/activities/:id
// @desc Delete activity
// @access Public
router.delete("/:id", (req, res) => {
  Activity.findById(req.params.id)
    .then((activity) => {
      activity.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => res.status(404).json({ success: false, err: err }));
});

module.exports = router;
