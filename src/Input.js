import React from "react";

const Input=(props)=> {
    const {inputRef}=props
    return <input type="text" ref={inputRef} />;
  }

export default Input