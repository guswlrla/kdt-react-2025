import busan from "../assets/busan.png"
import bank from "../assets/bank.png"
import market from "../assets/market.png"
import { useState } from "react"

export default function FoodCard({category, company, org, address, tel, fax}) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(prev => !prev);
  }

  return (
    <div className="w-full h-44 flex justify-start items-start border-1 border-gray-300 p-3">
        <div className="w-1/3 pr-5 pl-2 py-2 flex justify-center">
            <img src={category == "광역지원센터" ? busan : category == "기초푸드뱅크" ? bank : market} 
                 alt={category} className="w-40 h-35"/>
        </div>
        <div className="w-2/3 h-full flex flex-col justify-between py-2">
            <div>
                <h1 className="text-xl font-bold">{company}</h1>
                <p className="text-lg font-bold">{org}</p>
                <p>{address}</p>
            </div>
            <div className="w-full h-10 bg-gray-400 text-white cursor-pointer" onClick={handleClick}>
                {isActive &&
                <ul className="w-full h-full flex justify-center items-center space-x-6">
                    <li className="flex">📞{tel}</li>
                    <li className="flex">🖨{fax}</li>
                </ul>
                }
            </div>
        </div>
    </div>
  )
}

