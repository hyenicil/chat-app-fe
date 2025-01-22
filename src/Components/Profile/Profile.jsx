import React, {useState} from 'react'
import {BsArrowLeft, BsCheck2, BsPencil} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const Profile = ({handleCloseProfile}) => {
const [flag, setFlag] = useState(false);
const [username, setUsername] = useState(null);

const handleFlag=()=>{
        setFlag(true)
    }
const handleCheckClick=()=>{
        setFlag(false);
    }
const handleChangeUsername=(e)=> {
        setUsername(e.target.value);
    }



    return (
        <div className='w-full h-full'>
            <div children='flex items-center space-x-10 bg-[#FDCB02] pt-16 px-10 pb-5'>
                <BsArrowLeft className='cursor-pointer text-2xl font-bold translate-y-6 translate-x-5' onClick={handleCloseProfile}/>
                <p className='cursor-pointer font-semibold'>PROFILE</p>
            </div>
            <div className='flex flex-col justify-center items-center my-12'>
                <label htmlFor='imgInput'>
                    <img className='rounded-full w-[15vw] h-[15vw] cursor-pointer' src='https://images.unsplash.com/photo-1647685658173-94c4f42725fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' alt=''/>
                </label>
                <input type="file" id='imgInput' className='hidden'></input>
            </div>

            {/*NAME*/}
            <div className='bg-white px-3'>
                <p className='py-3 text-left'>YOUR NAME</p>
                {!flag && <div className='w-full flex justify-between items-center'>
                    <p className='py-3'>{username || "USERNAME"}</p>
                    <BsPencil onClick={handleFlag} className='cursor-pointer'/>
                </div>}

                {flag && <div className='w-full flex justify-between items-center py-2'>
                            <input onChange={handleChangeUsername} className='w-[80%] outline-none border-b-2 border-blue-700 p-2 ' type='text' placeholder='Enter your name'/>
                            <BsCheck2 onClick={handleCheckClick} className='cursor-pointer text-2xl'/>
                         </div>
                }
            </div>
            <div className='px-3 my-5'>
                <p className='py-10'>This is not your username, this name will be visible to your whatapp concets.</p>
            </div>
        </div>
    )
}

export default Profile