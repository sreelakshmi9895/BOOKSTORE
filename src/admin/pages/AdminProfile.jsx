import React,{useState,useEffect} from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { FaPen, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { editUserAPI } from '../../services/allAPI'
import { ToastContainer,toast } from 'react-toastify'

function AdminProfile() {
const [userDetails, setUserDetails] = useState({
        id: "", username: "", password: "", role: "", bio: "", picture: ""
    })
    const [confirmPassword, setConfirmPassword] = useState("")
    const [existingPicture, setExistingPicture] = useState("")
    const [preview, setPreview] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true)
    const navigate = useNavigate()

  useEffect(() => {
      if (sessionStorage.getItem("user")) {
          const user = JSON.parse(sessionStorage.getItem("user"))
          setUserDetails({ ...userDetails, id: user._id, username: user.username, role: user.role, bio: user.bio })
          setExistingPicture(user.picture)
      }
  }, [])

  const handleUploadPicture = (imgFile) => {
        setUserDetails({ ...userDetails, picture: imgFile })
        const url = URL.createObjectURL(imgFile)
        setPreview(url)
    }
   
    const checkPasswordMatch = (data) => {
        setConfirmPassword(data)
        userDetails.password == data ? setPasswordMatch(true) : setPasswordMatch(false)
    }


     const resetForm = () => {
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({ ...userDetails, id: user._id, username: user.username, role: user.role, bio: user.bio, password: "" })
        setExistingPicture(user.picture)
        setPreview("")
        setConfirmPassword("")
        setPasswordMatch(true)
    }

const handleProfileUpdate = async () => {
const { username, password, role, id, picture } = userDetails
if (!username || !password || !confirmPassword) {
toast.info("Please fill the form completely!!!")
} else {
const token = sessionStorage.getItem("token")
if (token) {
    const reqHeader = {
        'Authorization': `Bearer ${token}`
    }
    const reqBody = new FormData()
    for(let key in userDetails){
        if(key != "picture"){
            reqBody.append(key,userDetails[key])
        }else{
            preview?reqBody.append("picture",picture):reqBody.append("picture",existingPicture)
        }
    }
    const result = await editUserAPI(id,reqBody,reqHeader)
    if(result.status==200){
        toast.success("Profile updated successfully...Please login with new password!!!")
        setTimeout(()=>{
            navigate('/login')
        },2000)
    }else{
        console.log(result);
        toast.error("Something went wrong!!!")
    }
}
}
}


  return (
     <>
    <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
       <AdminSideBar/>
        </div>
       <div className='col-span-4 p-10'> 
        <h1 className='text-center my-5 font-bold text-3xl'>Settings</h1>
        <div className='md:grid grid-cols-2 gap-10'>
      {/* text */}
      <p className='text-justify mb-5'>The Admin Settings section of the Bookstore Management System provides a centralized space for administrators to manage and customize the entire platform. From updating store information and managing user accounts to configuring inventory rules, payment options, and notification settings, the admin panel ensures complete control over the system. This demo highlights how an admin can efficiently navigate the dashboard, adjust preferences, manage book categories, track activities, and maintain overall site performance with ease. It is designed to be user-friendly, secure, and highly customizable to meet the needs of any modern bookstore.
        <br />
        <br />
        <FaUser style={{marginLeft:'20px'}}/><div className='font-bold'>Profile Settings</div> 
   Profile Information: Update admin name, email address, and profile picture.
   Login Security: Change password or enable Two-Factor Authentication (2FA) for added protection.
   Notification Preferences: Choose which alerts to receive, such as order updates or system messages.
      </p>
      
      {/* form */}
       <div className="flex justify-center items-center flex-col bg-blue-100 p-5 rounded">
        {/* image */}
         <label htmlFor="uploadImg">
      <input onChange={e => handleUploadPicture(e.target.files[0])} type="file" id='uploadImg' hidden />
      {
  existingPicture ? (
    <img
      style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      src={
        preview
          ? preview
          : existingPicture.startsWith("https://lh3.googleusercontent.com/")
            ? existingPicture
            : `${serverURL}/uploads/${existingPicture}`
      }
      alt="profile"
    />
  ) : (
    <img
      style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      src={
        preview
          ? preview
          : "https://static.vecteezy.com/system/resources/previews/020/213/738/non_2x/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg"
      }
      alt="profile"
    />
  )
}
 <button className='bg-yellow-400 p-2 text-white rounded mb-5' style={{ marginTop: '-20px' }}><FaPen /></button>

  </label>
        
        {/* name */}
  <div className=" mb-3 w-full px-5">
      <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='border border-gray-800 p-2 rounded w-full' />
  </div>
  {/* password */}
  <div className="mb-3 w-full px-5">
      <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder='New Password' className='border border-gray-800 p-2 rounded w-full' />
  </div>
<div className="mb-3 w-full px-5">
    <input value={confirmPassword} onChange={e => checkPasswordMatch(e.target.value)} type="password" placeholder='Confirm Password' className='border border-gray-800 p-2 rounded w-full' />
</div>
{
    !passwordMatch && <div className="mb-3 w-full px-5 text-red-600 text-xs">
        *Confirm password must match with new password
    </div>
}
        
       
        {/* button */}
       <div className=' mb-3 flex justify-end w-full mt-5 px-5'>
       <button onClick={resetForm} className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white  hover:border-red-600 hover:text-red-600'>RESET</button>
       <button onClick={handleProfileUpdate} className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white  hover:border-green-600 hover:text-green-600 mx-2 disabled={!passwordMatch ? true : false}'>UPDATE</button>
        </div>

       </div>
        </div>
       </div>
       {/* toast */}
            <ToastContainer
       position="top-center"
       autoClose={2000}
       theme="colored" />
        </div>
      <Footer/>
    </>
  )
}

export default AdminProfile
