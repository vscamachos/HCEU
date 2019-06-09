import { Schema, model } from "mongoose";
import validate from "mongoose-validator";

const validations = [
    validate({
      validator: 'isLength',
      arguments: [5, 10],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
    validate({
      validator: 'isAlphanumeric',
      passIfEmpty: false,
      message: 'Name should contain alpha-numeric characters only',
    }),
  ]
const UserSchema = new Schema({

    userName: { type: String,required: true,validate: validations},
    userDocument: {type: String, required: true, unique: true}, 
    userBirthday: {type: String, required: true},//por ahora fecha en String
    userRol: {type: String, required: true},
    userTelphone: {type: String, required: true},
    userAdress: {type: String, required: true},
    userCountry: {type: String, required: true},
    userEmail: { type: String, required:true,unique:true, 
        validate: validate({
            validator: 'isEmail',
            message: 'Introduce un Email válido'
        }) },
    password: {type: String, required:true,unique:true}
});

export default model('User', UserSchema);