var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var { register, registerSuperAdmin } = require("../controllers/register");
const check = require("../middlewares/checkSuperAdmin");

/* GET home page. */
router.get("/", function (req, res, next) {
  const session = req.session;
  session.username = "Shubham";
  res.render("index", { title: "Express" });
});
router.get("/hello", function (req, res, next) {
  console.log("hello", req.session.username);
});
/**
 * @requires {email, firstName,lastName,password,confirmPassword} - req.body
 * @description
 * Security, performance and edge cases
 * level - 1
 * email validate
 * password validate
 * password == confirm
 * level 2
 * JS/SQL injection prevention if happening
 * level -3
 * check if email already exists
 * password hash
 * email lowercase
 * save
 */

router.post("/register", registerInitialCheck, register);
router.post("/register-super-admin", registerInitialCheck, registerSuperAdmin);
router.get("/adminOnly", check, (req, res) => res.send("HELLO ADMIn"));
module.exports = router;
