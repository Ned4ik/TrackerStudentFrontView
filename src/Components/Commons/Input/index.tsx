import React from "react";

export interface IInputField {
  placeholder: string;
  value: string;
  type: "email" | "password";
  onChange: (e: any) => void;
}

export const InputField: React.FC<IInputField> = ({
  placeholder,
  value,
  type,
  onChange,
}) => {
  return (
    <input
      type={type}
      className="py-2 px-4 rounded-md bg-gray-200 outline-0 border-0"
      placeholder={placeholder}
      defaultValue={value}
      onChange={onChange}
    />
  );
};
