const express = require("express");

const product = require("../models/product");
const router = express.Router();
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const count = parseInt(query.count) || 10;
    const page = parseInt(query.page) || 1;
    const after = parseInt(query.after);
    let sql = {};
    if (after) {
      sql = {
        where: {
          id: {
            [Op.gte]: after,
          },
        },
      };
    } else {
      sql = {
        offset: (page - 1) * count,
      };
    }
    const products = await product.findAll({
      ...sql,
      attributes: ["id", "title", "price", "description", "image"],
      limit: count,
    });
    res.status(200).json({
      count: products.length,
      products: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
