const mongoose = require ('mongoose');
const CommentsSchema = new mongoose.Schema({
  author: String,
  text: String,
  date: { type: Date, default:Date.now}
})
const PostSchema = new mongoose.Schema({
  date: { type: Date, default:Date.now},
  author: String,
  topic: String,
  title: String,
  cotent: String,
  comments: [CommentsSchema]
});
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
