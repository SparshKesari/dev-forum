export default async(req,res)=>{
    const{email,password}=req.body

//1.Lookup user form hasura
const user = {name:'jamie'};


//2.if not return error


//3. do password match


//4. create a jwt
const token = 'abc';


//5. return the jwt as token and user

res.status(200).json({token,...user})

}