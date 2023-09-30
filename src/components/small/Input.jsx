import React from "react";
import TextField from "@mui/material/TextField";

function Input({ lable, onChange, onKeyUp, type, value, name, placeholder }) {
  return (
    <>
      <input
        label={lable}
        size="small"
        type={type}
        onChange={onChange}
        onKeyUp={onKeyUp}
        autoComplete="off"
        autoFocus
        value={value}
        required
        name={name}
        style={{ width: "100%" }}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
