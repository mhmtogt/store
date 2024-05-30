import React from 'react'
import logo from "../assets/logo.png";

import { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false)
  return (
    <nav className="bg-navbarColor md:text-sm">
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
            <div className="flex items-center fustify-between py-5 md:block">
                <a
                href="https://tr.wikipedia.org/wiki/TUSA%C5%9E_Anka"
                target="true"
                rel="noopener noreferrer"
                className="flex items-center">
                    <img src={logo} width={150} height={150} alt="clarusway" />
                    <span className="text-gray-700 hover:text-gray-900 font-medium">Anka</span>
                </a>
                {/*iconu ekranlardan sonra gizlensin diyoruz */}
                <div className="md:hidden">
                    <button className="menü-btn text-gray-500 hover:text-gray-800 "
                    onClick={()=>setShow(show)}></button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar