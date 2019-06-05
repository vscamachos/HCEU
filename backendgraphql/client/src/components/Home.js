import React from 'react';
import gpl from 'graphql-tag';
import {graphql} from 'react-apollo';

const query = gpl`
   {
    Users{
      _id
      userName
      userDocument
    }
  }
`;
const User = (user, i)=><li key={i}>{user.userName}    {user.userDocument}</li>

export default  graphql(query)(
    ({data: {Users=[]}})=>
        <ul>
             {Users.map(User)}             
        </ul>
    )