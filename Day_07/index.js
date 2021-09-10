const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Received GET request with query: ", req.query);
  res.status(200).send("Hello World, what do you want?");
});

app.post("/", (req, res) => {
  console.log("Received POST request with query: ", req.query);
  res.status(202).send("Hello World, why are you giving?");
});

app.put("/", (req, res) => {
  console.log("Received PUT request with query: ", req.query);
  res.send("Hello World, why are you putting?");
});

app.delete("/", (req, res) => {
  console.log("Received DELETE request with query: ", req.query);
  res.send("Hello World, why are you deleting?");
});

app.listen(8000, () => console.log("Listening on port 8000"));
