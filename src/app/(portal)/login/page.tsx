"use client"
/* eslint-disable react/no-unescaped-entities */
import AuthButton from "@/_components/shared/authButton";
import InputField from "@/_components/shared/inputField";
import Link from "next/link";
import React from "react";

const page = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLoginSubmit = async (e:any)=>{
    e.preventDefault();
    const name = e.target.email.value;
    const password = e.target.password.value;
    console.log({name, password});
    
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
            Login
          </h2>
          <form 
          onSubmit={handleLoginSubmit}
          >
            <InputField
              labelName="Email"
              type="email"
              name="email"
              placeholderText="Enter your email"
            />
            <InputField
              labelName="Password"
              type="password"
              name="password"
              placeholderText="Enter your password"
            />
            <AuthButton buttonName="Login" />
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-green-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
