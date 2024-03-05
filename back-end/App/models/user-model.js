const mongoose = require('mongoose')
const {Schema,model} = mongoose

const userSchema = new Schema ({
    date:Date,
    height:Number,
    weight:Number,
    bmi:Number
},{timestamps:true})

const User = model('User',userSchema)

module.exports = User