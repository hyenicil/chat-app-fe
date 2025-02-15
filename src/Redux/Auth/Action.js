import {API_URL} from "../../Config/api";
import {LOGIN, LOGOUT, REGISTER, REQ_USER, SEARCH_USER, UPDATE_USER} from "./ActionType";

export const register = (data)=>async(dispatch)=>{
    try {
        const res=await fetch(`${API_URL}auth/signup`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        const resData=await res.json();
        if(resData.jwt)localStorage.setItem("token", resData.jwt)
        console.log("register", resData)
        dispatch({type:REGISTER, payload:resData})
    } catch (error) {

    }
}

export const login = (data)=>async(dispatch)=>{
    try {
        const res=await fetch(`${API_URL}auth/signin`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        const resData = await res.json();
        if(resData.jwt)localStorage.setItem("token", resData.jwt)
        dispatch({type:LOGIN, payload:resData})
    } catch (error) {
        console.log("catch error", error)
    }
}

export const currentUser = (token)=>async(dispatch)=>{
    try {
        const res=await fetch(`${API_URL}users/profile`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            },
        })
        const resData = await res.json();
        console.log("current User", resData)
        dispatch({type:REQ_USER, payload:resData})
    } catch (error) {
        console.log("catch error", error)
    }
}

export const searchUser = (data)=>async(dispatch)=>{
    try {
        const res=await fetch(`${API_URL}users/search?name=${data.keyword}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${data.token}`
            },
        })
        const resData = await res.json();
        console.log("searchUser", resData)
        dispatch({type:SEARCH_USER, payload:resData})
    } catch (error) {
        console.log("catch error", error)
    }
}

export const updateUser = (data)=>async(dispatch)=>{
    try {
        const res=await fetch(`${API_URL}users/update/${data.id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:'Bearer ${data.token}'
            },
        })
        const resData = await res.json();
        console.log("searchUser", resData)
        dispatch({type:UPDATE_USER, payload:resData})
    } catch (error) {
        console.log("catch error", error)
    }

}

export const logoutAction=()=>async(dispatch)=> {
    localStorage.removeItem("token");
    dispatch({type:LOGOUT,payload:null})
    dispatch({type:REQ_USER, payload:null})
}



