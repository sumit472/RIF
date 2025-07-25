
import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const[username,setUsername]=useState('');
   const[password,setPassword]=useState('');
   const[showPassword,setShowPassword]=useState(false);
   return <>
   <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 ">
     <div className="border p-6  rounded-lg shadow-lg bg-white">
       <h1 className="text-center font-bold text-3xl pb-2">Login Form</h1>
       <form action="">
       <input type="text" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/> <br /><br />
       <input type={showPassword?"text":"password"} placeholder="password" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
       <div className="flex pt-1 gap-2 pl-2">
       <input type="checkbox" value={showPassword} onChange={()=>setShowPassword((prev)=>!prev)} />{" "}
       <div className="flex justify-between w-full pr-2">
        <label htmlFor="check">show password</label>
          <Link to={'/forget-password'}><button className="text-red-500 hover:cursor-pointer hover:opacity-70" >Forget Password</button></Link>
          </div>
        </div>
       <div className="flex justify-center pt-2">
           <button className="btn btn-soft btn-success ">Login</button>
           </div>

           <h1 className="text-center">I don't have an account ? <Link to={'/sign-up'}><button className=" pt-2 text-orange-500 hover:cursor-pointer hover:opacity-70">Register</button></Link></h1>
       </form>
     </div>
     </div>
   </>
}

export default Login;