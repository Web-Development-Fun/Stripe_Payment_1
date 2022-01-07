const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
require("dotenv").config();
const Stripe =require("stripe");

const stripe=new Stripe("sk_test_51K6CEsSCqGKG0ElcnWqKpoGRG6Bkkcc4631wb5Fk7desBhjcNHhdtx498g9UaF8IQ0l4opXgh7Dgmhjn8rRAaaEL00AZWwcp1V")

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.post("/payment", cors(), async(req,res)=>{
    let {amount , id}=req.body;
    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency:"USD",
            description:"Spatula Company",
            payment_method:id,
            confirm:true,
        })
        console.log("Payment", payment);
        res.json({
            message:"Payment Successful",
            success:true
        })
    }catch(error){
        console.log("Error",error);
        res.json({
            message:"Payment failed",
            success:false
        })
    }
})

app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server is listening on port 4000`);
})