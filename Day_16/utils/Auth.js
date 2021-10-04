const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { emailValidate } = require("./validation");
var jwt = require("jsonwebtoken");

const { SECRET } = require("../config");
exports.userAuth = passport.authenticate("jwt", { session: false });

exports.checkRole = (roles) => (req, res, next) => {
  roles === req.user.rolePassport
    ? next()
    : res.status(401).json("Unauthorized");
};

exports.validateEmail = async (email) => {
  let user = await User.findOne({
    where: {
      email,
    },
  });
  return user ? true : false;
};
exports.userRegister = async (userData, rolePassport, res) => {
  console.log(userData);
  try {
    let emailNotRegistered = await this.validateEmail(userData.email);
    if (emailNotRegistered) {
      return res.status(400).json({
        message: `Email is already registerd`,
        success: false,
      });
    }
    const password = await bcrypt.hash(userData.password, 12);
    const newUser = new User({
      ...userData,
      password,
      rolePassport,
    });
    console.log(newUser);
    await newUser.save();
    return res.status(201).json({
      message: "registed",
      success: true,
      user: newUser,
    });
  } catch (err) {}
};
exports.userLogin = async (userData, rolePassport, res) => {
  let { email, password } = userData;
  const isValid = await emailValidate(email);
  const user = await User.findOne({
    where: {
      email,
    },
  });
  console.log(email, password);
  if (!isValid) {
    return res.status(404).json({
      message: "user not found",
      success: false,
    });
  }
  if (user.rolePassport !== rolePassport) {
    return res.status(403).json({
      message: "unauthourized",
      success: false,
    });
  }
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    let token = jwt.sign(
      {
        user_id: user.id,
        role: user.role,
        username: user.username,
        email: user.email,
      },
      SECRET,
      { expiresIn: "7days" }
    );
    let result = {
      username: user.username,
      rolePassport: user.role,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: 168,
    };
    return res.status(200).json({
      ...result,
      success: true,
    });
  } else {
    return res.status(403).json({
      message: "Incorrect password",
      success: false,
    });
  }
};
