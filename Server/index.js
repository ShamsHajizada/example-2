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

app.get("/api/sofa", async (req, res) => {
  try {
    const sofa = await SofaModel.find({});

    if (SofaModel.length > 0) {
      res.status(200).send({ message: "success", data: sofa});
    } else {
      res.status(204).send({
        message: "data is empty",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/api/sofa/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sofa = await SofaModel.findById(id);

    if (sofa) {
      res.status(200).send({
        message: "success",
        data: sofa,
      });
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/sofa/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSofa= await SofaModel.findByIdAndDelete(id);

    res.status(200).send({
      message: "deleted succesfully!",
      deletedSofa: deletedSofa,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/sofa", async (req, res) => {
  try {
    const newSofa = new SofaModel({ ...req.body });
    await newSofa.save();

    res.status(201).send({ message: "created succesfully!", data: newSofa });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

