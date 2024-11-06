import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { FaFacebookF, FaLinkedinIn, FaGoogle, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const validationSchema = Yup.object().shape({
  user: Yup.string().required("Usuario requerido"),
  password: Yup.string().min(2).required(),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Formulario Enviado", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        {/*  */}
        {/* Sign In */}
        <div className="w-3/5 p-5">
          <div className="text-left font-bold ">
            <span className="text-blue2">sldeny</span>Boxes
          </div>

          <div className="py-10">
            <h2 className="text-3xl font-bold text-blue2 mb-2">
              Sing in to Account
            </h2>
            <div className="border-2 w-10 border-blue2 inline-block mb-2 " />
            <div className="flex  justify-center my-2">
              <a
                href="#"
                className="border-2 border-blue2 rounded-full p-3 mx-1 "
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-blue2 rounded-full p-3 mx-1 "
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-blue2 rounded-full p-3 mx-1 "
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>
            <p className="text-gray-400 my-3">or use your email account</p>
            {/* Formulario */}

            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaUser className="text-gray-400 m-2" />
                <input
                  type="text"
                  name="user"
                  placeholder="User"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  {...register("user")}
                />
                {errors.user && <p>{errors.user.message}</p>}
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  {...register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>

                <a href="#" className="text-xs">
                  Forgot Password?
                </a>
              </div>
              <button className=" border-2 border-blue2 text-blue2 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue2 hover:text-white">
                <NavLink to={"/SignUp"}>
                  <span>Sign In</span>
                </NavLink>
              </button>
            </form>
          </div>
        </div>
        {/*  */}
        {/* Sign Up */}
        <div className="w-2/5 bg-blue2 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <div className="border-2 w-10 inline-block mb-2"></div>
          <p className="mb-10">
            Fill up personal information and start journey with us
          </p>
          <NavLink to={"/SignUp"}>
            <button className=" border-2  rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue2">
              <span>Sign Up</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
