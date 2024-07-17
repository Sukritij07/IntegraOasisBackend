const mongoose= require('mongoose')
const { schema } = require('./Users')

const SmallBusiness = new mongoose.Schema({
   BusinessName:{
      type: String,
      required: true,
      unique: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', 
      required: true,
    },
    product_title :{
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    reviews:{
      type: String,
      required: false,
    }


})