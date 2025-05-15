import React from "react";
import img3 from "./../../assets/3.jpeg";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

export default function SignUp() {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must not exceed 20 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      registerForm(values);
    },
  });

  async function registerForm(values) {
    console.log(values);
    return await axios
      .post('https://skill-swap-api-beta.vercel.app/api/create-account', values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="md:flex md:w-[100%] flex-wrap mt-7 justify-between items-center container mx-auto">
        <div className="md:w-[50%] px-10  ">
          <h2 className="text-center mb-10 text-2xl font-semibold">
            Create an account
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your UserName"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-center text-red-500">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>
            <div className="mb-5">
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
                // {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-center text-red-500">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-5">
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-center text-red-500">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="mb-5">
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="confirm Your password"
              />
            </div>
            <button
              type="submit"
              className="w-full my-5 text-white bg-[#5CBCB4] focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Next step
            </button>
          </form>
        </div>
        <div className="md:w-[50%] px-5 ">
          <img className="w-[80%]" src={img3} alt="" />
        </div>
      </div>
    </>
  );
}
