import { NavLink } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Desktop */}
      <div className="fixed w-[100vw] h-16 flex justify-between bg-blue2">

        {/* Empresa */}
        <div className="text-[30px] flex justify-center items-center text-white  font-semibold w-[15%]">
          sldeny Boxes
        </div>

        {/* Categorias */}
        <div className="flex gap-12 justify-center items-center w-[45%]">
          <button className="rounded-full bg-white h-12 w-12 flex justify-center items-center ">
            Box
          </button>
          <button className="rounded-full bg-white h-12 w-12 flex justify-center items-center ">
            Box
          </button>
          <button className="rounded-full bg-white h-12 w-12 flex justify-center items-center ">
            Box
          </button>
          <button className="rounded-full bg-white h-12 w-12 flex justify-center items-center ">
            Box
          </button>
        </div>

        {/* Buscador */}
        <div className="flex  w-[40%] p-3">
          <input
            placeholder="Search"
            className="font-semibold rounded-tl-2xl rounded-bl-2xl p-4 w-[90%] outline-none"
          ></input>
          <button className="bg-gray-200 w-[10%] flex justify-center items-center rounded-tr-2xl rounded-br-2xl text-2xl">
            <CiSearch />
          </button>
        </div>

        {/* Account */}
        <div className="w-[20%] p-3">
            <NavLink to={"/Login"}>
              <button className="bg-white text-blue2 rounded-2xl font-bold w-full h-full ">
                <span>Create Account</span>
              </button>
            </NavLink>

          {/* <div className="flex gap-2 text-xl text-white items-center w-full h-full">
            <FaRegUserCircle />
            <p>Hi User!</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
