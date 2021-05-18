import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import {hasuraAdminClient,gql} from "../lib/hasura-admin-client.js"


const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
      name
      email
      password
      last_seen
    }
  }
`;

const InsertUser=gql`mutation InsertUser($name: String!, $email: String!, $password: String!) {
  insert_users_one(object: {name: $name, email: $email, password: $password}) {
    id
    name
    email
  }
}
`;

export default async(req,res)=>{
    const{name,email,password:rawPassword}=req.body

//1.Lookup user form hasura by email if already exist
const user = {user};

const {users:[foundUser]
} = await hasuraAdminClient(GetUserByEmail,{
    email
});



//2.if found return error

if(foundUser) return res.status(400).json({
    message:"unable to create the account with this email provided try another"
})

//3. hash the pwd





//4. create user on hasura
const token = 'abc';


//5.create a token



//6. return the jwt as token and user

res.status(200).json({token,...user})

}


// "https://hasura.io/jwt/claims": {
//     "x-hasura-allowed-roles": ["editor","user", "mod"],
//     "x-hasura-default-role": "user",
//     "x-hasura-user-id": "1234567890",
//     "x-hasura-org-id": "123",
//     "x-hasura-custom": "custom-value"
//   }