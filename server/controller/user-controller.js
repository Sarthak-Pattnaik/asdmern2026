const User = require('../model/user-model.js');

const getUser = async (req,res) =>{
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(error){
        console.error("error while geting data", error);
    }
}

module.exports = {
    getUser
}