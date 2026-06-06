const User = require('../model/user-model.js');

const getUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error("error while geting data", error);
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.body.id });
        res.status(201).json("Data Deleted");
    } catch (error) {
        console.log("Error while delete data", error);
    }
}

const getEditData = async (req, res) => {
    try {
        const data = await User.findById({ _id: req.body.id });
        res.json(data);
    } catch (error) {
        console.log("Error While Getting data fro eidt", error);
    }
}

const updateData = async (req, res) => {
    try {
        await User.updateOne({ _id: req.body._id }, {
            $set : {
                name : req.body.name,
                mobile : req.body.mobile,
                email : req.body.email
            }
        });
        res.status(201).json("Data Updated");
    } catch (error) {
        console.log("Error while update controller", error);
    }
}

module.exports = {
    getUser,
    deleteUser,
    getEditData,
    updateData
}