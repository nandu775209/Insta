import Comment from "../models/Comment.js";

const addComment = async (req, res) => {
  const comment = new Comment({
    post: req.params.id,
    user: req.user._id,
    text: req.body.text,
  });

  await comment.save();
  res.json(comment);
};

export { addComment };
