import {CREATE_NEW_MESSAGE, GET_ALL_MESSAGE} from "./ActionType";
import {API_URL} from "../../../Config/api";

export const createMessage=(messageData)=>async(dispatch) =>{
    try{
        const res = await fetch(`${API_URL}chat-app/messages/create`, {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${messageData.token}`
            },
            body:JSON.stringify(messageData.data)
        })
        const data = await res.json();
        console.log("create message", data);
        dispatch({type:CREATE_NEW_MESSAGE, payload:data})
    } catch(error) {
        console.log("catch error", error)
    }
}

export const getAllMessages=(reqData)=>async(dispatch) =>{
    try{
        const res = await fetch(`${API_URL}chat-app/messages/${reqData.chatId}`, {
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${reqData.token}`
            },
            body:JSON.stringify(messageData.data)
        })
        const data = await res.json();
        console.log("create message", data);
        dispatch({type:GET_ALL_MESSAGE, payload:data})
    } catch(error) {
        console.log("catch error", error)
    }
}