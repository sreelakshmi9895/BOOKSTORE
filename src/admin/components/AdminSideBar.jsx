import React from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center'>
      {/* admin image */}
      <div className='my-10 justify-center items-center'><img width={'100px'} height={'100px'} src="https://img.freepik.com/premium-photo/young-confident-handsome-young-man-full-suit-looking-camera-keeping-arms-crossed-while-standing-against-grey-background_425904-39500.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></div>
      {/* name */}
      <h1 className='text-xl font-bold  mb-5'>name</h1>
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
