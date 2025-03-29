import { ACCESS_TOKEN } from "@/constants"
import { jwtDecode } from "jwt-decode"
import { authService } from "./apiServices"
export const checkUser = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    if(token){
          const decoded = jwtDecode(token)
          const expDate = decoded?.exp
          const now =  Date.now()/1000
          if(expDate&& expDate<now){
             await authService.refreshToken()
          }
          const user = await authService.fetchUserProfile()
          if(user)return user
          return null
    }else{
        return null
    }
}