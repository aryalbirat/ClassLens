const express = require("express")
const multer  = require('multer')
const cors = require("cors")

const app=express()
app.use(cors())
app.use(express.json())

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
    console.log(req.file.filename)
    res.json({
        message: "The image has been received"
    });
  })

app.listen(8080,() =>{
    console.log("App listening on port 8080");
})
