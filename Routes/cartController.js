const CartItem = require("../Models/CartItem");
const User = require("../Models/Users");

exports.addItemToCart = async (req, res) => {
  const { productId, price, quantity, userId } = req.body;

  try {
    const cartItem = new CartItem({
      productId,
      price,
      quantity,
      userId,
    });

    await cartItem.save();

    await Users.findByIdAndUpdate(userId, {
      $push: { cart: cartItem._id },
    });

    res.json({ msg: "Item added to cart" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getCartItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const cartItems = await CartItem.find({ userId });
    res.json(cartItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};
