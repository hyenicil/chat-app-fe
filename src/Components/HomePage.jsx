import React, {useEffect, useState} from 'react';
import {TbCircleDashed} from "react-icons/tb";
import {BiCommentDetail} from "react-icons/bi";
import {AiOutlineAudio, AiOutlineSearch} from "react-icons/ai";
import {BsEmojiSmile, BsFilter, BsThreeDotsVertical} from "react-icons/bs";
import ChatCard from "./chat/ChatCard";
import gangChat from 'C:\\Users\\yenic\\OneDrive\\Masaüstü\\react-app\\chat-app\\chat-app\\src\\Material\\images\\gangChat.png';
import MessageCard from "./message/MessageCard";
import {ImAttachment} from "react-icons/im";
import "./HomePage.css"
import {useNavigate} from "react-router-dom";
import Profile from "./profile/Profile";
import {Button, Menu, MenuItem} from "@mui/material";
import CreateGroup from "./group/CreateGroup";
import {useDispatch, useSelector} from "react-redux";
import {currentUser, logoutAction, searchUser} from "../Redux/Auth/Action";

const HomePage = () => {
    const [querys, setQuerys] = useState(null);
    const [currentChat, setCurrentChat]=useState(null);
    const [content, setContent] = useState("");
    const [isProfile, setIsProfile] = useState(false);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isGroup, setIsGroup]= useState(false);
    const dispatch=useDispatch();
    const {auth} = useSelector(store=>store);
    const token = localStorage.getItem("token")
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClickOnChatCard=()=>[
        setCurrentChat(true)]
    const handleSearch = (keyword)=> {
        dispatch(searchUser({keyword, token}))
    };
    const sendMessage=()=>{};
    const handleNavigate = ()=> {
        //navigate("/profile")
        setIsProfile(true);
    }
    const handleCloseProfile=()=>{
        setIsProfile(false);
    }

    const handleCreateGroup=()=>{
        setIsGroup(true)
    }

    const handleLogout=() => {
        dispatch(logoutAction())
    }

    useEffect(()=> {
        dispatch(currentUser(token))
    }, [token])

    useEffect(()=>{
        if(!auth.reqUser){
            navigate("/signup")
        }
    }, [auth.reqUser])

    return (
        <div className='relative'>
            <div className='top-0 w-full py-14 bg-[#3A4750]'></div>
            <div className='flex bg-[#3A4750] h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]'>
                <div className='left w-[30%] bg-[#F6C90E] h-full]'>
                    {/*PROFILE*/}
                    {isGroup && <CreateGroup/>}
                    {isProfile && <div className='w-full h-full'><Profile handleCloseProfile={handleCloseProfile}/></div>}
                    {!isProfile && !isGroup && <div className='w-full'>
                    {/*HOME*/}
                        <div className="flex justify-between items-center p-3">
                            <div onClick={handleNavigate} className="flex items-center space-x-3">
                                <img className='rounded-full w-10 h-10 cursor-pointer' src="data:image/png;base64,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" alt=""/>
                                <p>                                        {auth.reqUser?.firstName +" "+ auth.reqUser?.lastName }
                                </p>
                            </div>
                            <div className="space-x-3 text-2xl flex">
                                <TbCircleDashed className='cursor-pointer' onClick={()=>navigate("/status")}/>
                                <BiCommentDetail/>
                                <div>
                                      <BsThreeDotsVertical  className='cursor-pointer'  id="basic-button"
                                                             aria-controls={open ? 'basic-menu' : undefined}
                                                             aria-haspopup="true"
                                                             aria-expanded={open ? 'true' : undefined}
                                                             onClick={handleClick}/>
                                      <Menu
                                          id="basic-menu"
                                          anchorEl={anchorEl}
                                          open={open}
                                          onClose={handleClose}
                                          MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                          }}
                                        >
                                          <MenuItem onClick={handleCreateGroup}>Hesabım</MenuItem>
                                          <MenuItem onClick={handleCreateGroup}>Grup Oluştur</MenuItem>
                                          <MenuItem onClick={handleLogout}>Çıkış</MenuItem>
                                        </Menu>
                                </div>
                            </div>
                        </div>
                        <div className='relative flex justify-center items-center bg-white py-4 px-3'>
                            <input className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2'
                                   type='text'
                                   placeholder='Search or start new Chat'
                                   onChange={(e)=>{
                                       setQuerys(e.target.value)
                                       handleSearch(e.target.value)
                                   }}
                                   value={querys}
                            />
                            <AiOutlineSearch className='left-5 top-7 absolute'/>
                            <div>
                                <BsFilter className='ml-4 text-3xl'/>
                            </div>
                        </div>
                        {/*ALL USER*/}
                        <div className='bg-white overflow-y-scroll h-[76.8vh] px-3'>
                            {querys &&
                                auth.searchUser?.map((item)=><div onClick={handleClickOnChatCard}><hr/><ChatCard item={item}/></div>)}
                        </div>
                        <div>
                            {/*Default whatsUpChat*/}
                        </div>
                    </div>}
                </div>
                {!currentChat &&
                    <div className='w-[70%] flex flex-col items-center justify-center h-full'>
                        <div className='max-w-[50%] text-center'>
                            <img src={gangChat} alt=''/>
                            <h1 className='text-4xl text-[#F6C90E]'>GANG CHAT</h1>
                            <p className='my-9 text-[#F6C90E]'>Gang up with your friend right now.</p>
                        </div>
                    </div>
                }
                {/*Message Part*/}
                {currentChat &&
                    <div className='w-[70%] relative'>
                        <div className='header absolute top-0 w-full bg-[#f0f2f5]'>
                            <div className='flex justify-between'>
                                <div className='py-3 space-x-4 flex items-center px-3'>
                                    <img className='w-10 h-10 rounded-full' src='https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D' alt=''></img>
                                    <p>
                                        {auth.reqUser?.firstName}
                                    </p>
                                </div>
                                <div className='py-3 flex space-x-4 items-center px-3'>
                                    <AiOutlineSearch/>
                                    <BsThreeDotsVertical/>
                                </div>
                            </div>
                        </div>
                        {/*MessageSection*/}
                        <div className='px-10 h-[85vh] overflow-y-scroll'>
                            <div className='space-y-1 flex flex-col justify-center mt-20 py-2'>
                                {[1,1,1,1,1,1,1].map((item, i)=> <MessageCard isMessage={i%2===0} content={"message"}/>)}
                            </div>
                        </div>
                        {/* footer part*/}
                        <div className='flex items-center justify-between p-4 bg-[#f0f2f5]'>
                            <div className='flex items-center space-x-4'>
                                <BsEmojiSmile className='cursor-pointer text-2xl text-gray-500'/>
                                <ImAttachment className='cursor-pointer text-2xl text-gray-500' />
                            </div>
                            <input
                                className='ml-4 flex-1 py-2 px-4 outline-none border-none bg-white rounded-md shadow-sm text-gray-700'
                                type='text'
                                onChange={(e) => setContent(e.target.value)}
                                placeholder='Type message'
                                value={content}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    sendMessage();
                                    setContent('');
                                  }
                                }}
                              />
                              <div className="ml-4">
                                  <AiOutlineAudio className="cursor-pointer text-2xl text-gray-500" />
                                </div>

                        </div>
                    </div>
                   }

            </div>
        </div>
    );
};

export default HomePage;