const express = require("express")
const multer  = require('multer')

const app=express()
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
    console.log(req.file)
    res.json({
        message: "The image has been received"
    })
  })

app.listen(8080,async() =>{
    try{
        console.log("Database is connected")

    }catch(error){
        console.log("error in connecting")

    }
    
})
