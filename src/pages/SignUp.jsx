import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { FaUser } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  user: Yup.string().required("Usuario requerido"),
  password: Yup.string().min(2).required(),
});

export default function SignUp() {
  /*  */
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
        {/* Sign Up */}

        <div className="w-2/5 bg-blue2 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Already have an account?</h2>
          <div className="border-2 w-10 inline-block mb-2"></div>
          <p className="mb-10">Enter your details to start</p>
          <NavLink to={"/Login"}>
            <button className=" border-2  rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue2">
              <span>Sign In</span>
            </button>
          </NavLink>
        </div>
        {/*  */}
        {/* Sign In */}
        <div className="w-3/5 p-5">
          <div className="text-left font-bold ">
            <span className="text-blue2">sldeny</span>Boxes
          </div>

          <div className="py-10">
            <h2 className="text-3xl font-bold text-blue2 mb-2">
              Register Here!
            </h2>
            <div className="border-2 w-10 border-blue2 inline-block mb-2 " />
            <p className="text-gray-400 mb-2">
              Enter your details to register your account
            </p>

            {/* Formulario */}
            <form className="grid" onSubmit={handleSubmit(onSubmit)}>
              {/*  */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 p-2 flex items-center mb-3">
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
                <div className="bg-gray-100 p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    type="date"
                    name="birthdate"
                    placeholder="Birthdate"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    {...register("birthdate")}
                  />
                </div>
              </div>

              {/*  */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    {...register("name")}
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="bg-gray-100 p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    {...register("lastName")}
                  />
                  {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
              </div>

              {/*  */}
              <div className="flex gap-3">
                <div className="bg-gray-100 w-3/4 p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    {...register("email")}
                  />
                </div>
                <div className="bg-gray-100 w-1/4 p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <select name="" id="" {...register("sex")}>
                    <option value="M">Male</option>
                    <option value="F">Famale</option>
                  </select>
                </div>
              </div>

              {/*  */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    {...register("password")}
                  />
                </div>
                <div className="bg-gray-100 p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="ConfirmPassword"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    {...register("confirmPassword")}
                  />
                </div>
              </div>

              {/*  */}
              <button className=" border-2 border-blue2 text-blue2 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue2 hover:text-white">
                <span>Sign Up</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
