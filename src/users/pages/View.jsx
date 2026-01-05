import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'
import serverURL from '../../services/serverURL'
import { purchaseBookAPI, viewBookAPI } from '../../services/allAPI'
import {loadStripe} from '@stripe/stripe-js';

function View() {
  const { id } = useParams()
  const [book, setBook] = useState({})
  const [modalStatus,setModalStatus] = useState(false)

  // console.log(book);
  

  useEffect(() => {
    getBookDetails()
  }, [id])


  const getBookDetails = async () => {
  const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await viewBookAPI(reqHeader,id)
      if (result.status === 200) {
        setBook(result.data)
      }else{
        console.log(result);
        
      }
    }
  }

const makePayment = async () => {
  const stripe = await loadStripe('pk_test_51SkSthGYPN23dmK7IfP3kPSVlsJ9BITei0OXvUaieWVQGOgCcunCBEuR5pZe1EtzNxPwGXEaNUeoG8X19kt5RCU700CME0nDZJ')

  const token = sessionStorage.getItem("token")

  if (token) {
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    // IMPORTANT: send only the ID here
    const result = await purchaseBookAPI(book._id, reqHeader)

    if (result.status === 200) {
      const { checkoutURL } = result.data
      window.location.href = checkoutURL
    } else {
      console.log(result)
    }
  }
}

  return (
    <>
    <Header/>
      <div className='md:m-10 m-5'>
  <div className='shadow border p-5 border-gray-200'>
 <div className='md:grid grid-cols-4 gap-x-10'>
{/* image */}
<div className='col-span-1'>
<img className='w-full' src={book?.imageURL} alt="book"/>

</div>
{/* book details column */}
<div className='col-span-3'>
<div className='flex justify-between items-center mt-5 md:mt-0'>
<h1 className='text-2xl font-black'>{book?.title}</h1>
<button onClick={()=>setModalStatus(true)} className='text-gray-400'><FaEye/></button>
</div>
<p className='my-3 text-blue-700'>{book?.author}</p>
<div className='md:grid grid-cols-3 gap-5 my-10'>
<p className='font-bold'>{book?.publisher}</p>
<p className='font-bold'>{book?.language}</p>
<p className='font-bold'>{book?.pages}</p>
<p className='font-bold'> ₹{book?.price}</p>
<p className='font-bold'>{book?.isbn}</p>
<p className='font-bold'>{book?.category}</p>
<p className='font-bold'>{book?.sellerMail}</p>
</div>
<div className='md:my-10 my-4'>
  <p className='font-bold text-lg'>
   {book?.abstract}
  </p>
</div>
<div className='flex justify-end'>
<Link to={'/books'} className='bg-blue-700 p-2 text-white flex-items-center rounded'><FaBackward className='me-2'/>Back</Link>
<button onClick={makePayment} className='bg-green-700 p-2 rounded text-white ms-5'>Buy $ {book?.discountPrice}</button>
</div>
</div>
 </div>
  </div>
      </div>
      {/* modal */}
     { modalStatus &&
      <div onClick={()=>setModalStatus(false)} className='relative z-10'>
     <div className="bg-gray-500/75 fixed inset-0">
   <div className='flex justify-center min-h-screen'>
  <div className='bg-white rounded-2xl w-100 md:w-250 w-100'>
 {/* modal title */}
 <div className='bg-black text-white p-3 flex justify-between  items-center'>
 <h3>Books Image</h3>
 <FaX onClick={()=>setModalStatus(false)}/>
 </div>
 {/* modal body */}
 <div className='relative p-5'>
<p className='text-blue-600 flex items-center'><FaCamera className='me-2'/>Camera clicks of the book in the hand of seller</p>
{/* book images */}
<div className='md:flex flex-wrap my-4'>
{
  book?.uploadImages?.map(fileName=>(
<img key={fileName} className='md:w-75 w-25 md:me-2 mb-3  md:mb-0' src={`${serverURL}/uploads/${fileName}`} alt="book" />
  ))
}
</div>
 </div>
  </div>
   </div>
     </div>
      </div>
    }
      <Footer/>
    </>
  )
}

export default View
