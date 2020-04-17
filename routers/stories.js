const { Router } = require("express");
const Story = require("../models").story;
const Paragraph = require("../models/").paragraph;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allStories = await Story.findAll({
      include: [User],
    });
    res.status(200).json(allStories);
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/:storyId", async (req, res) => {
  try {
    const oneStory = await Story.findOne({
      where: { id: req.params.storyId },
      include: [User],
    });
    res.status(200).json(oneStory);
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/:storyId/:paragraphNumber", async (req, res) => {
  try {
    const paragraph = await Paragraph.findOne({
      where: { storyId: req.params.storyId, paragraphNumber: req.params.paragraphNumber },
    });
    res.status(200).json(paragraph);
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
