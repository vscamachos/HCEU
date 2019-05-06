const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecordSchema = new Schema({
    id_Paciente: { type: String,required:true},
    id_Medico: { type: String,required:true} 
});

module.exports = mongoose.model('Record',RecordSchema);