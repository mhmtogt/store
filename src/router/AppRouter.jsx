import React from 'react'
import { Route, Routes } from 'react-router-dom' 
import Login from '../pages/Login'
import PrivateRouter from "./PrivateRouter"
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import ScrollToTop from '../components/ScroolToTop'

const AppRouter = () => {
  return (
    <div>
    
         <ScrollToTop/>
         <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<PrivateRouter/>}>
                <Route path="" element={<Home/>}/>


                <Route path="/dashboard/products" element={<Products/>}/>
                <Route path="products/:title" element={<ProductDetail/>}/> {/*burada parametre kullanmak istedim useParams ile bbir şeyler yaklamak istersem bunu kulllancam</Routes> */}
                {/*bu sayfa için productcard compnentindeki yorumda olan yapıyı açınız*/}
                <Route path="about" element={<About/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
         </Routes>
    </div>
  )
}

export default AppRouter