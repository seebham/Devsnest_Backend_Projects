const router = require("express").Router();

const { Op } = require("sequelize");
const sequelize = require("../database");
var Artist = require("../models/artist");
router.get("/trgm", (req, res) => {
  Artist.findAll({
    attributes: {
      include: [
        [
          sequelize.fn("similarity", sequelize.col("Name"), req.query.q),
          "score",
        ],
      ],
    },
    where: [
      sequelize.where(
        sequelize.fn("similarity", sequelize.col("Name"), req.query.q),
        {
          [Op.gt]: 0.2,
        }
      ),
      {},
    ],
  })
    .then((art) => res.status(200).send(art))
    .catch((err) => console.log(err));
});
router.get("/", async (req, res) => {
  try {
    const products = await Artist.findAll({
      where: {
        Name: {
          [Op.like]: "%" + req.query.q + "%",
        },
      },
    });
    res.status(200).send({
      items: products,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: err.message,
    });
  }
});
router.get("/sound", async (req, res) => {
  try {
    const artist = await sequelize.query(
      `SELECT * FROM "Artist" WHERE "Nationality" IN ('American','British') AND SOUNDEX("Name") = SOUNDEX('${req.query.q}');`
    );
    res.status(200).send(artist);
  } catch (err) {
    console.log(err);
    res.status(500).send("INTERNAL ERROR HALp");
  }
});
router.get("/metaphone", async (req, res) => {
  try {
    const artist = await sequelize.query(
      `SELECT * FROM "Artist" WHERE "Nationality" ='American' ORDER BY SIMILARITY(METAPHONE("Name",10), METAPHONE('${req.query.q}',10)) DESC LIMIT 5;`
    );
    res.status(200).send(artist);
  } catch (e) {
    console.log(e);
    res.status(500).send("INTERNAL ERROR HALp");
  }
});
router.get("/distance", async (req, res) => {
  try {
    const artist = await sequelize.query(`
    SELECT *, LEVENSHTEIN("Name",'${req.query.q}') FROM "Artist" ORDER BY LEVENSHTEIN("Name",'${req.query.q}') ASC LIMIT 5;`);
    res.status(200).send(artist);
  } catch (err) {
    console.log(err);
    res.status(500).send("INTERNAL ERROR HALP");
  }
});

module.exports = router;
