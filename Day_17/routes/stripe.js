var router = require("express").Router();
var path = require("path");
var fs = require("fs");
var { STRIPE_KEY } = require("../config");
const stripe = require("stripe")(STRIPE_KEY);

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async function (req, res) {
  try {
    const session = await stripe.checkout.sessions.create({
      lines_items: [
        {
          amount: req.body.price * 100,
          name: "Shopping",
          quantity: 1,
          currency: "usd",
        },
      ],
      payment_method_types: ["card"],
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}?cancelled=true`,
    });
    res.redirect(303, session.url);
  } catch (err) {
    res.status(500).send({ err });
  }
});

module.exports = router;
