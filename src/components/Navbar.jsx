import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { closeNavbar, openNavbar, logoutIcon } from "../helper/icons";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about", 
  },
];
//useNavigate hooku   yönlendirme yapmaya yarıyor  use params hooku bizim dinamik hooklarımızda verdiğimiz dinamik değeri yakılıyor
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logout } = useContext(AuthContext);
  const location = useLocation();//!useLocation hook'u, geçerli konumu bir nesne olarak döndürür. Bu nesne, routerdan gelen konum yolunu, konum parametrelerini ve konum durumunu içerir.
  console.log(location);

  return (
    <nav className="bg-yellow-300 avbarColor md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a
            href="https://www.ziraatbank.com.tr/tr"
            target="true"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img src={logo} width={50} height={50} alt="Clarusway" />
            <span className="text-gray-700 hover:text-gray-900 font-medium">
              ZT STORE 
            </span>
          </a>
          {/**iconu md ekranlardan sonra gizlensin diyoruz */}
          <div className="md:hidden"> 
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } flex-1 items-center md:flex md:flex-row`}
        >
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item) => (
              <li
                key={item.title}
                className="text-gray-700 font-medium  flex justify-center"
              >
                <NavLink
                  to={item.path}
                  className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white ${
                    location.pathname === item.path ? "underline scale-150" : ""// bu ikisi eşitse şu css özelliğini ver değilse verme
                  }`}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              to="/"
              onClick={logout}//buradaki onClick state'i boşaltıyor geri tuşuna basınca tekrar içeri gitmesin aynı sayfada kalsın
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-gray-700 hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
            >
              Logout {logoutIcon}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
