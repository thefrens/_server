const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Post = mongoose.model('User', userSchema);

module.exports = Post;
