import React from "react";

type AuthButtonProps = {
  buttonName: string;
};

const AuthButton = ({ buttonName }: AuthButtonProps) => {
  return (
    <>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
      >
        {buttonName}
      </button>
    </>
  );
};

export default AuthButton;
