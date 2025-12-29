import React ,{useEffect, useState} from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import serverURL from '../../services/serverURL'
import { ToastContainer,toast } from 'react-toastify'

function Edit() {
  const [offcanvasStatus,setOffcanvasStatus] = useState(false)
  const [userDetails,setUserDetails] = useState({
    id:"",username:"",password:"",role:"",bio:"",picture:""
  })
  const [confirmPassword,setConfirmPassword] = useState("")
const [existingPicture,setExistingPicture] = useState("")
const [preview,setPreview] = useState("")
const [passwordMatch,setPasswordMatch] = useState(true)

useEffect(()=>{
  if(sessionStorage.getItem("user")){
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio})
    setExistingPicture(user.picture)
  }
},[])
 
const checkPasswordMatch=(data)=>{
  setConfirmPassword(data)
  userDetails.password == data? setPasswordMatch(true):setPasswordMatch(false)
}

const resetForm = ()=>{
 const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio,password:""})
    setExistingPicture(user.picture)
    setPreview("")
    setConfirmPassword("")
    setPasswordMatch(true)
}

const handleProfileUpdate = async()=>{
  const {username,password,bio,role,id,picture} = userDetails
  if(!username || !password || !bio ||!confirmPassword){
   toast.info("please fill the form completely!!!")
  }else{
  alert("api call")
  }
}

const handleUploadPicture = (imgFile)=>{
  setUserDetails({...userDetails,picture:imgFile})
  const url= URL.createObjectURL(imgFile)
  setPreview(url)
}

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
          <input onChange={(e=>handleUploadPicture(e.target.files[0]))} type="file" id='uploadImg' hidden />
         {
          existingPicture?
           <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={preview?preview:existingPicture.startsWith("https://lh3.googleusercontent.com/")?existingPicture:`${serverURL}/uploads/${existingPicture}`} alt="profile" />
           :
            <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={preview?preview:"https://static.thenounproject.com/png/556457-200.png"} alt="profile" />
         }
        </label>
        <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-1 text-white rouded'  ><FaPen/></button>
        {/* name */}
        <div className='mt-10 mb-3 w-full px-5'>
       <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})}  type="text" placeholder='username' className='border border-gray-200 p-2 rounded w-full' />
        </div>
        
        {/* password */}
        <div className='mt-3 mb-3 w-full px-5'>
       <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='New password' className='border border-gray-200 p-2 rounded w-full' />
        </div>
         <div className='mt-3 mb-3 w-full px-5'>
       <input value={confirmPassword} onChange={e=>checkPasswordMatch(e.target.value)} type="text" placeholder='confirm password' className='border border-gray-200 p-2 rounded w-full' />
        </div>
         {
          !passwordMatch && <div className='mb-3 w-full px-5 font-bold text-red-600 text-xs'>
         confirm password must watch with new password
        </div>}
        {/* bio */}
         <div className='mt-3 mb-3 w-full px-5'>
       <textarea value={userDetails.bio} onChange={e=>setUserDetails({...userDetails,bio:e.target.value})} type="text" placeholder='Bio'  rows={2} className='border border-gray-200 p-2 rounded w-full' />
        </div>
       
        {/* button */}
       <div className=' mb-3 flex justify-end w-full mt-5 px-5'>
       <button onClick={resetForm} className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white  hover:border-red-600 hover:text-red-600'>RESET</button>
       <button onClick={handleProfileUpdate} className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white  hover:border-green-600 hover:text-green-600 mx-2' disabled={!passwordMatch?true:false}>UPDATE</button>
        </div>

       </div>
        </div>
      </div>
      }
       {/* toast */}
           <ToastContainer
      position="top-center"
      autoClose={2000}
      theme="colored" />
    </div>
  )
}

export default Edit
