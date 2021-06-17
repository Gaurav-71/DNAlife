const express = require("express");
const router = express.Router();

// Photo model
const Photo = require("../../models/photos");

// @route GET api/photos
// @desc Get all photos
// @access Public
router.get("/", (req, res) => {
  Photo.find()
    .sort({ date: -1 }) // -1 represents ascending
    .then((photos) => res.json(photos))
    .catch((err) => res.status(500).json({ success: false, err }));
  //res.send("Hi from server");
});

// @route POST api/photos
// @desc Create an photo
// @access Public
router.post("/", (req, res) => {
  const newPhoto = new Photo({
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
  });
  newPhoto
    .save()
    .then((photo) => {
      res.json(photo);
    })
    .catch((err) => res.status(500).json({ success: false, err }));
});

// @route PUT api/photos/:id
// @desc put all photos
// @access Public
router.put("/:id", async (req, res) => {
  try {
    const updatedPhoto = await Photo.findOne({
      _id: req.params.id,
    });
    updatedPhoto.type = req.body.type;
    updatedPhoto.title = req.body.title;
    updatedPhoto.description = req.body.description;
    updatedPhoto.link = req.body.link;
    updatedPhoto
      .save()
      .then((photo) => {
        res.json(photo);
      })
      .catch((err) =>
        res.status(500).json({ success: false, from: "save", err })
      );
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, from: "id query", err });
  }
});

// @route DELETE api/photos/:id
// @desc Delete photo
// @access Public
router.delete("/:id", (req, res) => {
  Photo.findById(req.params.id)
    .then((photo) => {
      photo.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => res.status(404).json({ success: false, err: err }));
});

module.exports = router;
