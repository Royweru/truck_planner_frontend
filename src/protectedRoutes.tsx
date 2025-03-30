import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import  { authService } from "./lib/apiServices";
import { jwtDecode } from "jwt-decode";
 import { useEffect, useState } from 'react'
import { ACCESS_TOKEN } from "./constants";
import { Toaster } from "react-hot-toast";

export const ProtectedRoute = () => {
    const [isAuthorized, setIsAuthorized] = useState<null | boolean>(null)
     useEffect(()=>{
         auth()
     },[])
    const refreshToken = async() =>{
       try {
         const res = await authService.refreshToken()
         if(res) setIsAuthorized(true)
       } catch (error) {
         setIsAuthorized(false)
         console.error(error)
       }
    }
    const auth = () =>{
         const token = localStorage.getItem(ACCESS_TOKEN)
         if(!token) setIsAuthorized(false)
         if(token){
         const decoded = jwtDecode(token)
         const tokenExpiration=decoded?.exp
         const now = Date.now()/1000
         if(tokenExpiration && tokenExpiration<now){
            refreshToken()
         }else{
            setIsAuthorized(true)
         }
         }
    }

    if(isAuthorized===null) 
        return    
        (
        
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
      </div>
      )
    
      if(!isAuthorized) return <Navigate to={'/auth'} />

   return( 
     <>
       <Toaster />
       <Outlet />
     </>   
 )
}
