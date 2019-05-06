// modelos de la base de datos
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    userName: { type: String,required:true},
    userDescription: { type: String,required:true}
});

module.exports = mongoose.model('User',UserSchema);
// User es el nombre del esquema
