const express = require('express')
const mongoose = require("mongoose")

const app = express()
const port = 8080


const SofaSchema = new Schema({
    image: {type: string, require:true},
    title: {type: string, require:true},
    price: {type: number , require:true},
   
  });
const Schema = mongoose.Schema;

const DB_URL="mongodb+srv://mi6la68au:azmp101@cluster0.juxgx7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const SofaModel = mongoose.model('Sofa', SodaSchema);
app.get('/', (req, res) => {
  res.send('Hello World!')
})



mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected!');
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
      
});


