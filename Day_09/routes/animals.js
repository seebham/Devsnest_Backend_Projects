var express = require("express");
var router = express.Router();
var path = require("path");

// helper function
const sendImage = (res, file) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, `../public/images/${file}.gif`));
};

/* GET users listing. */
router.get("/:animalName", function (req, res, next) {
  switch (req.params.animalName) {
    case "cat":
      sendImage(res, "cat");
      break;
    case "dog":
      sendImage(res, "dog");
      break;
    case "bird":
      sendImage(res, "bird");
      break;
    case "elephant":
      sendImage(res, "elephant");
      break;
    case "giraffe":
      sendImage(res, "giraffe");
      break;
    default:
      let heading = "<h1>Wrong Animal Name!</h1>";
      let body = `<p>The animal name you entered is not valid. Please try again.</p>`;
      let availableHeading = "<h4>Available animals are : -</h4>";
      let listOfAvailableAnimalnames =
        "<ul><li>Cat</li><li>Dog</li><li>Bird</li><li>Elephant</li><li>Giraffe</li></ul>";
      res
        .status(400)
        .send(heading + body + availableHeading + listOfAvailableAnimalnames);
      break;
  }
});

module.exports = router;
