const router = require("express").Router();

const passport = require("../middlewares/passport");
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser,
} = require("../utils/Auth");

router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

router.post(
  "/register-admin",
  async (req, res) => await userRegister(req.body, "admin", res)
);

router.post("/register-super-admin", async (req, res) => {
  await userRegister(req.body, "superadmin", res);
});

router.get("/userprotected", userAuth, checkRole("user"), (req, res) => {
  res.status(200).send("hello user");
});

router.get("/adminprotected", userAuth, checkRole("admin"), (req, res) => {
  res.status(200).send("hello admin");
});

router.get(
  "/superadminprotected",
  userAuth,
  checkRole("superadmin"),
  (req, res) => {
    res.status(200).send("hello superadmin");
  }
);

router.post(
  "/loginUser",
  async (req, res) => await userLogin(req.body, "user", res)
);
router.post(
  "/loginAdmin",
  async (req, res) => await userLogin(req.body, "admin", res)
);
router.post(
  "/superAdmin",
  async (req, res) => await userLogin(req.body, "superAdmin", res)
);
module.exports = passportRouter = router;
