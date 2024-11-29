const express = require("express")
const multer  = require('multer')
const cors = require("cors")
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const app=express()
app.use(cors());
app.use(express.json())

const mlUrl = 'http://localhost:8000/predict'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) { 
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage })

  app.post("/single",upload.single("image") ,(req, res)=> {
    const filename = req.file.filename
    const filepath = `./uploads/${filename}`

    const form = new FormData();
    form.append('file', fs.createReadStream(filepath));

    axios.post(mlUrl , form, {
      headers: form.getHeaders(),
    })
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(error => {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: 'Error processing image in ML API' });
      });
  })

app.listen(8080,() =>{
    console.log("App listening on port 8080");
})