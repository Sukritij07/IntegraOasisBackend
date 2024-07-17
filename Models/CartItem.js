const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('CartItem', CartSchema);
