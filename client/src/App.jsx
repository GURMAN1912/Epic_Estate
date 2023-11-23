import React from 'react'
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import Private from './components/Private'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'
export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/listing/:listingId' element={<Listing/>} />
      <Route element={<Private/>}>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/create-listing' element={<CreateListing/>}></Route>
        <Route path='/update-listing/:listingId' element={<UpdateListing/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}