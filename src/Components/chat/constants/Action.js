import {CREATE_CHAT, CREATE_GROUP, GET_USERS_CHAT} from "./ActionType";
import {API_URL} from "../../../Config/api";

export const createChat=(chatData) => async(dispatch) => {

    try {
        const res = await fetch(`${API_URL}chat-app/chats/single`,{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                Authorization:`Bearer ${chat.token}`
            },
            body:JSON.stringify(chatData.data)
        })

    const data = await res.json();
    console.log("create chat", data)
    dispatch({type:CREATE_CHAT, payload:data})
    }
    catch (error) {
        console.log("catch error", error)
    }
}

export const createGroup=(chatData) => async(dispatch) => {

    try {
        const res = await fetch(`${API_URL}chat-app/chats/groups`,{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                Authorization:`Bearer ${chatData.token}`
            },
            body:JSON.stringify(chatData.data)
        })

    const data = await res.json();
    console.log("create group", data)
    dispatch({type:CREATE_GROUP, payload:data})
    }
    catch (error) {
        console.log("catch error", error)
    }
}

export const getUsersChat=(chatData) => async(dispatch) => {

    try {
        const res = await fetch(`${API_URL}chat-app/chats/user`,{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                Authorization:`Bearer ${chatData.token}`
            },
            body:JSON.stringify(chatData.data)
        })

    const data = await res.json();
    console.log("get user chat", data)
    dispatch({type:GET_USERS_CHAT, payload:data})
    }
    catch (error) {
        console.log("catch error", error)
    }
}