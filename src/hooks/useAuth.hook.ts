/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginApi, registerApi } from "@/Service/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
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

export const useUserRegister = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (userData) => await registerApi(userData),
    onSuccess: (data) => {
      if (data) {
        if (data.success) {
          toast.success(data.message);
        }
        if (!data.success) {
          console.log(data.errorSources);
          
          data.errorSources.map((e: { message: string }) =>
            toast.error(e.message)
          );
        }
      } else {
        toast.error("Something went wrong");
      }
    },
    onError: (error) => {
      // console.log({error});
      toast.error(error.message);
    },
  });
};
