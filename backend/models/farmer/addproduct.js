const mongoose = require('mongoose');

const addProductSchema = new mongoose.Schema({
    name:{
        type: String
    }, 
    price:{
        type: Number
    },
    rating: {
        type: Number
    }, 
    description: {
        type: String
    }, 
    image: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const addProduct = new mongoose.model("addProduct", addProductSchema);

module.exports = addProduct;