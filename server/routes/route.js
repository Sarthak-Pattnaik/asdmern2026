const express = require('express');
const User = require('../model/user-model.js');
const multer = require('multer');
const {getUser, deleteUser, getEditData, updateData} = require('../controller/user-controller.js');

const router = express.Router();

// file handling using multer 
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'uploads');
    },
    filename:function(req,file,cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage : storage});

// data insert 
router.post('/add', upload.single('image'), async (req,res) =>{
    try {
        const files = req.file;
        const user = new User({
            name : req.body.name,
            mobile : req.body.mobile,
            email : req.body.email,
            image : files.filename
        });
        user.save();
        res.status(201).json("Data Inserted");
    } catch (error) {
        console.log("Error while inserting data", error);
    }
});

router.get('/all', getUser);
router.post('/delete', deleteUser);
router.post('/getuser', getEditData);
router.post('/update', updateData);
module.exports = router;