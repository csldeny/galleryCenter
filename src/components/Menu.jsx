import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import navData from "../assets/navData";

const Menu = () => {
  /* Movil */
  /* const [active, setActive] = useState(0); */

  /* Tablet */
  /* const [click, setClick] = useState(false);
  const burgerMenu = () => {
    setClick(!click);
  }; */

  /* Desktop */
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* ----------------------------------------------------- Movil ----------------------------------------------------- */}
      {/* <div className="fixed bottom-0 inset-x-0 h-[4.4rem] bg-blue-600 text-white px-6 rounded-t-xl xs:hidden">
        <ul className="flex relative">
          {navData.map((item, i) => (
            <li key={i} className="w-[16.66%]">
              <NavLink
                to={item.route}
                onClick={() => {
                  setActive(i);
                }}
                className="flex flex-col text-center items-center pt-6"
              >
                <span
                  className={`text-2xl duration-500 ${
                    i === active && "-mt-1 text-4xl"
                  }`}
                >
                  {item.icon}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div> */}

      {/* ---------------------------------------------------- Tablet ---------------------------------------------------- */}
      {/* <div className="hidden xs:flex lg:hidden">
        <div
          className={`w-[30%] h-16 bg-blue-600 transition-all duration-1000 overflow-y-auto fixed ${
            click &&
            "h-[100vh] transition-all duration-1000 overflow-y-auto whitespace-nowrap "
          }`}
        >
          <div className={`flex justify-center`}>
            <button
              onClick={burgerMenu}
              className={`fixed top-0 left-0 m-2 p-2 bg-gradient-to-r from-blue-300 to-blue-400 text-white text-[32px] rounded-xl`}
            >
              <RxHamburgerMenu />
            </button>
            <p
              className={`${
                click
                  ? "block text-[30px] text-white mt-2 font-semibold "
                  : "hidden"
              }`}
            >
              sldeny
            </p>
          </div>

          <ul
            className={`flex flex-col gap-4 mt-10 ${
              click
                ? "block transition-all duration-1000 overflow-y-auto"
                : "hidden"
            }`}
          >
            {navData.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.route}
                  className={`${
                    click
                      ? "flex items-center w-full h-16 gap-x-2 pl-4 text-white text-xl transition-all duration-300 hover:bg-blue-400"
                      : "hidden"
                  }`}
                >
                  <span className="">{item.icon}</span>
                  <span className="">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <button onClick={handleClick}>Logout</button>
        </div>

        <div className="w-[70%] h-16 bg-blue-600 fixed ml-[30%] flex items-center justify-center">
          <span className="text-white text-2xl">sldeny Boxes</span>
        </div>
      </div> */}

      {/* ----------------------------------------------------- Desktop ----------------------------------------------------- */}
      <div
        className="hidden mt-16 bg-white lg:block lg:h-[100vh] lg:w-16 lg:shadow-xl lg:transition-all lg:duration-300 lg:hover:w-64
                       fixed z-[1] overflow-y-auto whitespace-nowrap"
      >
        {/* Listado de navdata */}
        <ul className=" flex flex-col gap-10 p-5">
          {navData.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.route}
                className="flex items-center transition-all duration-300"
              >
                <span className="text-[24px] text-blue2">{item.icon}</span>
                <span className="ml-6">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
