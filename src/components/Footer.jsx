import React from 'react'
import { FaArrowRight, FaInstagram,FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div style={{backgroundColor:'#19191cff'}} className='p-5 text-white'>
      <div className='flex flex-col md:flex-row justify-evenly gap-10'>
      <div className="md:w-1/3" >
        <h1>ABOUT US</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat eius at saepe sunt repudiandae laboriosam nemo? Earum magni voluptas eos distinctio molestiae a maxime repellendus accusantium mollitia placeat, laudantium ullam!</p>
      </div>
  
      <div className="md:w-1/3" >
        <h1>NEWS LETTER</h1>
        <p>Stay updated with latest trends</p>
        <div className='flex border rounded justify-between bg-white'>
       <input type="text" placeholder='Email ID' className='px-3 py-2 rounded-l-md text-black'/>
       <button className='btn bg-yellow-500 w-10'><FaArrowRight className='text-center' /></button>
        </div>
      </div>
  
      <div className="md:w-1/3">
        <h1>FOLLOW US</h1>
        <p>Let us be social</p>
        <div className='flex'>
          <a href=""><FaFacebook /></a>
          <a href=""><FaTwitter className='mx-2' /></a>
          <a href=""><FaInstagram /></a>
        </div>
      </div>
   
      </div>
    </div>
  )
}

export default Footer

