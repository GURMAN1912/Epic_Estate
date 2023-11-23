import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'


export default function SignUp() {
  const [formData,setFormData]=React.useState({})
  const [error,setError]=React.useState(null)
  const[loading,setLoading]=React.useState(false)
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }
  const handleSubmit=async(e)=>{
    try{

      e.preventDefault();
      setLoading(true)
      const res=await fetch("/api/auth/signup",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(formData)
      })
      const data=await res.json();
      console.log(data);
      if(data.success===false){
        setLoading(false)
        setError(data.message)
        return
      }
      setLoading(false)
      setError(null)
      navigate("/sign-in")
    }
    catch(error){
      setLoading(false)
      setError(error.message)
    }
  
  }
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold py-7'>Sign up</h1>
      <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder='username' className='border p-3 rounded-lg'id='username' />
        <input type="text" onChange={handleChange} placeholder='email' className='border p-3 rounded-lg'id='email' />
        <input type="password" onChange={handleChange} placeholder='password' className='border p-3 rounded-lg'id='password' />
        <button disabled={loading} className='p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70 bg-rose-500 text-white'>{loading?"Loading...":"Sign Up"}</button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}><span className='text-amber-900'>Sign in</span></Link>
      </div>
      {error && <p className='text-rose-600'>{error}</p>}
    </div>
  )
}
