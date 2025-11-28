import React , {useState} from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Books() {
  const [showCategoryList,setShowCategoryList] = useState(false)
  return (
    <>
    <Header/>
    {/* login - book page */}
      <>
      {/*title &  search book */}
      <div className='flex flex-col justify-center items-center my-5'>
     {/* bookstore */}
     <h1 className='text-3xl font-bold my-5'>All Books</h1>
     {/* search box */}
     <div className='flex my-5'>
     <input type="text" placeholder='Search By Title' className='border p-2 border-gray-400 w-100' />
     <button className='bg-black p-2 text-white'>Search</button>
     </div>
     
      </div>
      {/* book & filter grid */}
     <div className='md:grid grid-cols-4 md:px-20 mb-10'>
      {/* filter */}
      <div className='col-span-1'>
        {/* filter - title */}
      <div className='flex justify-between'>
    <h1 className='text-2xl font-semibold'>Filter</h1>
    <button onClick={()=>setShowCategoryList(!showCategoryList)} className='text-2xl md:hidden'><FaBars/></button>
      </div>
      {/* filter option */}
      <div className={showCategoryList?"block":'md:block hidden'}>
     {/* category 1 */}
     <div className='mt-3'>
    <input type="radio" name='filter' id='all' />
    <label htmlFor="all" className='ms-3'>All</label>
     </div>
     {/* book category */}
      <div className='mt-3'>
    <input type="radio" name='filter' id='demo' />
    <label htmlFor="all" className='ms-3'>Category name</label>
     </div>
      </div>
      </div>
     {/* book row */}
     <div className='col-span-3'>
     <div className='md:grid grid-cols-4 mt-5 md:mt-0'>
      {/* book card div 1 */}
  <div className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1evFLmhOTxiqr4-W9w2Mm4FNzhYWkVcOQ6oqmQT5OToIeOVXNJ63Phn90nJdtQ4-cOBI&usqp=CAU" alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
  <h4 className='text-lg'>title</h4>
 <Link to={'/books/id/view'} className='bg-black py-2 px-5 mt-2 text-white'>View</Link>
  </div>
   </div>
     {/* book card div 2 */}
  <div className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1evFLmhOTxiqr4-W9w2Mm4FNzhYWkVcOQ6oqmQT5OToIeOVXNJ63Phn90nJdtQ4-cOBI&usqp=CAU" alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
  <h4 className='text-lg'>title</h4>
 <Link to={'/books/id/view'} className='bg-black py-2 px-5 mt-2 text-white'>View</Link>
  </div>
   </div>
     {/* book card div 3 */}
  <div className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1evFLmhOTxiqr4-W9w2Mm4FNzhYWkVcOQ6oqmQT5OToIeOVXNJ63Phn90nJdtQ4-cOBI&usqp=CAU" alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
  <h4 className='text-lg'>title</h4>
 <Link to={'/books/id/view'} className='bg-black py-2 px-5 mt-2 text-white'>View</Link>
  </div>
   </div>
     {/* book card div 4 */}
  <div className='shadow rounded p-3 mx-4 mb-5 md:mb-0'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1evFLmhOTxiqr4-W9w2Mm4FNzhYWkVcOQ6oqmQT5OToIeOVXNJ63Phn90nJdtQ4-cOBI&usqp=CAU" alt="book" />
  <div className='flex justify-center items-center flex-col mt-4'>
  <h3 className='text-blue-600 font-bold text-lg'>Author</h3>
  <h4 className='text-lg'>title</h4>
 <Link to={'/books/id/view'} className='bg-black py-2 px-5 mt-2 text-white'>View</Link>
  </div>
   </div>
     </div>
     </div>
     </div>
      </>
      {/* not login - book page  */}
      <Footer/>
    </>
  )
}

export default Books
