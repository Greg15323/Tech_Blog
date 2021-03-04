const { Comment } = require('../models');

 const commentData = [
   {
     comment_text: "Coolio",
     user_id: 1,
     post_id: 1
   },
   {
     comment_text: "Wow so interesting!",
     user_id: 2,
     post_id: 1
   },
   {
     comment_text: "I am a duck.",
     user_id: 3,
     post_id: 2
   }
 ]

 const seedComments = () => Comment.bulkCreate(commentData);

 module.exports = seedComments;