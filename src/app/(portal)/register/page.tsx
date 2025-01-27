import AuthButton from "@/_components/shared/authButton";
import InputField from "@/_components/shared/inputField";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
            Register
          </h2>
          <form>
            <InputField labelName="Name" type="text" name="name" placeholderText="Enter your name" />
            <InputField labelName="Email" type="email" name="email" placeholderText="Enter your email" />
            <InputField labelName="Password" type="password" name="password" placeholderText="Enter your password" />
            <AuthButton buttonName="Register" />
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
