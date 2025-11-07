import { useEffect, useState, useRef } from "react";
import TailCard from "../components/TailCard";
import { Link } from "react-router-dom";

// 상세정보에 들어가고 나오면 전에 있던 상태로 돌아가기
import { Suspense } from "react";

import { useAtom } from 'jotai';
import { selGuAtom, festivalFetchData } from "./atomFestival";

export default function Festival() {
  return(
  <Suspense fallback="로딩중...">
    <FestivalContent />
  </Suspense>
  );
}

function FestivalContent() {
  const [data] = useAtom(festivalFetchData);
  const [gu, setGu] = useAtom(selGuAtom);
  const [area, setArea] = useState([]);
  const [areaFestival, setAreaFestival] = useState([]);
  const selRef = useRef();

  const handleChange = () => {
    setGu(selRef.current.value);
  }

  useEffect(() => {
    if(!gu) {
      setAreaFestival([]);
    } else {
      let tm = data.filter(item => item.GUGUN_NM == gu);
      setAreaFestival(tm);
    }
  }, [gu, data]);

  useEffect(() => {
    if(data.length == 0) return;

    let tm = data.map(item => item.GUGUN_NM);
    tm = [...new Set(tm)].sort(); // 중복 제거, 정렬
    tm = tm.map(item => <option key={item} value={item}>{item}</option>)
    setArea(tm);
    console.log(tm);
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-9/10 flex flex-col justify-center items-center p-5">
        <h1 className="text-2xl font-bold p-4">부산 축제 정보 서비스✨</h1>
        <select className="w-1/3 bg-gray-100 border border-gray-200 rounded" onChange={handleChange} ref={selRef} >
          <option className="text-center" value="">=== 지역을 선택하세요. ===</option>
          {area}
        </select>
        <div className="mt-4 w-9/10 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areaFestival.map((item, idx) => <Link to='/festival/contents' state={{contents:item}} key={item.UC_SEQ + idx}><TailCard key={item.UC_SEQ + idx} imgUrl={item.MAIN_IMG_THUMB} title={item.MAIN_TITLE.includes('(') ? item.MAIN_TITLE.split('(')[0].trim() : item.MAIN_TITLE.trim()} subtitle={item.SUBTITLE} tag={item.PLACE}/></Link>
          )}
        </div>
      </div>
    </div>
      
  )
}
