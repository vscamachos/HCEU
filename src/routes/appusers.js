const express = require('express');
const router = express.Router();

const User = require('../models/user');

//obteniendo la lista de la base
router.get('/users', async (req,res)=>{
    const user = await User.find();
    res.json(user); 
});

//busca por id
router.get('/users/:id',async (req, res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
});

//crea usuario
router.post('/users',async (req, res)=>{
    //los parametros que vamos a 'USAR' del request body
        const { userName,userDocument,userDescription,      
        userBirthday,userRol,userTelphone,userAdress,
        userCountry,userEmail} = req.body;
    //nuevo objeto con los parametros pedidos    
    const newUser = {
        userName,
        userDocument,
        userDescription,      
        userBirthday,
        userRol,
        userTelphone,
        userAdress,
        userCountry,
        userEmail
    };
    const user = new User(newUser);
    await user.save();
    res.json({status: 'User Saved'});
});

//actualizar
router.put('/users/:id',async (req, res)=>{
    const { userName,userDocument,userDescription,      
        userBirthday,userRol,userTelphone,userAdress,
        userCountry,userEmail} = req.body;
    const newUser = {
        userName,
        userDocument,
        userDescription,      
        userBirthday,
        userRol,
        userTelphone,
        userAdress,
        userCountry,
        userEmail
    };
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User Updated'});
});

router.delete('/users/:id',async (req, res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Removed'});
});

module.exports = router;