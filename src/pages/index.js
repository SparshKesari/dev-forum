import { useAuthState ,useAuthDispatch} from "../context/auth";

export default function IndexPage(){
    const {isAuthenticated,user} = useAuthState();
    const {login,createUser,logout}= useAuthDispatch()

    return(
    <> 
    {isAuthenticated ?(
        <>
    <p>Hello {user.name}</p>
    <button onClick={logout}>logout</button>
    </>
    ):(<button onClick={()=>
        login({
            email:"j@j.com",
            password:"abc123"
        })}>
            Login
    </button>)}
    
    </>)
}
