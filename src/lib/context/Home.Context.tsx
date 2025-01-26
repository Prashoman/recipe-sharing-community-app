"use client";

import { createContext, useContext } from "react";
import { TContextType } from "./contextType";
// import { HomeContextType } from "../types/Home.Context.type";

export const HomeContext = createContext<TContextType | undefined>(undefined);

export const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const value = {
        user: {},
        setUser: () => {},
    };
    
    return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}


export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("useHomeContext must be used within a HomeContextProvider");
  }
  return context;
};
