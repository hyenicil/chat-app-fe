import React, {useEffect, useState} from 'react'
import {Alert, Button, Snackbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {currentUser, register} from "../../Redux/Auth/Action";

const Signup = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:""});
    const dispatch=useDispatch();
    const {auth}=useSelector(store=>store);
    const token = localStorage.getItem("token");


    console.log("current user", auth.reqUser)
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(register(inputData))
        setOpenSnackbar(true)
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
    },
    [auth.reqUser]);

    useEffect(() => {
        if(auth.signup === false) {
            setOpenSnackbar(true)
        }
    }, [auth.signup])

    return (
        <div>
            <div>
                <div className='flex flex-col justify-center min-h-screen items-center'>
                    <div className='w-[30%] p-10 shadow-md bg-white rounded-xl'>
                        <form onSubmit={handleSubmit} className='space-y-5'>
                            <div>
                                <p className='mb-2' style={{ textAlign: "left" }}>Ad</p>
                                <input
                                    className="py-2 px-3 outline outline-[#3A4750] w-full rounded-md border-1"
                                    type="text"
                                    placeholder="Adınızı giriniz"
                                    name="firstName"
                                    onChange={(e) => handleChange(e)}
                                    value={inputData.firstName}
                                />
                            </div>
                            <div>
                                <p className='mb-2' style={{ textAlign: "left" }}>Soyad</p>
                                <input
                                    className="py-2 px-3 outline outline-[#3A4750] w-full rounded-md border-1"
                                    type="text"
                                    placeholder="Soyadınızı giriniz"
                                    name="lastName"
                                    onChange={(e) => handleChange(e)}
                                    value={inputData.lastName}
                                />
                            </div>
                            <div>
                                <p className='mb-2' style={{ textAlign: "left" }}>Kullanıcı Adı</p>
                                <input
                                    className="py-2 px-3 outline outline-[#3A4750] w-full rounded-md border-1"
                                    type="text"
                                    placeholder="Kullanıcı Adınız"
                                    name="username"
                                    onChange={(e) => handleChange(e)}
                                    value={inputData.username}
                                />
                            </div>
                            <div>
                                <p className='mb-2' style={{ textAlign: "left" }}>Email</p>
                                <input
                                    className= 'py-2 px-3 outline outline-[#3A4750] w-full rounded-md border-1'
                                    type='text'
                                    placeholder='Enter your Email'
                                    name='email'
                                    onChange={(e)=> handleChange(e)}
                                    value={inputData.email}
                                />
                            </div>

                            <div>
                                <p className="mb-2" style={{ textAlign: "left" }}>Password</p>
                                <input
                                    className="py-2 px-2 outline outline-[#3A4750] w-full rounded-md border-1"
                                    type="text"
                                    placeholder="Enter your password"
                                    name="password"
                                    onChange={(e)=>handleChange(e)}
                                    value={inputData.password}
                                />
                            </div>
                            <div>
                                <Button type='submit' sx={{ bgcolor: '#3A4750',color: 'white', padding:".5rem 0rem", "&:hover": {
                                            bgcolor: '#F6C90E',color: '#3A4750' // Hover durumunda değişecek renk
                                          }}} className='w-full bg-[#3A4750]' variant='contained'>Kaydol</Button>
                            </div>
                        </form>
                        <div className="flex space-x-3 item-center mt-5">
                            <p className="">Zaten Hesabınız Var mı?
                                <Button variant='text' onClick={()=>navigate("/signin")}>
                                    Giriş Yap
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{width:'100%'}}>
                    Your Account Successfully Created!
                </Alert>
            </Snackbar>
        </div>
    )
}
export default Signup