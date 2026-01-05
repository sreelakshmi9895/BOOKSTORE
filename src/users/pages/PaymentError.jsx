import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa6'


function PaymentError() {
  return (
    <>
<Header/>
      <div className='min-h-screen flex justify-center items-center'>
    <div className='md:grid grid-cols-2 gap-10'>
    <div>
        <h1 className='md:text-5xl text-blue-800'>Sorry!!!Payment Failed...</h1>
        <h2 className='my-10'>
 We apologize for the inconvience caused and appreciate you visit to Bookstore...
        </h2>
        <Link to={'/books'} className='flex items-center bg-red-600 p-2 w-60 text-white'><FaBackward className='me-2'/>Explore More Books!!!</Link>
    </div>
    <div>
        <img src="https://bitspanindia.com/qw/main/assest/img/failed.gif" alt="" style={{marginTop:'-20px'}} />
    </div>
    </div>
      </div>
      <Footer/>
    </>
  )
}

export default PaymentError
