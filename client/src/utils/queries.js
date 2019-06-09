import gpl from 'graphql-tag';

export default {
    query: {

    },
    mutation: {
       crearUsuario: gpl`
       mutation($userName: String!,$userDocument: String!,$userBirthday: String!,$userRol: String!,$userTelphone: String!,$userAdress: String!,$userCountry: String!,$userEmail: String!,$password: String!){
           createUser(input:{
             userName: $userName
             userDocument: $userDocument
             userBirthday: $userBirthday
             userRol: $userRol
             userTelphone: $userTelphone
             userAdress: $userAdress
             userCountry: $userCountry
             userEmail: $userEmail
             password: $password
           })
         }
       `
    },
    //subscription: {}
}