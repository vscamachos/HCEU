import { Schema, model } from "mongoose";

const UserSchema = new Schema({

    userName: { type: String,required: true},
    userDocument: {type: String, required: true, unique: true}, 
    userBirthday: {type: String, required: true},//por ahora fecha en String
    userRol: {type: String, required: true},
    userTelphone: {type: String, required: true},
    userAdress: {type: String, required: true},
    userCountry: {type: String, required: true},
    userEmail: {type: String, required:true,unique:true},
    password: {type: String, required:true,unique:true}
});

export default model('User', UserSchema);