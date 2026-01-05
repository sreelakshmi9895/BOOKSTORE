import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPI'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { routeGuardContext } from '../contextAPI/AuthContext';


function Auth({ insideRegister }) {

  const {role,setAuthorised} = useContext(routeGuardContext)
  const navigate = useNavigate()
  const [viewPassword, setViewPassword] = useState(false)

  // store data from form
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: ""
  })
  //console.log(userDetails);


  const handleRegister = async (e) => {
    e.preventDefault()
    const { username, email, password } = userDetails
    if (username && email && password) {
      //  toast.success("API Call")
      try {
        const result = await registerAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Register successfully....please Login to Bookstore!!!")
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/login')
        }
        else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/login')
        } else {
          console.log(result);
          toast.error("Something went wrong")
          setUserDetails({ username: "", email: "", password: "" })
        }
      } catch (err) {
        console.log(err);

      }
    } else {
      toast.info("please fill the form completely!!!")
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userDetails
    if (email && password) {
      //toast.success("API Call")
      try {
        //api call
        const result = await loginAPI({
  email: userDetails.email,
  password: userDetails.password
})

        console.log(result);
        if (result.status == 200) {
          toast.success("Login Successfull!!!")
          sessionStorage.setItem("token", result.data.token)
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          setAuthorised(true)
          setTimeout(() => {
            if (result.data.user.role == "admin") {
              navigate('/admin/home')
            } else {
              navigate('/')
            }
          }, 2500)
        } else if(result.status == 401 || result.status == 404){
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        }else{
          toast.error("Something went wrong!!!")
          setUserDetails({ username: "", email: "", password: "" })
        }

      } catch (err) {
        console.log(err);
      }
    } else {
      toast.info("Please fill the form completely!!!")
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    console.log('Inside handleGoogleLogin');
    console.log(credentialResponse);
    const decode = jwtDecode(credentialResponse.credential)
    console.log(decode);
    //email,name,password
    const result = await googleLoginAPI({ username: decode.name, email: decode.email, password: 'googlePassword', picture: decode.picture })
    if (result.status == 200) {
      toast.success("Login Successfull!!!")
      sessionStorage.setItem("token", result.data.token)
      sessionStorage.setItem("user", JSON.stringify(result.data.user))
      setAuthorised(true)
      setTimeout(() => {
        if (result.data.user.role == "admin") {
          navigate('/admin/home')
        } else {
          navigate('/')
        }
      }, 2500)
    } else {
      console.log(result);
      toast.error("Something went wrong!!!")
    }


  }


  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/login-bg.png)] bg-cover bg-center'>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-white text-center">BOOK STORE</h1>
        <div style={{ width: '400px', backgroundColor: 'rgba(0,0,0,0.9' }} className=" text-white p-5 flex flex-col justify-center items-center my-5">
          <div style={{ width: '100px', height: '100px', borderRadius: '50%' }} className="border mb-5 flex justify-center items-center">
            <FaUser className='text-3xl' />
          </div>
          <h2 className="text-2xl">{insideRegister ? "Register" : "Login"}</h2>
          <form className="my-5 w-full">
            {/* username */}
            {
              insideRegister &&
              <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mt-5' />
            }
            {/* email */}
            <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="text" placeholder='Email ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5' />
            {/* password */}
            <div className='flex justify-center items-center'>
              <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPassword ? "text" : "password"} placeholder='Password' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5 me-6' />
              {
                viewPassword ?
                  <FaEyeSlash onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 me-2 cursor-pointer' style={{ marginLeft: '-50px', marginTop: '-20px' }} />
                  :
                  <FaEye onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 me-2 cursor-pointer' style={{ marginLeft: '-50px', marginTop: '-20px' }} />
              }
            </div>
            {/* forgot password */}


            <div className="flex justify-between mb-5">
              <p className="text-xs text-orange-300">*Never share your password with others</p>
              {!insideRegister && <button className='text-xs underline'>Forgot Password</button>}
            </div>

            {/* login/register btn */}
            <div className='text-center'>
              {
                insideRegister ?
                  <button onClick={handleRegister} className='bg-green-700 p-2 w-full rounded'>Register</button>
                  :
                  <button onClick={handleLogin} className='bg-green-700 p-2 w-full rounded'>Login</button>
              }
            </div>
            {/* google authentication  */}
            <div className='text-center my-5'>
              {!insideRegister && <p>---------------------or---------------------</p>}
              {
                !insideRegister &&
                <div className='flex justify-center items-centermy-5 w-full my-5'>
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      handleGoogleLogin(credentialResponse)
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </div>
              }
            </div>

            <div className='text-center my-5'>
              {
                insideRegister ?
                  <p className="text-blue-600 mt-4">Already a user? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
                  :
                  <p className="text-blue-600 mt-4">Are you a new user? <Link to={'/register'} className='underline ms-5'>Register</Link></p>
              }
            </div>
          </form>

        </div>
      </div>
      {/* toast */}
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </div>
  )
}

export default Auth