import React from 'react';
import gpl from 'graphql-tag';
import {graphql} from 'react-apollo';

const query = gpl`
mutation {
    createUser(input: {
      userName: "Heather Mason"
      userDocument: 1231234235
      userDescription: "Silent Hill 2"
      userBirthday: "05/12/91"
      userRol: "main"
      userTelphone: "354435"
      userAdress: "Calle 45"
      userCountry: "Bogota"
      userEmail: "@unal"
    }){
      _id
      userName
      userDescription
    }
  }
`;
const User = (user, i)=><li key={i}>{user.userName}</li>
const UserDocument = (user, i)=><li key={i}>{user.userDocument}</li>

export default  graphql(query)(
    ({data: {Users=[]}})=>
        <ul>
             {Users.map(User)}
             {Users.map(UserDocument)}
        </ul>
    )