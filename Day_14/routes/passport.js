const router = require("express").Router();

const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser,
} = require("../utils/validate");

//Users Registration Route

router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

router.post("/register-super-admin", async (req, res) => {
  await userRegister(req.body, "superAdmin", res);
});
