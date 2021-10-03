const check = (req, res, next) => {
  if (req.session.User.role === "superAdmin") {
    res.status(200).send("Success");
  } else {
    res.status(401).send("Needs to be a super admin");
  }
};

module.exports = check;
