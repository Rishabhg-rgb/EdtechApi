const mongoose = require('mongoose')
const URL = "mongodb://localhost:27017"

const connectToMongo = ()=>{
    mongoose.connect(URL,()=>{
        console.log("Connect to mongo Successfully")
        
    })
}

module.exports = connectToMongo