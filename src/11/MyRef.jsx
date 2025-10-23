import { useState, useRef } from "react";

export default function MyRef() {
    // 컴포넌트 변수
    let cnt = 0;
    // state 변수
    const [scnt, setScnt] = useState(0);
    // ref 변수
    const rcnt = useRef(0);

  const handleCnt = () => {
    cnt = cnt + 1;
    console.log(cnt);
  }

  const handlesCnt = () => {
    setScnt(scnt+1);
  }

  const handlerCnt = () => {
    rcnt.current = rcnt.current+1;
    console.log(rcnt);
  }

  return (
    <div className='w-full h-full text-xl font-bold flex justify-center items-center space-x-10'>
      <div>
        <div className=' bg-blue-500 text-white p-2 cursor-pointer' onClick={handleCnt}>일반 컴포넌트 변수</div>
        <div className='text-center text-blue-500'>{cnt}</div>
      </div>
      <div>
        <div className='bg-lime-500 text-white p-2 cursor-pointer' onClick={handlesCnt}>state 변수</div>
        <div className='text-center text-lime-500'>{scnt}</div>
      </div>
      <div>
        <div className='bg-orange-500 text-white p-2 cursor-pointer' onClick={handlerCnt}>ref 변수</div>
        <div className='text-center text-orange-500'>{rcnt.current}</div>
      </div>
    </div>
  )
}
