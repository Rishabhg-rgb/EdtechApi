const express = require('express')
const cors = require('cors')
const app = express()
const connectToMongo = require('./db')
connectToMongo()
app.use(express.json())
app.use(cors())
app.use('/api/ques/',require('./routes/questions'))
app.listen(5000,()=>{
    console.log("connect to mongo")
    
})