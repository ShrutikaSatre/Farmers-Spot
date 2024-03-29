const router = require("express").Router();
const Product = require("../../models/farmer/addproduct");

router.post("/", async (req, res)=>{
    try{
        const {name, price, rating, description, image} = req.body;
  
        //save new Product account to the database
        const newProduct = new Product({
            name, price, rating, description, image
        });
        
  
        await newProduct.save();
  
    } catch (err) {
        console.error(err);
        res.status(500).send(); 
    }
  });

  router.get("/", async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  module.exports = router;