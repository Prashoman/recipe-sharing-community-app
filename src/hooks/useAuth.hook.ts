/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginApi } from "@/Service/AuthService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUserLogin = () => {
  return useMutation<any, Error, any>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginApi(userData),
    onSuccess: (response) => {
      toast.success(response.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
