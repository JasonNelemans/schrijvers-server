const { Router } = require("express");
const Story = require("../models").story;
const Paragraph = require('../models/').paragraph

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allStories = await Story.findAll({
      include: [Paragraph]
    })
    res.status(200).json(allStories);
  }
  catch (e) {
    console.log('error: ', e);
  }
});

module.exports = router;