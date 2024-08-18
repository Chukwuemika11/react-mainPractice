import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";
import {useForm} from "react-hook-form"

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const {register, handleSubmit, formState: {errors},} = useForm();

  function toggleVisibility(){
    setShowPassword(!showPassword);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  function showingDiv(){
    setShowDiv(true);
  }

 function removeDiv(){
   setShowDiv(false);
 }

  return (
    <>
    <div>
  <form onSubmit={handleSubmit(onSubmit)}>
    {/* username */}
    <div>
      <label htmlFor="username"></label>
    <input type="text" 
    {...register("username", {required: 'username is required'})}
    />
    {errors.username && (
      <p>username is required</p>
    )}
    </div>
{/* for spinner loaders
\*/}

<div className=' flex justify-center items-center'>
  <div className=' border-t-4 border-blue-400 animate-spin rounded-full h-16 w-16'></div>
</div>

    <div>
      <label htmlFor="fisrtname">firstname</label>
      <input type="text"
      {...register("firstname",{required:"firstname is required"})}
      />
      {errors.firstname && (
        <p>enter firstname</p>
      )}
    </div>

    <div>
      <label htmlFor="email"></label>
    <input type="email" 
    {...register("email", {required: "email is required",
      pattern:{
        value: /^\S+@\S+$/i,
        message: "Please enter a valid email address",
      },
    })}
    />
    {errors.email && (
      <p>email is required</p>
    )}
    </div>

    <div>
      <label htmlFor="password"></label>
    <input type="password" 
    {...register("password", {required: "password is required",
      minLength:{
        value: 6,
        message: "password must be 6 characters"
      }
    })}
     />
     {errors.password && (
      <p>enter password</p>
     )}
    </div>

<button type='submit'>
       sign up
</button>
  </form>



{/* center div */}
{/* grid place-content-center */}
{/* flex align="center"  justify="center" */}



    <input type={showPassword ? "text" : "password"}/>
    <span onClick={toggleVisibility}>
      {showPassword ? <FaRegEye/> : <IoEyeOffOutline />}
    </span>
    </div>

    <div onClick={showingDiv}>
      <p>hello world</p>
    </div>

    {showDiv && (
      <>
      <p>This is a container below the main container</p>
       <button onClick={removeDiv}>Close me</button>
      </>
    )}

    </>
  )
}

export default App
