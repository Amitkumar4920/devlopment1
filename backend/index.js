const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe=require('stripe')

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
//mongodb connection
// console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//UserModel
const userModel = mongoose.model("amitEcommerce", userSchema);

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//sign up APi
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    // console.log(result);
    console.log(err);
    if (result) {
      res.send({ message: "Email is already registered", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Successful sign up", alert: true });
    }
  });
});
//Login API
app.post("/login", (req, res) => {
  // console.log(req.body);
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      // console.log(dataSend);
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "This email is not available,Please sign up",
        alert: false,
      });
    }
  });
});

//product-section

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", schemaProduct);



//save product in data
//api
app.post("/uploadProduct",async(req,res)=>{
    // console.log(req.body)
    const data=await productModel(req.body)
    const datasave=await data.save()
    res.send({message : "upload successfully"})
})


//
app.get("/product",async(req,res)=>{
    const data=await productModel.find({})
    res.send(JSON.stringify(data))
})


/*********payement getway */

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

app.post("/checkout_payment",async(req,res)=>{
  // console.log(req.body)

  try{
  const params={
    submit_type : 'pay',
    mode : "payment",
    payment_method_types : ['card'],
    billing_address_collection : "auto",
    shipping_options : [{shipping_rate : "shr_1Nae5FSI5nD9AXpjkIpuzFAO"}],

    line_items : req.body.map((item)=>{
      return{
        price_data : {
          currency : "inr",
          product_data : {
            name : item.name,
            // images : [item.image]
          },
          unit_amount : item.price * 100,
        },
        adjustable_quantity : {
          enabled : true,
          minimum : 1,
        },
        quantity : item.qty
      }
    }),

    success_url:`${process.env.FRONTEND_URL}/success`,
    cancel_url:`${process.env.FRONTEND_URL}/cancel`

  }

  // const session=await stripe.checkout.sessions.create(params)
  const session = await stripe.checkout.sessions.create(params)
  // res.send(200).json(session.id)
  res.status(200).json( session.id );
}
catch(err){
  res.status(err.statusCode || 500).json(err.message)
}
  
})

//server is running
app.listen(PORT, () => console.log("Server is running at port: " + PORT));
