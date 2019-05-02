const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Record = require('../models/record');
const Initial_evaluation = require('../models/initial_evaluation');


router.get('/users', async (req,res)=>{
    const user = await User.find();
    res.json(user); 
});

router.get('/users/:id',async (req, res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
});

router.get('/record/:id',async (req, res)=>{
    const record = await Record.findById(req.params.id);
    res.json(record);
});
//tener en cuenta el ID (revisar)
router.get('/initial_evaluation/:id',async (req, res)=>{
    const initial_evaluation = await Initial_evaluation.findById(req.params.id);
    res.json(initial_evaluation);
});

router.post('/users',async (req, res)=>{
    const { userName,userDescription} = req.body;
    const newUser = {
        userName,
        userDescription,      
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


router.put('/users/:id',async (req, res)=>{
    const { userName, userDescription } = req.body;
    const newUser = { userName, userDescription };
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User Updated'});
});

router.put('/record/:id',async (req, res)=>{
    const { id_Paciente,id_Medico } = req.body;
    const newRecord = { id_Paciente,id_Medico };
    await React.findByIdAndUpdate(req.params.id, newRecord);
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
    await record.findByIdAndRemove(req.params.id);
    res.json({status: 'Record Removed'});
});

router.delete('/initial_evaluation/:id',async (req, res)=>{
    await Initial_evaluation.findByIdAndRemove(req.params.id);
    res.json({status: 'Initial evaluation Removed'});
});

module.exports = router;