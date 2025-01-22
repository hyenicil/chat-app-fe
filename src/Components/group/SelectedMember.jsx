import React from 'react'
import {AiOutlineClose} from "react-icons/ai";

const SelectedMember = ({handleRemoveMember, member})=> {
    return(
        <div className='flex items-center bg-slate-300 rounded-full'>
            <img className='w-7 h-7 rounded-full' src='https://images.unsplash.com/photo-1542480118439-cbba7870f6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D' alt=''/>
            <p className='px-2'>USERNAME</p>
            <AiOutlineClose
                onClick={handleRemoveMember}
                className='pr-1 cursor-pointer'
            />
        </div>
    )
}

export default SelectedMember