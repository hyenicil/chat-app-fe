import React, {useEffect, useState} from 'react'
import {Alert, Button, Snackbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {currentUser, login} from "../../Redux/Auth/Action";

const Signin = () => {
    const [openSnackbar, setOpenSnackbar]=useState(false)
    const navigate = useNavigate();
    const [inputData, setInputData]=useState({email:"",password:""});
    const dispatch=useDispatch();
    const {auth} =useSelector(store=>store)
    const token = localStorage.getItem("token")
    const handleSubmit=(e)=>{
        e.preventDefault()
        setOpenSnackbar(true)
        dispatch(login(inputData))
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData((values) => ({...values,[name]:value}));
    }
    const handleSnackbarClose=()=>{
        setOpenSnackbar(false);
    }

    useEffect(() => {
        if (token) dispatch(currentUser(token))
    }, [token]);

    useEffect(() => {
        if(auth.reqUser?.username){
            navigate("/")
        }
    },[auth.reqUser]);
    return (
       <div>
           <div className='flex justify-center h-screen items-center'>
               <div className='w-[30%] p-10 shadow-md bg-white rounded-xl'>
                   <form onSubmit={handleSubmit} className='space-y-5'>
                       <div>
                           <p className='mb-2' style={{ textAlign: "left" }}>Email</p>
                           <input
                               type='text'
                               placeholder='E-posta Adresinizi Giriniz'
                               onChange={handleChange}
                               value={inputData.email}
                               className='py-2 outline outline-[#3A4750] w-full rounded-md border'
                               name ="email"
                           />
                       </div>
                       <div>
                           <p className='mb-2' style={{ textAlign: "left" }}>Password</p>
                           <input
                               type='text'
                               placeholder='Şifrenizi Giriniz'
                               onChange={handleChange}
                               value={inputData.password}
                               className='py-2 outline outline-[#3A4750] w-full rounded-md border'
                               name="password"
                           />
                       </div>
                       <div>
                           <Button type='submit' sx={{ bgcolor: '#3A4750',color: 'white', padding:".5rem 0rem", "&:hover": {
                                       bgcolor: '#F6C90E',color: '#3A4750'
                                     }}} className='w-full' variant='contained' color='Success'>Giriş Yap</Button>
                       </div>
                   </form>
                   <div className='flex space-x-3 items-center mt-5'>
                       <p className='m-0'>Yeni Hesap Oluştur
                           <Button variant='text' onClick={()=>navigate("/signup")}>
                               Kaydol
                           </Button>
                       </p>
                   </div>
               </div>
           </div>
           <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
               <Alert onClose={handleSnackbarClose} severity='success' sx={{width:'100%'}}>
                   This is success message!
               </Alert>
           </Snackbar>
       </div>
    )
}
export default Signin