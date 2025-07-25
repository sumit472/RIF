import React, { useState } from 'react'
import { Link } from 'react-router';

const ForgetPassword = () => {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[showPassword, setShowPassword] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("Password changed successfully");
    setPassword('');
    setShowPassword(false);
    setUsername('');
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 ">
     <div className="border p-6  rounded-lg shadow-lg bg-white">
       <h1 className="text-center font-bold text-3xl pb-2">Forget Password</h1>
       <form  onSubmit={handleOnSubmit} >
       <input type="text" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl" placeholder="username & mobile number" value={username} onChange={(e)=>setUsername(e.target.value)}/> <br /><br />
      <input type={showPassword?"text":"password"} minLength={8}  placeholder="new password" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl"  value={password} onChange={(e)=>setPassword(e.target.value)}/><br /><br />
    <input type={showPassword?"text":"password"} minLength={8} placeholder="confirm password" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl"  value={password} onChange={(e)=>setPassword(e.target.value)}/><br />

<div className='flex pt-2 gap-2 pl-2'>
<input type="checkbox" value={showPassword} onChange={()=>setShowPassword((prev)=>!prev)}/>
<label htmlFor="check">show password</label>
</div>

      <div className="flex justify-center pt-2">
           <button type="submit" className="btn btn-soft btn-secondary ">Change Password</button>
           </div>

       </form>
         <h1 className="text-center">I have an account ? <Link to={"/sign-up"}><button className=" pt-2 text-blue-500 hover:cursor-pointer hover:opacity-70">Register</button></Link> / <Link to={'/login'}><button className=" pt-2 text-blue-500 hover:cursor-pointer hover:opacity-70">Login</button></Link></h1>
     </div>
     </div>
  )
}

export default ForgetPassword