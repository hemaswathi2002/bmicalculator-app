const mongoose = require('mongoose')
const configureDB = async()=>{
    try{
        const response = await mongoose.connect('mongodb://127.0.0.1:27017/bmi-app')
        console.log('Connected to db')
    }
    catch(err){
        console.log('Error Connectin to db',err)
    }
}

module.exports = configureDB