 const express=require('express');
 const products=require('./products');
 require('./config');
const  app=express();
app.use(express.json());

app.post('/home',async(request,response)=>{
  let data=new products(request.body).save();
  let result=await data;
  response.send(result);
 console.log(result)
})

app.get('/list',async(req,res)=>{
  let data=await products.find();
  // let result=await data;
 res.send(data);
 console.log(data)
})

app.delete('/about/:_id',async(req,res)=>{
  let data=await products.deleteOne(req.params);
 res.send(data)
 console.log(req.params)
})

app.put('/update/:_id',async(req,res)=>{
  let data = await products.updateOne(
     req.params,//it already contain a object from client side so you dont need to put req.params into the object
    {
      $set:req.body ////it already contain a object from client side so you dont need to put req.params into the object
    });
    res.send(data);
    console.log(data);
})

app.listen(4000) 