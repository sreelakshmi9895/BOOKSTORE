import React, { useEffect, useState } from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import serverURL from '../../services/serverURL'



function AdminSideBar() {
const [dp,setDp]  = useState("")
  const [username,setUsername] = useState("")


  useEffect(()=>{
      if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUsername(user?.username)
        setDp(user?.picture)
      }
    },[])

  return (
    <div className='bg-blue-100 md:min-h-screen h-fit flex flex-col text-center items-center'>
      {/* admin image */}
      <div className='my-10 justify-center items-center'><img width={'100px'} height={'100px'} src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp :`${serverURL}/uploads/${dp}`:"https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg?semt=ais_hybrid&w=740&q=80"} alt="" /></div>
      {/* name */}
      <h1 className='text-xl font-bold  mb-5'>{username}</h1>
      {/* links */}
      <div className='mb-3'>
     <Link to={'/admin/home'} className='flex items-center'><FaHome className='me-2'/>Dashboard</Link>
      </div>
      <div className='mb-3'>
     <Link to={'/admin/resources'} className='flex items-center'><FaBookReader className='me-2'/>Resources</Link>
      </div>
      <div className='mb-3'>
     <Link to={'/admin/profile'} className='flex items-center'><FaGears className='me-2'/>Dashboard</Link>
      </div>
    </div>
  )
}

export default AdminSideBar
