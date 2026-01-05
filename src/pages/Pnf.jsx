import React, { useContext } from 'react'
import { routeGuardContext } from '../contextAPI/AuthContext'
import { useNavigate } from 'react-router-dom'

function Pnf() {
  const {role,authorised} = useContext(routeGuardContext)
  const navigate = useNavigate()
  const backHome = ()=>{
    if(authorised){
     role=="user" ?navigate('/'): navigate('/admin/home')
    }else{
      navigate('/')
    }
  }

  return (
    <>
     <div className='min-h-screen flex flex-col justify-center items-center text-center'>
      <img width={'600px'} src="https://cdn.dribbble.com/userupload/25152143/file/original-19d00f0b43ff1449812b30a9635aaf5d.gif" alt="" />
      <h3 className='text-5xl text-red-400 mb-5'>404</h3>
      <p className='text-5xl text-red-600 mb-5'>PAGE NOT FOUND!!!</p>
      <button onClick={backHome} className='bg-black px-3 py-2 rounded my-3 text-white'>Home</button>
      </div>
    </>
  )
}

export default Pnf
