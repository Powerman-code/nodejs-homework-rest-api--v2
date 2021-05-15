const User = require("./schemas/userSchema");

const findByEmail = async (email) => {
  return await User.findOne({ email });
};

const findById = async (id) => {
  return await User.findOne({ _id: id });
};

const create = async ({ email, password, subscription }) => {
  const user = new User({ email, password, subscription });
  return await user.save();
};

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token });
};

const updateSubscription = async (id, subscription) => {
  console.log("🚀 ~ file: users.js ~ line 21 ~ updateSubscription ~ id", id);
  // return await User.updateOne({ _id: id }, { subscription });
  return await User.findByIdAndUpdate(
    { _id: id },
    { ...subscription },
    { new: true }
  );
};

const updateAvatar = async (id, avatar, idCloudAvatar = null) => {
  return await User.updateOne({ _id: id }, { avatar, idCloudAvatar });
};

module.exports = {
  findByEmail,
  create,
  findById,
  updateToken,
  updateSubscription,
  updateAvatar,
};