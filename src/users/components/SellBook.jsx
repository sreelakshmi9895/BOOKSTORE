import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { ToastContainer , toast } from 'react-toastify';
import { addBookAPI } from '../../services/allAPI';


function SellBook() {
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", pages: "", price: "", discountPrice: "", imageURL: "", abstract: "", language: "", publisher: "", isbn: "", category: "", uploadImages: []
  })
  const [preview, setPreview] = useState("")
  const [previewList,setPreviewList] = useState([])

  console.log(bookDetails);

  const handleUploadBookImage  = (e)=>{
    // get file which upload
    console.log(e.target.files[0]);
    // add to file to state
    const imgFileArray = bookDetails.uploadImages
    imgFileArray.push(e.target.files[0])
    setBookDetails({...bookDetails,uploadImages:imgFileArray})
    // convert file to url
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setPreview(url)
    const bookImagesArray = previewList
    bookImagesArray.push(url)
    setPreviewList(bookImagesArray)
  }

  const handleUploadBook = async ()=>{
    const {title,author,pages,price,discountPrice,imageURL,abstract,language,publisher,isbn,category,uploadImages} = bookDetails
    if(!title || !author || !pages || !price || !discountPrice || !imageURL || !abstract || !language || !publisher || !isbn || !category || uploadImages.length==0){
    toast.info("Please fill the form completely!!!")
    }else{
  // api call to addbook
  const token = sessionStorage.getItem("token")
  if(token){
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const reqBody = new FormData()
    for(let key in bookDetails){
      if(key != "uploadImages"){
        reqBody.append(key,bookDetails[key])
      }else{
        bookDetails.uploadImages.forEach(imgFile=>{
          reqBody.append("uploadImages",imgFile)
        })
      }
    }
    const result = await addBookAPI(reqBody,reqHeader)
    console.log(result);
    if(result.status==200){
      toast.success("Book Added Successfully... ")
    }else if(result.status==401){
      toast.warning(result.response.data)
    }else{
      toast.error("Something went wrong!!!")
    }
    resetUploadBookForm()
  }
    }
  }

  const resetUploadBookForm = ()=>{
    setBookDetails({
      title: "", author: "", pages: "", price: "", discountPrice: "", imageURL: "", abstract: "", language: "", publisher: "", isbn: "", category: "", uploadImages: []
    })
    setPreview("")
    setPreviewList([])
  } 

  return (
    <div>
      <div className="p-10 my-20 mx-5 bg-gray-200">
        <h1 className='text-3xl font-bold text-center'>UPLOAD BOOK DETAILS</h1>
        <div className='md:grid grid-cols-2 mt-10 w-full'>
          <div className='px-3'>
            <div className='mb-3'>
              <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='Book Title' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3'>
              <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Author' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3'>
              <input value={bookDetails.pages} onChange={e => setBookDetails({ ...bookDetails, pages: e.target.value })} type="text" placeholder='No of pages' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3'>
              <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='Original Price' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3'>
              <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount price' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3'>
              <input value={bookDetails.imageURL} onChange={e => setBookDetails({ ...bookDetails, imageURL: e.target.value })} type="text" placeholder='Book Image URL' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3'>
              <input value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} type="text" rows={5} placeholder='Book Abstract' className='p-2 bg-white w-full rounded' />
            </div>
          </div>
          <div className='px-3'>
            <div className='mb-3'>
              <input value={bookDetails.language} onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder='Language' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3'>
              <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3'>
              <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3'>
              <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className='p-2 bg-white w-full rounded' />
            </div>
            <div className='mb-3 flex justify-center items-center mt-10'>
              <label htmlFor="uploadImg">
                <input onChange={e=>handleUploadBookImage(e)} type="file" id='uploadImg' hidden />
                <img width={'200px'} src={preview ? preview : "https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"} alt="" />
              </label>
            </div>
            {/* for more image upload */}
            {
              preview &&
              <div className='flex justify-center items-center'>
                {/* uploading images */}
                {
                  previewList?.map((bookImgURL,index)=>(
                    <img key={index} width={'70px'} height={'70px'} className='mx-3' src={bookImgURL} alt="upload book" />
                  ))
                }
                {/* add more file upload button */}
                {
                  previewList.length<3 &&
                  <label htmlFor='bookImages'>
                  <input onChange={e=>handleUploadBookImage(e)} type="file" id='bookImages' hidden />
                  <FaPlus className='text-3xl ms-3' />
                </label>
                }
              </div>
            }
          </div>
        </div>
        <div className='flex justify-end mt-5'>
          <button onClick={resetUploadBookForm} className='bg-gray-600 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400' >RESET</button>
          <button onClick={handleUploadBook} className='bg-blue-600 text-white p-2 rounded me-5 hover:bg-white hover:text-blue-400' >ADD BOOK</button>
        </div>
      </div>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      theme="colored" />
    </div>
  )
}

export default SellBook
