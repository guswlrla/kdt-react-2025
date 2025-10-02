import { useState } from "react"; // 1. useState 쓰려면 import 해야함

export default function MyListCard({title, imgUrl, content}) {
  // 2. useState 선언 - state변수, setter
  const [scnt, setScnt] = useState(0); // 초기값 = 0 
  const [dcnt, setDcnt] = useState(0); 

//   let cnt = 0;
  const handleClick = () => { // 좋아요
    // 상태가 변할 때, 화면을 업데이트하고 싶으면 useState(변수 제어)를 써야함
    // cnt = cnt +1
    setScnt(scnt + 1);
    // console.log(`${title} click : ${cnt}`);
  }
  const handleClick2 = () => { // 싫어요
    setDcnt(dcnt+1);
  }
  return (
    <div className='w-full flex justify-start items-start border-1 border-gray-300 p-5'>
      <div className="w-1/3">
        <img src={imgUrl} alt={title}/>
      </div>
      <div className="w-2/3 h-48 flex flex-col justify-between">
        <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-600 mt-5">{content}</p>
        </div>
        <div className="flex justify-end font-bold">
            <div className="cursor-pointer hover:text-red-500 mr-3" onClick={handleClick}>
                {scnt >= 1 ? '❤ ' : '🤍 '} {scnt}
            </div>
            <div className="cursor-pointer hover:text-red-500" onClick={handleClick2}>
                ⚡ {dcnt}
            </div>
        </div>
      </div>
    </div>
  )
}
