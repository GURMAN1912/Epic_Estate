import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import  {signInStart,signInSuccess,signInFailure} from "../redux/user/userSlice.js"
import OAuth from '../components/OAuth.jsx'

export default function SignIp() {
  const [formData,setFormData]=React.useState({})
  const {loading,error} =useSelector((state)=>state.user)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }
  const handleSubmit=async(e)=>{
    try{

      e.preventDefault();
      dispatch(signInStart())
      const res=await fetch("/api/auth/signin",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(formData)
      })
      const data=await res.json();
      console.log(data);
      if(data.success===false){
        dispatch(signInFailure(data.message));
        return
      }
      dispatch(signInSuccess(data))
      navigate("/")
    }
    catch(error){
      dispatch(signInFailure(error.message));

    }
  
  }
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold py-7'>Sign in</h1>
      <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
        {/* <input type="text" onChange={handleChange} placeholder='username' className='border p-3 rounded-lg'id='username' /> */}
        <input type="text" onChange={handleChange} placeholder='email' className='border p-3 rounded-lg'id='email' />
        <input type="password" onChange={handleChange} placeholder='password' className='border p-3 rounded-lg'id='password' />
        <button disabled={loading} className='p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70 bg-rose-500 text-white'>{loading?"Loading...":"Sign In"}</button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Do not Have an account?</p>
        <Link to={"/sign-up"}><span className='text-amber-900'>Sign up</span></Link>
      </div>
      {error && <p className='text-rose-600'>{error}</p>}
    </div>
  )
}
