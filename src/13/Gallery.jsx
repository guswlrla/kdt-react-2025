import TailCard from "../components/TailCard";
import TailInput from "../components/TailInput";
import TailButton from "../components/TaliButton";
import { useRef, useEffect } from "react";

export default function Gallery() {
//   const kwRef = useEffect();

//   useEffect(() => {
//     kwRef.current.focus();
//   }, [])
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h1 className="w-9/10 p-5 mt-5 text-2xl font-bold text-center">
        한국관광공사 사진 정보 서비스
      </h1>
      <div className="w-9/10 p-5 bg-gray-50 flex justify-center items-center">
        <div>
            <TailInput type="text" name="txt1" />
        </div>
        <div className="flex gap-3">
            <TailButton color="gray" caption="확인"/>
            <TailButton color="gray" caption="취소"/>
        </div>
      </div>
      <div>
        <TailCard />
      </div>
    </div>
  )
}
