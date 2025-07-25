import { useState } from "react";
import { Link } from "react-router";


const SignUp = () => {
   const[name,setName]=useState('');
  const[username,setUsername]=useState('');
  const[mobileNumber,setMobileNumber]=useState('');
  const[password,setPassword]=useState('');
  const[showPassword, setShowPassword] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name || !username || !mobileNumber || !password){
      alert("Please fill all the fields");
      return;
    }

    // Here you can add the logic to handle the form submission, like sending data to an API
    console.log({name, username, mobileNumber, password});
    alert("Form submitted successfully!");
    setName('');
    setUsername('');
    setMobileNumber('');
    setPassword('');
  }

  return <>
   <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 ">
     <div className="border p-6  rounded-lg shadow-lg bg-white ">
       <h1 className="text-center font-bold text-3xl pb-2 ">Register Form</h1>
       <form onSubmit={handleSubmit} >
         <input type="text" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/> <br /><br />
       <input type="text" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/> <br /><br />
        <input type="text" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl" placeholder="mobile number" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/> <br /><br />

       <input type={showPassword?"text":"password"} minLength={8} placeholder="password" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl" value={password} onChange={(e)=>setPassword(e.target.value)}/><br /><br />
        <input type={showPassword?"text":"password"} placeholder="confirm password" className="border border-gray-400 outline-none p-2 w-80 rounded-md text-xl" value={password} minLength={8} onChange={(e)=>setPassword(e.target.value)}/><br />
       <div className="flex pt-1 gap-2 pl-2">
       <input type="checkbox" value={showPassword} onChange={()=>setShowPassword((prev)=>!prev)} />{" "}
       <div className="flex justify-between w-full pr-2">
        <label htmlFor="check">show password</label>

          </div>
        </div>
       <div className="flex justify-center pt-2">
           <button type="submit" className="btn btn-soft btn-success ">Register </button>
           </div>

       </form>
        <h1 className="text-center" > Please Login? <Link to={'/login'}><button  className=" pt-2 text-orange-500 hover:cursor-pointer hover:opacity-70">Login</button></Link></h1>
     </div>
     </div>
  </>
}

export default SignUp