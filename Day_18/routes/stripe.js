var router = require("express").Router();
var path = require("path");
const { STRIPE_KEY } = require("../config");
const stripe = require("stripe")(STRIPE_KEY);

router.get("/payment", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: req.body.price * 100,
          name: "Shoppping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}?cancelled=true`,
    });
    res.redirect(303, session.url);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
