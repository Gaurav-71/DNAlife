const express = require("express");
const router = express.Router();

// News model
const News = require("../../models/news");

// @route GET api/newss
// @desc Get all newss
// @access Public
router.get("/", (req, res) => {
  News.find()
    .sort({ date: -1 }) // -1 represents ascending
    .then((newss) => res.json(newss))
    .catch((err) => res.status(500).json({ success: false, err }));
  //res.send("Hi from server");
});

// @route POST api/newss
// @desc Create an news
// @access Public
router.post("/", (req, res) => {
  const newNews = new News({
    type: req.body.type,
    title: req.body.title,
    filename: req.body.filename,
    url: req.body.url,
    link: req.body.link,
  });
  newNews
    .save()
    .then((news) => {
      res.json(news);
    })
    .catch((err) => res.status(500).json({ success: false, err }));
});

// @route PUT api/newss/:id
// @desc put all newss
// @access Public
router.put("/:id", async (req, res) => {
  try {
    const updatedNews = await News.findOne({
      _id: req.params.id,
    });
    updatedNews.type = req.body.type;
    updatedNews.title = req.body.title;
    updatedNews.url = req.body.url;
    updatedNews.filename = req.body.filename;
    updatedNews.link = req.body.link;
    updatedNews
      .save()
      .then((news) => {
        res.json(news);
      })
      .catch((err) =>
        res.status(500).json({ success: false, from: "save", err })
      );
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, from: "id query", err });
  }
});

// @route DELETE api/newss/:id
// @desc Delete news
// @access Public
router.delete("/:id", (req, res) => {
  News.findById(req.params.id)
    .then((news) => {
      news.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => res.status(404).json({ success: false, err: err }));
});

module.exports = router;
