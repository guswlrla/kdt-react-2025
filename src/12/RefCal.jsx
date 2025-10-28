import TailButton from "../components/TaliButton";
import { useRef, useEffect } from "react";

export default function RefCal() {
  // input 요소 ref 연결
  const txt1Ref = useRef();
  const txt2Ref = useRef();
  const txt3Ref = useRef();
  const opRef = useRef();

  // 첫번째 input에 포커스가 놓이면
  const handleTxt1 = () => {
    txt1Ref.current.value = "";
    txt2Ref.current.value = "";
    txt3Ref.current.value = "";
  }

  // 버튼이 눌려지면
  const handleClick = (e) => {
    e.preventDefault();

    let num1 = txt1Ref.current?.value ?? ""; // current에 값이 없으면(undefined) 빈문자열로 줌
    let num2 = txt2Ref.current?.value ?? "";

    let op = opRef.current?.value ?? "+"; // default값을 "+"로 줌

    let num3;
    switch (op) {
        case "+": num3 = Number(num1) + Number(num2); break;
        case "-": num3 = Number(num1) - Number(num2); break;
        case "*": num3 = Number(num1) * Number(num2); break;
        case "/": num2 == "" ? num3 = "오류" : num3 = Number(num1) / Number(num2); break;
    }
    txt3Ref.current.value = num3;
  }

  // 컴포넌트가 생성될 때
  useEffect(() => {
    txt1Ref.current.focus();
  }, []);


  return (
    <div className="w-full h-full flex justify-center items-start mt-10">
      <form className="w-9/10 h-30 flex justify-center items-center p-5 gap-3 bg-amber-100 flex-wrap">
        <input type="number" name="txt1" ref={txt1Ref} onFocus={handleTxt1} className="border border-gray-300 bg-white rounded p-2 " />
        <select ref={opRef} className="border border-gray-300 bg-white rounded p-2">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" name="txt2" ref={txt2Ref} className="border border-gray-300 bg-white rounded p-2"/>
        <TailButton color="gray" caption="=" onHandle={handleClick}/>
        <input type="text" name="txt3" ref={txt3Ref} readOnly className="border border-gray-300 bg-gray-100 text-right rounded p-2"/>
      </form>
    </div>
  )
}
