import mongoose from "mongoose";
// Schema for animal shelter
const postSchema = new mongoose.Schema({
  name: String,
  race: String,
  age: Number,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
