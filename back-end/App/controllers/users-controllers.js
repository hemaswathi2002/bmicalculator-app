const User = require('../models/user-model')

userCltr = {}

userCltr.create = async(req,res)=>{
    const {body} = req
    const user = new User(body)
    try{
    const response = await user.save()
    res.status(201).json(response)
    }
    catch(err){
        res.status(500).json({notice:'Internal server error'})
    }
}

userCltr.list = async(req,res)=>{
    try{
        const response = await User.find()
        res.json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({notice:'Internal server error'})
    }
}

userCltr.destroy = async(req,res)=>{
    const id = req.params.id
    try{
        const response = await User.findByIdAndDelete(id)
        res.json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({notice:'Internal server error'})
    }
}

module.exports = userCltr
