import FoodCard from './FoodCard'
import fooddata from './fooddata.json'
import { useState } from 'react'

export default function FoodMain() {
  const [tags, setTags] = useState([]);
  const data = fooddata.map(item => <FoodCard category={item.구분} company={item.사업장명} org={item.운영주체명} address={item['사업장 소재지']} tel={item['연락처(대표번호)']} fax={item.팩스번호}/>);
  return (
    <div className='w-9/10 grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
      {data}
    </div>
  )
}
