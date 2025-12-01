import React ,{useState} from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offcanvasStatus,setOffcanvasStatus] = useState(false)
  return (
    <div>
      <button onClick={()=>setOffcanvasStatus(true)} className='flex items-center text-blue-600 border p-2 rounded hover:text-white hover:bg-blue-600'>Edit<FaEdit/></button>
      {/* offcanvas */}
      {
        offcanvasStatus && 
        <div>
        <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
        </div>
        <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
     {/* header */}
     <div className="bg-black p-3 flex justify-between text-white">
      <h3 className='text-lg'>Update Profile</h3>
      <button onClick={()=>setOffcanvasStatus(false)}><FaX/></button>
     </div>
     {/* body */}
       <div className="flex justify-center items-center flex-col mb-5 mt-10">
        {/* image */}
        <label htmlFor="uploadImg" >
          <input type="file" id='uploadImg' hidden />
          <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/young-confident-handsome-young-man-full-suit-looking-camera-keeping-arms-crossed-while-standing-against-grey-background_425904-39500.jpg?semt=ais_hybrid&w=740&q=80" alt="profile" />
        </label>
        <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-2 text-white rouded'  ><FaPen/></button>
        {/* name */}
        <div className='mt-10 mb-3 w-full px-5'>
       <input type="text" placeholder='username' className='border border-gray-200 p-2 rounded w-full' />
        </div>
        
        {/* password */}
        <div className='mt-3 mb-3 w-full px-5'>
       <input type="password" placeholder='New password' className='border border-gray-200 p-2 rounded w-full' />
        </div>
         <div className='mt-3 mb-3 w-full px-5'>
       <input type="text" placeholder='confirm password' className='border border-gray-200 p-2 rounded w-full' />
        </div>
        {/* bio */}
         <div className='mt-3 mb-3 w-full px-5'>
       <textarea type="text" placeholder='Bio'  rows={3} className='border border-gray-200 p-2 rounded w-full' />
        </div>
       
        {/* button */}
       <div className=' mb-3 flex justify-end w-full mt-5 px-5'>
       <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white  hover:border-red-600 hover:text-red-600'>RESET</button>
       <button className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white  hover:border-green-600 hover:text-green-600 mx-2'>UPDATE</button>
        </div>

       </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Edit
