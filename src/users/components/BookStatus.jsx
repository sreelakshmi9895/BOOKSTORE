import React, { useEffect, useState } from 'react'
import { getAllUserBooksAPI, removeBookAPI } from '../../services/allAPI'


function BookStatus() {

  const[userBooks,setUserBooks]= useState([])
  console.log(userBooks);

  useEffect(()=>{
    getUserUploadBooks()
  },[])
  

  const getUserUploadBooks = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await getAllUserBooksAPI(reqHeader)
      if(result.status==200){
        setUserBooks(result.data)
      }else{
        console.log(result);
      }
    }
  }

  const deleteBook = async(id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await removeBookAPI(id,reqHeader)
      if(result.status==200){
        getUserUploadBooks()
      }else{
        console.log(result);
      }
    }
  } 

  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate  */}
     {
      userBooks?.length>0?
      userBooks?.map(book=>(
        <div className='bg-gray-200 p-5 rounded'>
   <div className='md:grid grid-cols-[3fr_1fr]'>
    <div>
   <h2 className='text-2xl'>{book?.title}</h2>
   <h3 className='text-xl'>{book?.author}</h3>
   <h4  className='text-lg text-red-500'>${book?.discountPrice}</h4>
   <p className='text-justify'>{book?.abstract}</p>
   <div className='flex mt-5'>
    {/* pending */}
    {/* approved */}
    {/* soldout */}
   {
    book?.status=="pending"?
    <img width={'90px'} height={'90px'}  src="https://thumbs.dreamstime.com/b/red-pending-stamp-stars-circles-isolated-white-background-circular-word-diagonally-across-408787079.jpg" alt="pending" />
    :
    book?.status=="approved"?
     <img width={'90px'} height={'90px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwPzwjd7slg0dR4uJ7YjQx2sYncuHgFevng&s" alt="approved" />
    :
    <img  width={'90px'} height={'90px'} src="https://w7.pngwing.com/pngs/568/351/png-transparent-computer-icons-sold-out-miscellaneous-text-logo.png" alt="" />
   }

   </div>
    </div>
   
  <div className='px-4 mt-4 md:mt-0'>
       <img className='w-50' src={book?.imageURL} alt="" />
       <div className='flex justify-end'>
        <button onClick={()=>deleteBook(book?._id)} className='p-2 bg-red-600 txt-white mt-5'>DELETE</button></div>
  </div>
      </div>
    </div>
      ))
      :
      <div className='text-center my-5 font-bold'>
        Books are not uploaded yet!!!
      </div>
     } 
    </div>
  )
}

export default BookStatus
