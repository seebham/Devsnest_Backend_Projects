const User = require("../models/mongo");
const bcrypt = require("bcrypt");
const saltRounds = 10;
/**
 *
 * @param {*} req
 * @param {*} res
 *
 * @description
 *  Check if the email is already registered.
 *  If not, create a new user.
 *  If yes, return an error.
 *
 */

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const alreadyExists = await User.findOne({ where: { email } }).exec();
    if (alreadyExists)
      res.status(401).json({ error: "Email already registered" });
    else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
        fullName: "Dummy",
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = register;
