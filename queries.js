const { story: Story, user: User, rating: Rating } = require('./models');

Story.findAll({
  include: [{model: Rating }]
}).then(stories => 
  stories.map(story => console.log(story.get({ plain: true})))
);
