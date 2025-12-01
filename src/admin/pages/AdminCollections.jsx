import React,{useState} from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'

function AdminCollections() {
  const [tab,setTab] = useState(1)
  return (
    <>
    <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
       <AdminSideBar/>
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='my-5 text-2xl text-center font-bold text-3xl'>All Collections</h1>
          {/* tabs */}
          <div className='flex my-10 justify-center items-center'>
             <p onClick={()=>setTab(1)} className={tab==1?'font-bold  border-gray-200 text-xl border-t border-l border-r p-3 text-blue-300 cursor-pointer' :'font-bold  border-gray-200 text-xl border-b p-3' }>Books</p>
            <p onClick={()=>setTab(2)} className={tab==2?'font-bold  border-gray-200 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer' :'font-bold  border-gray-200 text-xl border-b p-3' }>Users</p>
          </div>
        {/* tab contents */}
        {
          tab==1 && 
          <div className='md:grid grid-cols-4 w-full my-5'>
           {/* duplicate book card */}
           <div className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1evFLmhOTxiqr4-W9w2Mm4FNzhYWkVcOQ6oqmQT5OToIeOVXNJ63Phn90nJdtQ4-cOBI&usqp=CAU" alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
  <h4 className='text-lg'>title</h4>
  <h4> $ price</h4>
  <div className='grid mt-3 w-full'><button className='bg-green-600 p-2 text-white'>APPROVE</button></div>
  </div>
           </div>
           {/* duplicate book card */}
           <div className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1evFLmhOTxiqr4-W9w2Mm4FNzhYWkVcOQ6oqmQT5OToIeOVXNJ63Phn90nJdtQ4-cOBI&usqp=CAU" alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
  <h4 className='text-lg'>title</h4>
  <h4> $ price</h4>
  <div className='grid mt-3 w-full'><button className='bg-green-600 p-2 text-white'>APPROVE</button></div>
  </div>
           </div>
           {/* duplicate book card */}
           <div className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1evFLmhOTxiqr4-W9w2Mm4FNzhYWkVcOQ6oqmQT5OToIeOVXNJ63Phn90nJdtQ4-cOBI&usqp=CAU" alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
  <h4 className='text-lg'>title</h4>
  <h4> $ price</h4>
  <div className='grid mt-3 w-full'><button className='bg-green-600 p-2 text-white'>APPROVE</button></div>
  </div>
           </div>
           {/* duplicate book card */}
           <div className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1evFLmhOTxiqr4-W9w2Mm4FNzhYWkVcOQ6oqmQT5OToIeOVXNJ63Phn90nJdtQ4-cOBI&usqp=CAU" alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
  <h4 className='text-lg'>title</h4>
  <h4> $ price</h4>
  <div className='grid mt-3 w-full'><button className='bg-green-600 p-2 text-white'>APPROVE</button></div>
  </div>
           </div>
           
          </div>
          }
          {
            tab==2 &&
           <div className='md:grid grid-cols-3 w-full my-5'>
           {/* duplicate users card */}
           <div className='rounded bg-gray-200 p-3 m-2 text-wrap'>
          <p>ID :3hir85ydui</p>
          <div className='flex  text-wrap mt-2'>
            {/* user image */}
    <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/young-confident-handsome-young-man-full-suit-looking-camera-keeping-arms-crossed-while-standing-against-grey-background_425904-39500.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
    {/* content */}
    <div className='ms-5' >
      <h4 className='fobt-bold text-2xl text-blue-800'>name</h4>
      <p>demo@gmail.com</p>
      </div>
          </div>
           </div>
           
           </div>
          }
        
          </div>
       </div>
      
      <Footer/>
    </>
  )
}

export default AdminCollections
