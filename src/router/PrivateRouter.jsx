import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
//Routes'UN İÇİNE DİREK OLARAK BİR COMPONENT ÇAĞIRAMAYIZ
 const PrivateRouter = () => {
  return true ?(
  <div>
    <Navbar/>
    <h1>Hello</h1>
     <Outlet/>{/*Outlet childlerin gösterilmesini sağlar */}
  </div>  ) :( <Navigate to="/" />
  );
}

export default PrivateRouter;
