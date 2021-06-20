const express = require("express");
const router = express.Router();

// Documentation model
const Documentation = require("../../models/documentation");

// @route GET api/documentations
// @desc Get all documentations
// @access Public
router.get("/", (req, res) => {
  Documentation.find()
    .sort({ date: -1 }) // -1 represents ascending
    .then((documentations) => res.json(documentations))
    .catch((err) => res.status(500).json({ success: false, err }));
  //res.send("Hi from server");
});

// @route POST api/documentations
// @desc Create an documentation
// @access Public
router.post("/", (req, res) => {
  const newDocumentation = new Documentation({
    type: req.body.type,
    title: req.body.title,
    filename: req.body.filename,
    url: req.body.url,
  });
  newDocumentation
    .save()
    .then((documentation) => {
      res.json(documentation);
    })
    .catch((err) => res.status(500).json({ success: false, err }));
});

// @route PUT api/documentations/:id
// @desc put all documentations
// @access Public
router.put("/:id", async (req, res) => {
  try {
    const updatedDocumentation = await Documentation.findOne({
      _id: req.params.id,
    });
    updatedDocumentation.type = req.body.type;
    updatedDocumentation.title = req.body.title;
    updatedDocumentation.url = req.body.url;
    updatedDocumentation.filename = req.body.filename;
    updatedDocumentation
      .save()
      .then((documentation) => {
        res.json(documentation);
      })
      .catch((err) =>
        res.status(500).json({ success: false, from: "save", err })
      );
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, from: "id query", err });
  }
});

// @route DELETE api/documentations/:id
// @desc Delete documentation
// @access Public
router.delete("/:id", (req, res) => {
  Documentation.findById(req.params.id)
    .then((documentation) => {
      documentation.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => res.status(404).json({ success: false, err: err }));
});

module.exports = router;
