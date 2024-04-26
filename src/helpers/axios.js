import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { isTokenValid } from "./utils";

export const axiosInstance = axios.create ({
    baseURL : "http://localhost:3001/",
});

axiosInstance.interceptors.request.use((req)=>{
    const token =localStorage.getItem("token");
    const refreshToken=localStorage.getItem("refreshToken");
    if (!token || !refreshToken) return req;

const isExpired = isTokenValid (token);

if (!isExpired) {

    req.headers.Authorization = 'Bearer ${token}'; 
return req ;}

    return req;
});