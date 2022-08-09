import React,{useState} from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth';
import {auth} from '../config/fire'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from '../assets/mark.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  
    const[registerEmail,setRegisterEmail]=useState('')
    const[registerPassword,setRegisterPassword]=useState('')

    let navigate = useHistory();

const login=()=>{
    const users = signInWithEmailAndPassword(auth,registerEmail,registerPassword).then((res)=>{
        return res
    }).then((user)=>{
        console.log(user) 
        toast.success('Welcome Back ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    setTimeout(function(){
        navigate.push('/home')
    },3000)
    }).catch((err)=>{
        alert(err.message)
    })
    setRegisterEmail('')
    setRegisterPassword('')
}



  return (
 <div className={"w-full h-screen bg-[url('assets/community.png')] bg-cover bg-no-repeat px-4 border-2"} >
    <header className='p-6 flex'>
        <img src={logo} alt={logo} className='h-10'/><span className='text-4xl font-testimonial text-t-10'>Mynft</span>
    </header>
    <div className='my-auto lg:py-0 py-28'>
    <div className="text-t-80  lg:p-20 p-8 border lg:w-6/12 mx-auto border-lite rounded-xl">
      <h3 className='text-3xl font-bold text-center'>Login user</h3>
      <div className='flex flex-col gap-6 w-11/12 p-3 '>
      <input placeholder="Email.." onChange={(e)=>{setRegisterEmail(e.target.value)}} className="p-2 outline-none bg-t-50 border-b-4 rounded-lg hover:border-t-60 " required/>
      <input placeholder="Password.." onChange={(e)=>{setRegisterPassword(e.target.value)}}className="p-2 outline-none bg-t-50 border-b-4 rounded-lg hover:border-red" required/>

      <div className='flex gap-3'>
      {/* <button onClick={register} className='bg-t-90 inline-block p-2 rounded-lg hover:bg-secondary text-lg font-semibold' >Sign Up</button> */}
   <button onClick={login} className='bg-w2 inline-block p-2  px-4 rounded-lg hover:bg-w1 text-lg font-semibold' >Login</button>

      </div>
      {/* <p>Already have accounts? Click on <Link to='/login'><span className='border-b hover:text-red'>Login</span></Link> </p> */}
      </div>
 
    </div>
    </div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
  
 </div>
  )
}

export default Login