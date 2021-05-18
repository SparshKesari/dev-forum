export default async(req,res)=>{
    const{email,password}=req.body

//1.Lookup user form hasura by email if already exist
const user = {name:'jamie'};


//2.if found return error


//3. hash the pwd


//4. create user on hasura
const token = 'abc';


//5.create a token



//6. return the jwt as token and user

res.status(200).json({token,...user})

}