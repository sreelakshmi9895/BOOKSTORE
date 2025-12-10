import React, {useEffect, useState} from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
 

function Header() {
  const [listStatus,setListStatus] = useState(false)
const [dp,setDp]= useState("")
const [token,setToken] = useState("")
const [dropDown,setDropDown] = useState(false)
useEffect(()=>{
if(sessionStorage.getItem("token")){
  const userToken = sessionStorage.getItem("token")
  setToken(userToken)
  const user = JSON.parse(sessionStorage.getItem("user"))
  setDp(user.picture)
}
},[token])

const menuBtnClick = ()=>{
  setListStatus(!listStatus)
}

  return (
    <>
    {/* upper part - title & login */}
     <div className='grid grid-cols-3 p-2'>
      {/* logo with title */}
      <div className='flex items-center'>
      <img width={'70px'} height={'70px'} src="https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
       <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOKSTORE</h1>
      </div>
      {/* title */}
      <div className='md:flex justify-center items-center hidden'>
     <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
      </div>
      {/* login */}
      <div className='md:flex justify-end items-center hidden'>
  {/* insta , fb , twitter */}
  <FaInstagram/>
  <FaFacebook className='mx-2'/>
  <FaTwitter/>
  {/* login link */}
   {
    !token?
     <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'> <FaUser className='me-1'/>Login
  </Link>
  :
   <div className='relative inline-block text-left ms-2'> 
    <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
    <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src={dp?dp :"https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg?semt=ais_hybrid&w=740&q=80"}  alt="" />
    </button>
    {
      dropDown &&
      <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden'>
   <Link to={'user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
   <button className='block px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
    </div>
    }
   </div>
   }
      </div>
     </div>
     {/* lower part - links & menu + login btn */}
     <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
    {/*div -  menubar & login btn */}
    <div className='flex justify-between items-center text-2xl md:hidden'>
  {/* menubar btn */}
  <button onClick={menuBtnClick}><FaBars/></button>
  {/* login link */}
    {
    !token?
     <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'> <FaUser className='me-1'/>Login
  </Link>
  :
   <div className='relative inline-block text-left ms-2'> 
    <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
    <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src={dp?dp :"https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg?semt=ais_hybrid&w=740&q=80"} alt="" />
    </button>
    {
      dropDown &&
      <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden'>
   <Link to={'user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
   <button className='block px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
    </div>
    }
   </div>
   }
    </div>
    {/* ul - links */}
    <ul className={listStatus?"flex flex-col":'md:flex justify-center items-center hidden'}>
  <li className='md:mx-4 md:mt-0' ><Link to={'/'} >HOME</Link></li>
   <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'}  >BOOKS</Link></li>
    <li className='md:mx-4 md:mb-0'><Link to={'/contact'}  >CONTACT</Link></li>
    </ul>
     </nav>
    </>
  )
}

export default Header
