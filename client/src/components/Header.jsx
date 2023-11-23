import React, { useEffect, useState } from 'react'
import {FaSearch} from "react-icons/fa"
import { Link,useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux"

export default function Header() {
  const {currentUser}=useSelector(state=>state.user)
  const [searchTerm,setSearchTerm]=useState('');

  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const urlParams=new URLSearchParams(window.location.search)
    urlParams.set('searchTerm',searchTerm);
    const searchQuery=urlParams.toString();
    navigate(`/search?${searchQuery}`)



  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-orange-300 shadow-lg'> 
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to={"/"}>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-amber-600'>Epic</span>
            <span className='text-amber-700'> Estate</span>
        </h1>
        </Link>
        <form onSubmit={handleSubmit} className='bg-amber-100 rounded-xl p-3 flex items-center'>
            <input type="text" placeholder='Search...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <button>
            <FaSearch className='text-amber-600'/>
            </button>
        </form>
        <ul className='flex gap-4 items-center'>
            <Link to={"/"}>
            <li className='hidden sm:inline hover:underline text-amber-900 '>Home</li>
            </Link>
            <Link to={"/about"}>
            <li  className='hidden sm:inline hover:underline text-amber-900 ' >About</li>
            </Link>
            <Link to={"/profile"}>
              {currentUser ?(
                <img src={currentUser.avatar} className='rounded-full h-8 w-8 object-cover' alt="profile" />
              ):
              <li  className=' hover:underline text-amber-900 '>Sign in</li>
              }
            </Link>
        </ul>
    </div>
    </header>
  )
}
