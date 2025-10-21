import FoodCard from './FoodCard'
import fooddata from './fooddata.json'
import TailButton from '../components/TaliButton';
import { useState } from 'react'

// 중복없는 카테고리 목록 생성
const categories = [ 
  ...new Set(fooddata.map(item => item["운영주체 분류"].replaceAll(' ', ''))) // fooddata의 각 항목에서 "운영주체 분류" 값을 추출(공백 오타가 있어서 제거함)
];
// console.log(categories);

export default function FoodMain() {
  const [foodData, setFoodData] = useState(fooddata); // 초기값은 전체 데이터(fooddata)

  const handleShowAll = () => {setFoodData(fooddata)}; // 전체 버튼 클릭 시 실행
  const handleCategory = (ct) => { // 선택된 카테고리(ct)가 handleCategory(item)의 item으로 전달됨
    let tm = fooddata.filter(item => item["운영주체 분류"].replaceAll(' ', '') === ct); // ()안의 조건을 만족하는 데이터만 남김
    setFoodData(tm); // 필터링된 데이터로 상태 업데이트
  };

  return (
    <div className='w-full h-full flex flex-col justify-start mt-10'>
      <div className='w-9/10 bg-blue-100 p-5 my-5 flex justify-center items-center gap-4'>
        <TailButton color="blue" caption="전체" onHandle={handleShowAll} />
        {categories.map(item => <TailButton key={item} color="blue" caption={item} onHandle={() => handleCategory(item)} />)}
      </div>
      <div className='w-9/10 grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
        {/* {foodData.map((item, idx) => <FoodCard key={item['연락처(대표번호)']+idx} category={item.구분} company={item.사업장명} org={item.운영주체명} address={item['사업장 소재지']} tel={item['연락처(대표번호)']} fax={item.팩스번호}/>)} */}
        {foodData.map((item, idx) => <FoodCard key={item['연락처(대표번호)']+idx} data={item}/>)}
      </div>
    </div>
  )
}
