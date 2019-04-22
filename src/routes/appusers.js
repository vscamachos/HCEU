const express = require('express');
const router = express.Router();

const User = require('../models/user');


router.get('/users', async (req,res)=>{
    const user = await User.find();
    res.json(user); 
});

router.get('/users/:id',async (req, res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
});

router.post('/users',async (req, res)=>{
    const { title,description} = req.body;
    const newUser = {
        title,
        description,      
    };
    const user = new User(newUser);
    await user.save();
    res.json({status: 'User Saved'});
});

router.put('/users/:id',async (req, res)=>{
    const { title, description } = req.body;
    const newUser = { title, description };
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User Updated'});
});

router.delete('/users/:id',async (req, res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Removed'});
});

module.exports = router;