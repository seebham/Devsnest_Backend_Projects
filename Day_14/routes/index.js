var express = require("express");
var registerInitialChecks = require("../middlewares/registerChecks");

var router = express.Router();
var { register, registerSuperAdmin } = require("../controllers/register");
var check = require("../middlewares/checkSuperAdmin");

/* GET home page. */
router.get("/", function (req, res, next) {
  const ses = req.session;
  ses.username = "shubham";
  res.render("index", { title: "Express" });
});

/* Redis test route */
router.get("/testRedis", (req, res) => {
  console.log("Redis Value: ", req.session.username);
  res.render("index", { title: "Express" });
});

router.post("/register", registerInitialChecks, register);
router.post("/register-super-admin", registerInitialChecks, registerSuperAdmin);
router.get("/super", check);

module.exports = router;
