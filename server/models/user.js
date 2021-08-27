const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    index: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
  },
});

const hash = (user, salt, next) => {
  bcrypt.hash(user.password, salt, (error, newHash) => {
    if (error) {
      return next(error);
    }
    user.password = newHash;
    return next();
  });
};

const genSalt = (user, SALT_FACTOR, next) => {
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) {
      return next(err);
    }
    return hash(user, salt, next);
  });
};

UserSchema.pre("save", function (next)  {
  const user = this;
  const SALT_FACTOR = 5;

  if (!user.isModified("password")) {
    return next();
  }
  return genSalt(user, SALT_FACTOR, next);
});


module.exports = mongoose.model("User", UserSchema);
