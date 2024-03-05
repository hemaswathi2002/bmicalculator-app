const jwt = require('jsonwebtoken')
const loginCltr = {}

loginCltr.login= (req,res)=>{
    const body = req.body
    if(body.email==process.env.EMAIL && body.password==process.env.PASSWORD){
        const tokenData = {id:process.env.PASSWORD}
        const token = jwt.sign(tokenData,process.env.JWT_SECRET)
        res.json({token:token})
    }else{
        res.status(401).json({notice:'invalid email/password'})
    }
}

module.exports = loginCltr