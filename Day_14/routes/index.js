var express = require("express");
var registerInitialChecks = require("../middlewares/registerChecks");

var router = express.Router();
var register = require("../controllers/register");

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

module.exports = router;
