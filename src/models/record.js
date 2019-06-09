import { Schema, model } from "mongoose";

const RecordSchema = new Schema({
    id_Paciente: { type: String,required:true},
    id_Medico: { type: String,required:true} 
});;

export default model('Record', RecordSchema);