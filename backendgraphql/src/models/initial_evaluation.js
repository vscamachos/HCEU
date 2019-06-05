import { Schema, model } from "mongoose";

const Initial_evaluationSchema = new Schema({
    id_Paciente: { type: String,required:true},
    alergia_Medicamento: { type: String,required:true}
});

export default model('Initial_evaluation',Initial_evaluationSchema);