import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { isTokenValid } from "./utils";

export const axiosInstance = axios.create ({
    baseURL : "http://localhost:3001/",
});

axiosInstance.interceptors.request.use(async(req)=>{
    const token =localStorage.getItem("token");
    const refreshToken=localStorage.getItem("refreshToken");
    if (!token || !refreshToken) return req;

const isExpired = isTokenValid (token);

if (!isExpired) {

    req.headers.Authorization = 'Bearer ${token}'; 
return req ;}

 const {data}=await axios.post ("http://localhost:3001/users/refresh",
    {
        refresh_token: refreshToken,
    }
 ) ;

 const newAccessToken =data.token;
 localStorage.setItem("token", newAccessToken );
 req.headers.Authorization = 'Bearer ${newAccessToken}';
    return req;

});