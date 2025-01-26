import { HomeContextProvider } from "@/lib/context/Home.Context";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <HomeContextProvider>{children}</HomeContextProvider>;
};
export default Providers;
