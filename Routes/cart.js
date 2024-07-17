const express = require("express");
const router = express.Router();
const cartController = require("./cartController");

router.post("/cart/add", cartController.addItemToCart);
router.post("/cart/remove", cartController.removeItemFromCart);
router.get("/cart/:userId", cartController.getCart);

module.exports = router;
