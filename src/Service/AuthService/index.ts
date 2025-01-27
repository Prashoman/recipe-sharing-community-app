/* eslint-disable @typescript-eslint/no-explicit-any */
"user server";
import axiosInstance from "@/lib/AxiosIntance";

export const loginApi = async (userData: any) => {
  try {
    const response = await axiosInstance.post("auth/login", {
      userData,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
