require('dotenv').config()
const articleRoutes = require('./routers/article')
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express')

// express app
const app = express()
app.use(cors());
// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/articles', articleRoutes)
//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        
    app.listen(process.env.PORT, () => {
    console.log('connected to db listening on port', process.env.PORT)
  })

    })
    .catch((error)=>{
        console.log(error)

    })


