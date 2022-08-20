import mongoose from "mongoose";
// Schema for animal shelter
const postSchema = new mongoose.Schema({
  name: String,
  race: String,
  age: Number,
  creator: String,
  owner: String,
  phoneNumber: String,
  localization: String,
  description: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
