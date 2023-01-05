import React, { useRef } from "react";
import Input from "./Input";
import Input2 from "./Input2";

const Field=()=> {
  const inputRef = useRef(null);
  function handleFocus() {
    inputRef.current.focus();
  }
  //1. useRef를 이용하는 방법 : ref는 props가 아니므로 props로 전달하기 위해서는 inputRef와 같이 ref가 이닌 다른 이름으로 전달해야함(ref 이름 사용 불가능)
  // return (
  //   <>
  //     <Input inputRef={inputRef} />
  //     <button onClick={handleFocus}>입력란 포커스</button>
  //   </>
  // );

  return(
   //2. forwardRef를 이용하는 방법 : ref를 받을 컴포넌트를 forwardRef로 감싸주면 props와 ref의 두개의 인자를 넘겨받을 수있음(ref 이름 사용가능)
    <>
      <Input2 ref={inputRef} data={"data"}/>
      <button onClick={handleFocus}>입력란 포커스</button>
    </>
  )
}

export default Field;
