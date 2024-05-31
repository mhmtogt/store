//AuthContext
// contextAPI en büyük farkı gömülü olarak react içinde geliyor
import React, {  createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

//userNavigate  kullandığımız için AuthProvider ı BrowserRouterın altında kullanmak gerekiyor
const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user"))|| null)
    const  navigate =useNavigate();// yönlendirme için useNavigate hookunu kullacacağız 
    const login =(info) => {
      setUser(info)   
      navigate("/dashboard")
    }
    
 //buradaki valu ile user ve logini başka yerlerde kulllanacağız
    return (
    <AuthContext.Provider  value={{user,login}}>
    {Children}
    </AuthContext.Provider>
  )
}

export default AuthProvider