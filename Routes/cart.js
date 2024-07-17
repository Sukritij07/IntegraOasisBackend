const express = require("express");
const { addItemToCart, getCartItems } = require("./cartController");
const router = express.Router();

router.post("/add", addItemToCart);
router.get("/:userId", getCartItems);

module.exports = router;
