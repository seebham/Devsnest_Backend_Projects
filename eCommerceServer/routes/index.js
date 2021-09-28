var express = require("express");
var registerInitialChecks = require("../middlewares/registerChecks");

var router = express.Router();
var register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/register", registerInitialChecks, register);

module.exports = router;
