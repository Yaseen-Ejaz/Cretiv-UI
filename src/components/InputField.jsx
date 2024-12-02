import React from 'react';

const InputField = ({ label, name, id, type = 'text', value, onChange, required = false }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
