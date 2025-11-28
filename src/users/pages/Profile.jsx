import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'


function Profile() {
  const [tab,setTab] = useState(1)
  return (
    <>
      <Header/>
      <div style={{height:'200px'}} className='bg-black'></div>
      {/* profile image */}
      <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className='bg-white p-3'>
<img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/young-confident-handsome-young-man-full-suit-looking-camera-keeping-arms-crossed-while-standing-against-grey-background_425904-39500.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </div>
      {/* name with edit book */}
      <div className='md:flex justify-between items-center md:px-20 my-5'>
     <h1 className='text-2xl font-bold flex items-center'>Username<FaCircleCheck className='text-blue-400 ms-5'/></h1>
      <Edit/>
      </div>
      <p className='text-justify md:px-20 px-5 my-5'>
      Welcome to your User Profile!
This section gives you a personalized space to manage your bookstore account. Here, you can update your personal details, view your order history, track current orders, save your favorite books, and manage your wishlist.
Your profile helps us offer you a smoother, faster, and more customized reading experience.
      </p>
      {/* tabs with content */}
      <div className='md:px-40'>
   <div className='flex justify-center items-center my-8 font-medium text-lg'>
  <p onClick={()=>setTab(1)} className={tab==1?'text-blue-400 border-gray-200 border-t border-l border-r cursor-pointer p-4':' border-gray-200 border-b  cursor-pointer p-4'}>Sell Books</p>
  <p onClick={()=>setTab(2)}  className={tab==2?'text-blue-400 border-gray-200 border-t border-l border-r cursor-pointer p-4':' border-gray-200 border-b  cursor-pointer p-4'} >Book Status</p>
  <p onClick={()=>setTab(3)} className={tab==3?'text-blue-400 border-gray-200 border-t border-l border-r cursor-pointer p-4':' border-gray-200 border-b  cursor-pointer p-4'}>Purchase History</p>
   </div>
   {/* contents */}
   {
    tab==1 &&
    <SellBook/>
    }
   {
    tab==2 &&
   <BookStatus/>
    }
   {
    tab==3 &&
    <Purchase/>
    }
      </div>
      <Footer/>
    </>
  )
}

export default Profile
