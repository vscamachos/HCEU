//definir operaciones a traves de las URL's
const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Record = require('../models/record');
const Initial_evaluation = require('../models/initial_evaluation');

//obteniendo la lista de la base
router.get('/users', async (req,res)=>{
    const user = await User.find();
    console.log(user);
    res.json(user);
});

//busca por id
router.get('/users/:id',async (req, res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
});


router.get('/record/:id',async (req, res)=>{
    const record = await Record.find({id_Paciente:req.params.id});
    res.json(record);
});
//tener en cuenta el ID (revisar)
router.get('/initial_evaluation/:id',async (req, res)=>{
    const initial_evaluation = await Initial_evaluation.find({id_Paciente:req.params.id});
    res.json(initial_evaluation);
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


router.post('/record',async (req, res)=>{
    const { id_Paciente,id_Medico} = req.body;
    const newRecord = {
        id_Paciente,
        id_Medico,      
    };
    const record = new Record(newRecord);
    await record.save();
    res.json({status: 'Record Saved'});
});

router.post('/initial_evaluation',async (req, res)=>{
    const { id_Paciente,alergia_Medicamento} = req.body;
    const newInitial_evaluation = {
        id_Paciente,
        alergia_Medicamento,      
    };
    const initial_evaluation = new Initial_evaluation(newInitial_evaluation);
    await initial_evaluation.save();
    res.json({status: 'Initial evaluation Saved'});
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

router.put('/record/:id',async (req, res)=>{
    const { id_Paciente,id_Medico } = req.body;
    const newRecord = { id_Paciente,id_Medico };
    await Record.findByIdAndUpdate(req.params.id, newRecord);
    res.json({status: 'React Updated'});
});

router.put('/initial_evaluation/:id',async (req, res)=>{
    const {  id_Paciente,alergia_Medicamento } = req.body;
    const newInitial_evaluation = { id_Paciente,id_Medico };
    await Initial_evaluation.findByIdAndUpdate(req.params.id, newInitial_evaluation);
    res.json({status: 'Initial evaluation Updated'});
});


router.delete('/users/:id',async (req, res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Removed'});
});

router.delete('/record/:id',async (req, res)=>{
    await Record.findByIdAndRemove(req.params.id);
    res.json({status: 'Record Removed'});
});

router.delete('/initial_evaluation/:id',async (req, res)=>{
    await Initial_evaluation.findByIdAndRemove(req.params.id);
    res.json({status: 'Initial evaluation Removed'});
});

module.exports = router;

