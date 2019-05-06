const mongoose = require('mongoose');
const { Schema } = mongoose;

const Initial_evaluationSchema = new Schema({
    id_Paciente: { type: String,required:true},
    alergia_Medicamento: { type: String,required:true}
});

module.exports = mongoose.model('Initial_evaluation',Initial_evaluationSchema);