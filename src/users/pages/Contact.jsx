import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <Header/>
     <div className='md:px-40 p-5'>
    <div className='text-center my-5'>
     <h1 className='text-3xl font-bold mb-5'>Contact Us</h1>
     <p>
      Welcome to our Contact Page!
We’re always here to help you with anything related to your reading journey.
If you have questions about book availability, order status, or payment details, feel free to reach out.
You can also contact us for recommendations, technical issues on the website, or any feedback you’d like to share.
Our team is dedicated to providing quick responses and ensuring you have a smooth and enjoyable shopping experience.
No matter how big or small your query is, we’re just a message away.
Your satisfaction is our priority, and we strive to make your experience with our bookstore convenient, reliable, and pleasant.
Thank you for choosing us!
     </p>
    </div>
    <div className='md:flex justify-evenly items-center my-10'>
   <div className='flex items-center w-75 md:mt-0 mt-5'>
   <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex justify-center items-center bg-gray-200 me-5'>
   <FaLocationDot/>
   </div>
   <p>123 Main Street ,Apt 4B , Anytown,CA 9123</p>
   </div>
    <div className='flex items-center w-75 md:mt-0 mt-5'>
   <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex justify-center items-center bg-gray-200 me-5'>
   <FaPhone/>
   </div>
   <p>9873563653</p>
   </div>
    <div className='flex items-center w-75 md:mt-0 mt-5'>
   <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex justify-center items-center bg-gray-200 me-5'>
   <FaEnvelope/>
   </div>
   <p>contact@bookstore</p>
   </div>
    </div>
    <div className='md:grid grid-cols-2 gap-10 md:px-30 mt-5 md:mt-0'>
   {/* form */}
   <div className='bg-gray-200 p-5'>
  <h1 className='text-xl text-center'>Send me Message</h1>
  <div className='my-3'>
<input type="text" placeholder='Name' className='bg-white p-2 w-full rounded' />
  </div>
  <div className='my-3'>
<input type="text" placeholder='E Mail' className='bg-white p-2 w-full rounded' />
  </div>
  <div className='my-3'>
<input type="text" placeholder='Message' className='bg-white p-2 w-full rounded' />
  </div>
  <div className='mt-5 w-full md:mt-0'>
  <button className='bg-black p-2 w-full text-white flex justify-center items-center'>Send<FaPaperPlane className='ms-2'/></button>
  </div>
   </div>
   {/* map */}
<div className='mt-5 w-full md:mt-0'>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11971.49735905245!2d76.36228135730181!3d10.008034257575483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b62a7688a1d%3A0xea20f6a86d090450!2sInfopark%20Campus%2C%20Kochi%2C%20Kakkanad%2C%20Kerala!5e1!3m2!1sen!2sin!4v1764330372955!5m2!1sen!2sin" width={"100%"} height={"400px"} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    </div>
     </div>
    <Footer/>
    </>
  )
}

export default Contact
