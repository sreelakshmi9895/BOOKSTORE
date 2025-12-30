import React,{useEffect, useState} from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { getAllAdminBooksAPI, getAllUsersAPI, updateBookStatusAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import { ToastContainer,toast } from 'react-toastify'


function AdminCollections() {
  const [tab,setTab] = useState(1)
  const [allBooks,setAllBooks] = useState([])
  const [allUsers,setAllUsers] = useState([])

  console.log(allBooks);
  console.log(allUsers);
  

  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      if(tab == 1){
        getAllBooks(token)
      }else if(tab==2){
        getAllUsers(token)
      }
    }
  },[tab])
  


  const getAllBooks = async (token)=>{
    const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllAdminBooksAPI(reqHeader)
      if(result.status==200){
        setAllBooks(result.data)
      }else{
        console.log(result);
        
      }
  }

  const getAllUsers = async (token)=>{
    const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await  getAllUsersAPI(reqHeader)
      if(result.status==200){
        setAllUsers(result.data)
      }else{
        console.log(result);
        
      }
  }

  const updateBookStatus = async (id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await updateBookStatusAPI(id,reqHeader)
      if(result.status==200){
        toast.success("Book status updated!!!")
        getAllBooks(token)
      }else{
        console.log(result);
        
      }
    }
  }

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
           {
            allBooks?.length>0?
            allBooks?.map(book=>(
           <div key={book?._id} className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src={book?.imageURL} alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>{book?.author}</h3>
  <h4 className='text-lg'>{book?.title}</h4>
  <h4> ${book?.price} </h4>
  <div className='grid mt-3 w-full'>
    {
      book?.status != "approved"?
      <button onClick={()=>updateBookStatus(book?._id)} className='bg-green-600 p-2 text-white'>APPROVE</button>
      :
      <img width={'80px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oBYRIuhqHFcHUt_qMVSGOHzuqA5gbBafwQ&s" alt="" />
    }
    </div>
  </div>
           </div>
            ))
            :
            <p>Loading...</p>
           }
           
          </div>
          }
          {
            tab==2 &&
           <div className='md:grid grid-cols-3 w-full my-5'>
           {/* duplicate users card */}
          {
            allUsers?.length>0?
            allUsers?.map(user=>(
               <div key={user?._id} className='rounded bg-gray-200 p-3 m-2 text-wrap'>
          <p className='text-red-600 font-bold text-sm'>ID : {user?._id}</p>
          <div className='flex  text-wrap mt-2'>
            {/* user image */}
    <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src={user?.picture?user?.picture.startsWith("https://lh3.googleusercontent.com/")?user?.picture:`${serverURL}/uploads/${user.picture}`:"https://mindergyvr.com/wp-content/uploads/2025/06/user-dummy-img-1.jpg"} alt="" />
    {/* content */}
    <div className='ms-5' >
      <h4 className='fobt-bold text-2xl text-blue-800'>{user?.username}</h4>
      <p>{user?.email}</p>
      </div>
          </div>
           </div>
            ))
            :
            <p>Loading...</p>
          }
           
           </div>
          }
        
          </div>
          {/* toast */}
               <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="colored" />
       </div>
      
      <Footer/>
    </>
  )
}

export default AdminCollections
