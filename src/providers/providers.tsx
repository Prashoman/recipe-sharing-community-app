"use client";
import { HomeContextProvider } from "@/lib/context/Home.Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomeContextProvider>{children}</HomeContextProvider>
    </QueryClientProvider>
  );
};
export default Providers;
