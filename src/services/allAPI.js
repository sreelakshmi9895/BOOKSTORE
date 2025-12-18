import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


// register api : called by Auth component when register btn clicked
export const registerAPI = async (userDetails)=>{
return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

// login api : called by Auth component when login btn clicked
export const loginAPI = async (userDetails)=>{
return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

// login api : called by Auth component when login btn clicked
export const googleLoginAPI = async (userDetails)=>{
return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

// /user/book/add - addbook api : called by sellbook when add book btn clicked
export const addBookAPI = async (reqBody,reqHeader)=>{
return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}

// homepage books api: called by home component when page loads
export const getHomePageBooksAPI = async ()=>{
return await commonAPI("GET",`${serverURL}/books/home`,{})
}

// /books/all :bookpage api: called by books component when page loads - authorised user
export const getAllBooksPageAPI = async (reqHeader)=>{
return await commonAPI("GET",`${serverURL}/books/all`,{},reqHeader)
}


// /user-books/all : Called by bookstatus when page load
export const getAllUserBooksAPI = async (reqHeader)=>{
return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}