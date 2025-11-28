import React from 'react'
import { FaEye, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Auth({insideRegister}) {
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/Auth-bg.jpg)] bg-cover bg-center'>
     <div className='p-10'>
  <h1 className='text-3xl font-bold text-white text-center'>BOOK STORE</h1>
  <div style={{width:'400px'}} className='bg-black text-white p-5 flex flex-col justify-center items-center my-5'>
   <div style={{width:'100px',height:'100px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
 <FaUser className='text-3xl'/>
   </div>
   <h2 className='text-2xl'>{insideRegister?"Register":"Login"}</h2>
   <form className='my-5 w-full'>
    {/* username */}{
      insideRegister && 
      <input type="text"  placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5'/>
    }
  {/* email */}
  <input type="text"  placeholder='Email ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5'/>
  {/* password */}
  <div className='flex items-center'>
    <input type="text"  placeholder='Password' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5'/>
    <FaEye className='text-gray-400 cursor-pointer' style={{marginLeft:'-30px',marginTop:'-20px'}}/>
    </div>
    {/* forgot password */}
    {
      !insideRegister && 
      <div className='flex justify-between mb-5'>
 <p className='text-xs text-orange-300'>Never share your password with others</p>
 <button className='text-xs underline'>Forgot Password</button>
      </div>
    }
    {/* login/register btn */}
    <div className='text-center'>
      {
        insideRegister?
        <button type='button' className='bg-green-700 p-2 w-full rounded'>Register</button>
        :
        <button type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>
      }
    </div>
    {/* google authentication */}
    <div className='my-5 text-center'>
    {
      insideRegister?
      <p className='text-blue-600'>Already a user? <Link to={'/login'} className='underline ms-5' >Login</Link> </p>
      :
      <p className='text-blue-600'>Already a user? <Link to={'/register'} className='underline ms-5' >Register</Link> </p>
    }
    </div>
   </form>
  </div>
     </div>
    </div>
  )
}

export default Auth
