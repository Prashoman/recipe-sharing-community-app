/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
// import { envConfig } from "@/config";
// import { cookies } from "next/headers";
import axiosInstance from "@/lib/AxiosIntance";

export const loginApi = async (userData: any) => {
  try {
    const response = await axiosInstance.post("auth/login", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const registerApi = async (userData: any) => {
  try {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "An error occurred during registration",
    };
  }
};
