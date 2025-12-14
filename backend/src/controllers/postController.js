import Post from "../models/Post.js";

const createPost = async (req, res) => {
  const post = new Post({
    user: req.user._id,
    image: req.body.image,
    caption: req.body.caption,
  });
  await post.save();
  res.json(post);
};

const likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.likes.includes(req.user._id)) {
    post.likes.pull(req.user._id);
  } else {
    post.likes.push(req.user._id);
  }

  await post.save();
  res.json(post);
};

const getFeed = async (req, res) => {
  const posts = await Post.find({
    user: { $in: req.user.following },
  }).populate("user", "username");

  res.json(posts);
};

export { createPost, likePost, getFeed };
