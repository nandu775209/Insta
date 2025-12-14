import User from "../models/User.js";

const followUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  user.followers.push(req.user._id);
  req.user.following.push(user._id);

  await user.save();
  await req.user.save();

  res.json({ message: "Followed" });
};

const unfollowUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  user.followers.pull(req.user._id);
  req.user.following.pull(user._id);

  await user.save();
  await req.user.save();

  res.json({ message: "Unfollowed" });
};

export { followUser, unfollowUser };
