//AuthContext
// contextAPI en büyük farkı gömülü olarak react içinde geliyor
import React, {  createContext,useEffect,  useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

//userNavigate  kullandığımız için AuthProvider ı BrowserRouterın altında kullanmak gerekiyor
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null)
    const navigate = useNavigate();// yönlendirme için useNavigate hookunu kullacacağız 

    const login =(info) => {
      setUser(info)   
      navigate("/dashboard");
    };
    
    const logout = ()=>
      {
        setUser(null)
      };
      //sessionStorage =sadece sayfa kapandığında 
      // lokalStorage = nezaman sayfayı silerserin
      useEffect(()=>{
        sessionStorage.setItem("user",JSON.stringify(user))
      },[user]);//usere takip et dolduğunda locali güncelle boşaldığında locali güncelle

 //buradaki valu ile user ve logini başka yerlerde kulllanacağız
    return (
      //react rooter doma ait hookları kullanmak istiyorsam kullanacağım yapı "BrowserRouter" sarmalı içerisinde olmak zorunda
      
    <AuthContext.Provider  value={{user,login,logout}}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider 