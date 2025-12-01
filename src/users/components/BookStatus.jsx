import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate  */}
      <div className='bg-gray-200 p-5 rounded'>
   <div className='md:grid grid-cols-[3fr_1fr]'>
    <div>
   <h2 className='text-2xl'>Title</h2>
   <h3 className='text-xl'>Author</h3>
   <h4  className='text-lg text-red-500'>$ 400</h4>
   <p className='text-justify'>Abstract</p>
   <div className='flex mt-5'>
    {/* pending */}
  <img width={'90px'} height={'90px'}  src="https://thumbs.dreamstime.com/b/red-pending-stamp-stars-circles-isolated-white-background-circular-word-diagonally-across-408787079.jpg" alt="pending" />
  {/* approved */}
  <img width={'90px'} height={'90px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwPzwjd7slg0dR4uJ7YjQx2sYncuHgFevng&s" alt="approved" />
  {/* soldout */}
  <img  width={'90px'} height={'90px'} src="https://w7.pngwing.com/pngs/568/351/png-transparent-computer-icons-sold-out-miscellaneous-text-logo.png" alt="" />
   </div>
    </div>
   
  <div className='px-4 mt-4 md:mt-0'>
       <img className='w-50' src="https://speakingtigerbooks.com/wp-content/uploads/2024/10/Everyday-Reading_Final.jpg" alt="" />
       <div className='flex justify-end'><button className='p-2 bg-red-600 txt-white mt-5'>DELETE</button></div>
  </div>
      </div>
    </div>
    </div>
  )
}

export default BookStatus
