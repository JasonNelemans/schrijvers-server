const { Router } = require("express");
const Story = require("../models").story;
const Paragraph = require('../models/').paragraph
const User = require('../models').user

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allStories = await Story.findAll({
      include: [User]
    })
    res.status(200).json(allStories);
  }
  catch (e) {
    console.log('error: ', e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneStory = await Story.findOne({
      where: { id: req.params.id },
      include: [Paragraph, User]
    })
    res.status(200).json(oneStory);
  }
  catch (e) {
    console.log('error: ', e)
  }
})

// router.get('/:id', async (req, res) => {
//   const artwork = await Artwork.findOne({
//     where: { id: req.params.id},
//     include: [Bid]
//   });
//   res.status(200).json(artwork)
// });

module.exports = router;