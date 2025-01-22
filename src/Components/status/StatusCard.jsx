import React from 'react'
import {useNavigate} from "react-router-dom";

const StatusCard=()=>{

const navigate = useNavigate();
const handleNavigate=()=>{
        navigate('/status/{userId}')
    }

    return(
        <div onClick={handleNavigate} className='flex items*center p-3 cursor-pointer'>
            <div>
                <img className='h-7 w-7 lg:w-10 lg:h-10 rounded-full' src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid' alt=''/>
            </div>
            <div className='ml-2 text-white'>
                <p>Hüseyim Ki</p>
            </div>
        </div>
    )
}

export default StatusCard