import React from "react";

interface InputFieldProps {
  labelName: string;
  type: string;
  name: string;
  placeholderText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  labelName,
  type,
  name,
  placeholderText,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 mb-2">
        {labelName}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default InputField;
