import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// first request - upload a video to the server : post req body
export const uploadVideo = async (reqBody) => {
    // make post http request to 'http://localhost:3001/videos' to add video in json server
    // return response to Add component
    return await commonAPI("post",`${serverURL}/videos`,reqBody)
}

// get all videos from json server
export const getAllVideos = async () => {
    // make post http request to 'http://localhost:3001/videos' to add video in json server
    // return response to View component
    return await commonAPI("get",`${serverURL}/videos`,"")
}

// get a particular video from json server
export const getVideo = async (id) => {
    // make post http request to 'http://localhost:3001/videos/id' to get video from json server
    // return response to VideoCard component
    return await commonAPI("get",`${serverURL}/videos/${id}`,"")
    }

// delete a particular video
export const deleteVideo = async (id) => {
    // make delete http request to 'http://localhost:3001/videos' to delete video in json server
    // return response to View component
    return await commonAPI("delete",`${serverURL}/videos/${id}`,{})
}

// store watch video history to json server
export const addWatchHistory = async(videoDetails) => {
    // make post http request to 'http://localhost:3001/watch-history' to delete video in json server
    // return response to ViewCard component
    return await commonAPI("post",`${serverURL}/watch-history`,videoDetails)
}

// to get watch history
export const getWatchHistory = async() => {
    // make get http request to 'http://localhost:3001/watch-history' to get watch history from json server
    // return response to WatchHistory component
    return await commonAPI("get",`${serverURL}/watch-history`,"")
}

// to add category
export const addCategory = async(name) => {
    // make post http request to 'http://localhost:3001/category' to add category in json server
    // return response to Category component
    return await commonAPI("post",`${serverURL}/category`,name)
}

// to get category
export const getCategory = async() => {
    // make post http request to 'http://localhost:3001/category' to get category from json server
    // return response to Category component
    return await commonAPI("get",`${serverURL}/category`,"")
}

// to delete category
export const deleteCategory = async (id) => {
    // make post http request to 'http://localhost:3001/category' to delete category in json server
    // return response to View component
    return await commonAPI("delete",`${serverURL}/category/${id}`,{})
}

// to update category
export const updateCategory = async (id,body) => {
    // make put http request to 'http://localhost:3001/category' to update category in json server
    return await commonAPI("put",`${serverURL}/category/${id}`,body)
}