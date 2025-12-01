import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { FaPen, FaUser } from 'react-icons/fa'

function AdminProfile() {
  return (
     <>
    <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
       <AdminSideBar/>
        </div>
       <div className='col-span-4 p-10'> 
        <h1 className='text-center my-5 font-bold text-3xl'>Settings</h1>
        <div className='md:grid grid-cols-2 gap-10'>
      {/* text */}
      <p className='text-justify mb-5'>The Admin Settings section of the Bookstore Management System provides a centralized space for administrators to manage and customize the entire platform. From updating store information and managing user accounts to configuring inventory rules, payment options, and notification settings, the admin panel ensures complete control over the system. This demo highlights how an admin can efficiently navigate the dashboard, adjust preferences, manage book categories, track activities, and maintain overall site performance with ease. It is designed to be user-friendly, secure, and highly customizable to meet the needs of any modern bookstore.
        <br />
        <br />
        <FaUser style={{marginLeft:'20px'}}/><div className='font-bold'>Profile Settings</div> 
   Profile Information: Update admin name, email address, and profile picture.
   Login Security: Change password or enable Two-Factor Authentication (2FA) for added protection.
   Notification Preferences: Choose which alerts to receive, such as order updates or system messages.
      </p>
      
      {/* form */}
       <div className="flex justify-center items-center flex-col bg-blue-100 p-5 rounded">
        {/* image */}
        <label htmlFor="uploadImg" >
          <input type="file" id='uploadImg' hidden />
          <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/young-confident-handsome-young-man-full-suit-looking-camera-keeping-arms-crossed-while-standing-against-grey-background_425904-39500.jpg?semt=ais_hybrid&w=740&q=80" alt="profile" />
        </label>
        <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-2 text-white rouded'  ><FaPen/></button>
        {/* name */}
        <div className='mt-10 mb-3 w-full px-5'>
       <input type="text" placeholder='username' className='border bg-white p-2 rounded w-full' />
        </div>
        
        {/* password */}
        <div className='mt-3 mb-3 w-full px-5'>
       <input type="password" placeholder='New password' className='border bg-white p-2 rounded w-full' />
        </div>
         <div className='mt-3 mb-3 w-full px-5'>
       <input type="text" placeholder='confirm password' className='border bg-white p-2 rounded w-full' />
        </div>
        
       
        {/* button */}
       <div className=' mb-3 flex justify-end w-full mt-5 px-5'>
       <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white  hover:border-red-600 hover:text-red-600'>RESET</button>
       <button className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white  hover:border-green-600 hover:text-green-600 mx-2'>UPDATE</button>
        </div>

       </div>
        </div>
       </div>
        </div>
      <Footer/>
    </>
  )
}

export default AdminProfile
