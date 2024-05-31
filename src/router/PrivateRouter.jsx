import React, { useContext } from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
import { AuthContext } from '../context/AuthProvider'
//Routes'UN İÇİNE DİREK OLARAK BİR COMPONENT ÇAĞIRAMAYIZ
 const PrivateRouter = () => {
const{user} = useContext(AuthContext)

  return user.email ?(
  <div>
    <Navbar/>
     <Outlet/>{/*Outlet childlerin gösterilmesini sağlar */}
  </div>  ) :( <Navigate to="/" />
  );
}

export default PrivateRouter;
