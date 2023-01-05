import React, { forwardRef, useRef } from "react";

const Input2 = forwardRef((props,ref)=> {
  console.log(props, ref,)//{data: 'data'} {current:input}
  //리액트 컴포넌트를 forwardRef로 감싸주면 ref라는 두번쨰 매개변수를 받을 수 있게 됨
    return <input type="text" ref={ref} />;
  })

export default Input2