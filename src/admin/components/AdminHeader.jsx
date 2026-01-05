import React, { useContext } from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../../contextAPI/AuthContext'

function AdminHeader() {
   const {role,setAuthorised} = useContext(routeGuardContext)
     const navigate = useNavigate()

  const logout = ()=>{
     sessionStorage.clear()
     setAuthorised(false)
     navigate('/login')
  }

  return (
   <>
   {/* header upperpart */}
      <div className='flex justify-between items-center p-3 md:px-20'>
       {/* logo with title */}
       <div className='flex items-center'>
  <img width={'70px'} height={'70px'} src="https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
  <p className='font-bold text-2xl'>BOOKSTORE</p>
       </div>
       {/* logout */}
       <button onClick={logout} className='bg-black px-3 py-2 border rounded text-white flex items-center hover:bg-white hover:text-black'><FaPowerOff className='me-2'/>Logout</button>
      </div>
      {/* header lowerpart */}
      <div className='bg-black p-2'>
 <marquee> <p className='text-white'>Welocome,Admin! You're all set to manage and monitor the system.Lets get to work!</p></marquee>
      </div>
   </>
  )
}

export default AdminHeader
