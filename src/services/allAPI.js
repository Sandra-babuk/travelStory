import { SERVERURL } from "./baseUrl";
import commonAPI from "./commonApi";

// register called by Auth
export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// login called by Auth
export const loginAPI = async(reqBody)=>{
    return await commonAPI ("POST",`${SERVERURL}/login`,reqBody)
}

// addstory api called by 
export const addSatoryAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/travel-stories`,reqBody,reqHeader)
}

// homeProjectsAPI called by Home
export const homeTravelstoriesAPI = async()=>{
    return await commonAPI ("GET",`${SERVERURL}/home-stories`,"")
}

// allprojectsAPI called by projects
export const allStoryAPI = async (searchKey,reqHeader)=>{
    return await commonAPI ("GET",`${SERVERURL}/all-story?search=${searchKey}`,"",reqHeader)
}

// delete
export const deleteStoryAPI = async (pid,reqHeader)=>{
    return await commonAPI ("DELETE",`${SERVERURL}/${pid}/delete-story`,{},reqHeader)
}
