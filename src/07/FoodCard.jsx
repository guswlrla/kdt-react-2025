import busan from "../assets/busan.png"
import bank from "../assets/bank.png"
import market from "../assets/market.png"
import { useState } from "react"


export default function FoodCard({data}) { // props로 전달된 data 객체를 사용
  // 번호 토글 제어하는 useState
  const [isActive, setIsActive] = useState(false); // 초기값은 false
  const handleClick = () => { // 토글이 클릭이 되면
    setIsActive(prev => !prev); // 이전 상태값(previous value)을 반전시킴
  }

  return (
    <div className="w-full h-44 flex justify-start items-start border-1 border-gray-300 p-3">
        <div className="w-1/3 pr-5 pl-2 py-2 flex justify-center">
            <img src={data['구분'] == "광역지원센터" ? busan : data['구분'] == "기초푸드뱅크" ? bank : market} 
                 alt={data['구분']} className="w-40 h-35"/>
        </div>
        <div className="w-2/3 h-full flex flex-col justify-between py-2">
            <div>
                <h1 className="text-xl font-bold">{data['사업장명']}</h1>
                <p className="text-lg font-bold">{data['운영주체명']}</p>
                <p>{data['사업장 소재지']}</p>
            </div>
            <div className="w-full h-10 bg-gray-400 text-white cursor-pointer" onClick={handleClick}>
                {isActive &&
                <ul className="w-full h-full flex justify-center items-center space-x-6">
                    <li className="flex">📞{data['연락처(대표번호)']}</li>
                    <li className="flex">🖨{data['팩스번호']}</li>
                </ul>
                }
            </div>
        </div>
    </div>
  )
}

