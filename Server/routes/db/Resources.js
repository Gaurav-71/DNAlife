const express = require("express");
const router = express.Router();

// Resource model
const Resource = require("../../models/resource");

// @route GET api/resources
// @desc Get all resources
// @access Public
router.get("/", (req, res) => {
  Resource.find()
    .sort({ date: -1 }) // -1 represents ascending
    .then((resources) => res.json(resources))
    .catch((err) => res.status(500).json({ success: false, err }));
  //res.send("Hi from server");
});

// @route POST api/resources
// @desc Create an resource
// @access Public
router.post("/", (req, res) => {
  const newResource = new Resource({
    type: req.body.type,
    title: req.body.title,
    link: req.body.link,
  });
  newResource
    .save()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => res.status(500).json({ success: false, err }));
});

// @route PUT api/resources/:id
// @desc put all resources
// @access Public
router.put("/:id", async (req, res) => {
  try {
    const updatedResource = await Resource.findOne({
      _id: req.params.id,
    });
    updatedResource.type = req.body.type;
    updatedResource.title = req.body.title;
    updatedResource.link = req.body.link;
    updatedResource
      .save()
      .then((resource) => {
        res.json(resource);
      })
      .catch((err) =>
        res.status(500).json({ success: false, from: "save", err })
      );
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, from: "id query", err });
  }
});

// @route DELETE api/resources/:id
// @desc Delete resource
// @access Public
router.delete("/:id", (req, res) => {
  Resource.findById(req.params.id)
    .then((resource) => {
      resource.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => res.status(404).json({ success: false, err: err }));
});

module.exports = router;
