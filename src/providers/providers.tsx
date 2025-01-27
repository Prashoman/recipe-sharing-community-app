"use client";
import { HomeContextProvider } from "@/lib/context/Home.Context";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// export const queryClient = new QueryClient();
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <QueryClientProvider client={queryClient}>
      <HomeContextProvider>{children}</HomeContextProvider>
    // </QueryClientProvider>
  );
};
export default Providers;
