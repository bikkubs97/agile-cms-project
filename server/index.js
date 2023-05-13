
import express from 'express'
import mongoose from 'mongoose'
import Data from './model/data.js'
import Contact from './model/contact.js'

import dotenv from 'dotenv';
import cors from 'cors'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => {
  console.log('connected to mongoose!!')
})

app.get("/", (req,res)=>{
    res.send("server is running")
})
//get data
app.get('/data', async (req, res) => {
  try {
    const dataArray = await Data.find({}).lean();
    const dataObject = dataArray[0]; 
    console.log(dataObject);
    res.send(dataObject);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting data');
  }
});

  
  
//update data
app.put('/data', async (req, res) => {
  try {
    const updatedData = await Data.findOneAndUpdate({}, req.body, { new: true });
    console.log(updatedData);
    res.send(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating data');
  }
});

app.post('/data', async (req, res) => {
  try {
    console.log(req.body)
    const newData = new Data(req.body);
    await newData.save();
    console.log(newData);
    res.send(newData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating new data');
  }
});
app.post("/contact", async (req, res) => {
  try {

    const contact = new Contact(req.body);
   
    await contact.save();
  
    res.status(200).send("Contact form submitted successfully");
  } catch (error) {
  
    console.error(error);
    res.status(500).send("Error submitting contact form");
  }
});


app.get("/contact", async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving contact messages");
  }
});



  
  app.listen(8000, ()=>{
    console.log("app is listening")
  })