const { emailValidate, passwordValidate } = require("../utils/validation");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * email validation
 * password validation
 * password confirmation
 */
const registerInitialChecks = (req, res, next) => {
  console.log(req.body);
  const { email, password, confirmPassword } = req.body;
  if (!emailValidate(email)) res.status(400).send({ error: "Invalid email" });
  if (!passwordValidate(password))
    res.status(400).send({ error: "Invalid password" });
  if (password !== confirmPassword)
    res.status(400).send({ error: "Passwords do not match" });
  if (
    typeof email === "string" &&
    email.length > 0 &&
    emailValidate(email) &&
    typeof password === "string" &&
    password.length > 0 &&
    passwordValidate(password) &&
    password === confirmPassword
  ) {
    next();
  } else res.status(401).send("Registration checks failed!");
};

module.exports = registerInitialChecks;
