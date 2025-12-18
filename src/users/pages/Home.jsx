import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link , useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { getHomePageBooksAPI } from '../../services/allAPI'


function Home() {
  const navigate = useNavigate()
  const [searchKey,setSearchKey] = useState("")
  const [homeBooks,setHomeBooks] = useState([])


  console.log(homeBooks);
  
  useEffect(()=>{
    getHomeBooks()
  },[])

  const getHomeBooks = async()=>{
    const result = await getHomePageBooksAPI()
    // console.log(result);
    if(result.status==200){
      setHomeBooks(result.data)
    }else{
      console.log(result);
      
    }
  }

  const handleSearch = ()=>{
    if(!searchKey){
     toast.warning("please provide a Book title here!!!")
    }else if(!sessionStorage.getItem("token")){
      toast.warning("please Login to search Book!!!")
      setTimeout(()=>{
        navigate('/login')
      },2500)
    }else if(sessionStorage.getItem("token") && searchKey){
      navigate('/books')
    }else{
      toast.error("Something went wrong!!!")
    }
  }

  return (
    <>
    <Header/>
     <div>
      {/* landing part-search */}
      <div style={{height:'500px'}} className='flex justify-center items-center flex-col bg-[url(/bg-image-book.jpg)] bg-cover bg-center text-white'>
      <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.5)'}} className='w-full flex justify-center items-center flex-col '>
     <h1 className='text-5xl font-bold mb-2'>Wonderful Gifts</h1>
     <p>Gift Your Family and Friends a Book </p>
     {/* search */}
     <div className='mt-9 flex items-center '>
  <input onChange={e=>setSearchKey(e.target.value)} type="text" className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2' placeholder='Search Books Here' /><button onClick={handleSearch} className='text-gray-500' style={{marginLeft:'-40px'}}><FaSearch/></button>
     </div>
      </div>
      </div>
      {/* new arrival */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
   <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
   <h2 className='text-2xl'>Explore Our Latest Collections</h2>
   {/* books row */}
   <div className='md:grid grid-cols-4 w-fill mt-10'>
    {/* duplicate book card div */}
   {
    homeBooks?.length>0?
    homeBooks?.map(book=>(
  <div key={book?._id} className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src={book?.imageURL} alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>{book?.author}</h3>
  <h4 className='text-lg'>{book?.title}</h4>
  <h4> $ {book?.discountPrice}</h4>
  </div>
   </div>
    ))
    :
    <p className='font-bold'>Loading....</p>
   }
   </div>
   {/* all books link */}
   <div className='text-center mt-20'>
     <Link to={'/books'} className='p-3 bg-black text-white'>Explore More...</Link>
   </div>
      </section>
      {/* author */}
      <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>FEATURED AUTHORS</h1>
     <h2 className='text-xl'>Captivates With Every Word</h2>
     <p className='text-justify'>Our bookstore proudly features a diverse community of authors whose words spark imagination and inspire readers of all ages. Each writer brings a unique voice and perspective, offering stories that range from thrilling adventures to heartfelt journeys and thought-provoking ideas. Whether they are bestselling names or emerging talents, our authors share one thing in common — a deep passion for creating meaningful literature.
     Explore their profiles to learn more about their background, writing style, and the books that shaped their journey. From timeless classics to modern masterpieces, every author contributes something special to our collection. Discover their stories, connect with their creativity, and find the next book that speaks to you.</p>
     <p className='text-justify'>We believe that every great book begins with a great author, and our goal is to bring you closer to the minds behind the manuscripts. Through their words, ideas, and experiences, these authors create worlds that stay with us long after the last page. Enjoy exploring their journeys and celebrating the art of storytelling.</p>
      </div>
      {/* author image */}
      <div className='p-5 justify-center items-center'>
    <img src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="" />
      </div>
      </section>
      {/* testimony */}
       <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
   <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
   <h2 className='text-2xl'>See What Others Are Saying</h2>
   <div className='my-5 flex justify-center items-center flex-col'>
    {/* user image */}
    <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/young-confident-handsome-young-man-full-suit-looking-camera-keeping-arms-crossed-while-standing-against-grey-background_425904-39500.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
    {/* feedback */}
    <p className='mt-5'>Sidharth Raveendran Pillai</p>
    <p className='text-justify mt-4'>“I really enjoyed using this bookstore website. It’s easy to browse, the design is clean, and I was able to find the books I wanted without any confusion. I also liked how the author details were displayed — it helped me discover new writers. Overall, it’s a very smooth and user-friendly platform.”</p>
   </div>
      </section>
     </div>
      <ToastContainer
     position="top-center"
     autoClose={2000}
     theme="colored" />
    <Footer/>
    </>
  )
}

export default Home
