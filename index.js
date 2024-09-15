const http = require("http");
const express = require("express");
const { error } = require("console");
 const app = express();
const mongoose=require("mongoose");
app.use(express.json());


const url="mongodb+srv://shivangsinghblw:<nzwqEFPTWcN206zz>@smart.we4lr.mongodb.net/?retryWrites=true&w=majority&appName=smart"


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));



 app.get('/api/home',async(req,res)=>{
 try{const data=await{message:'hello',name:'shivang'};
 res.json(data)}
 catch(err){
    console.error(err);
    res.status(500).json({message:'error fetching data'});
 }
 });


   
app.get('/api/tree', async (req, res) => {
  try {
    const User = await Item.find().exec();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving items' });
  }
});





 



app.use((err, req, res, next) => {
    if (err.status === 400) {
    res.status(400).send({ message: 'Bad Request' });
    } else if (err.status === 401) {
      res.status(401).send({ message: 'Unauthorized' });
    } else if (err.status === 403) {
      res.status(403).send({ message: 'Forbidden' });
    } else if (err.status === 404) {
      res.status(404).send({ message: 'Not Found' });
    } else if (err.status === 500) {
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(500).send({ message: 'Unknown Error' });
    }
  });
  



const myserver = http.createServer(app);
myserver.listen(8006,()=>console.log("server started"));
