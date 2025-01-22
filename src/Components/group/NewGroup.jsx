import React, {useState} from 'react'
import {Button, CircularProgress} from "@mui/material";
import {BsArrowLeft, BsCheck2} from "react-icons/bs";

const NewGroup=()=> {

    const[isImageUploading, setImageUploading]=useState(false);
    const[groupName, setGroupName] = useState();
    return(
        <div className='w-full h-full'>
            <div className='flex items-center border border-[#FFFFFF] space-x-10 bg-[#FFFFFF] text-[#3A4750] pt-16 px-10 pb-5'>
                <BsArrowLeft className='cursor-pointer text-2xl font-bold'/>
                <p className='text-xl font-semibold'>NEW GROUP</p>
            </div>
            <div className='flex flex-col justify-center items-center my-12'>
                <label htmlFor='imf=imgInput' className="relative">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1aJlY7Dl0H_5Pud459EFyoml-F5ONGix5w&s' alt=''></img>
                    {isImageUploading && <CircularProgress className='absolute top-5rem left-[6rem]'/>}
                </label>
                <input
                type='file'
                id='ImgInput'
                className='hidden'
                onChange={()=> console.log("imageonChange")}
                value={""}
                />
            </div>
            <div className='w-full flex justify-between items-center py-2 px-5 '>
                <input className='w-full outline-none border-b-2 bg-[#3A4750] px-2 bg-transparent'
                       placeholder='Grup Ismi'
                       value={groupName}
                       type='text'
                       onChange={(e)=> setGroupName(e.target.value)}></input>
            </div>
            {
                groupName &&
                <div className='py-10 bg-[#F6C90E] flex items-center justify-center'>
                    <Button>
                        <div className='bg-[#3A4750] rounded-full p-4'>
                            <BsCheck2 className='text-white font-bold text-3l'/>
                        </div>
                    </Button>
                </div>
            }
        </div>
    )
}

export default NewGroup