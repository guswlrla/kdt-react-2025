import { useEffect, useState, useRef } from "react";
import TailCard from "../components/TailCard";

export default function Festival() {
  const [data, setData] = useState([]); // 데이터 보여주기
  const [area, setArea] = useState([]);
  const [areaFestival, setAreaFestival] = useState([]);
  const selRef = useRef();

  const getFetchData = async () => {
    const api = import.meta.env.VITE_API_KEY;
    const baseUrl = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?";
    const url = `${baseUrl}serviceKey=${api}&pageNo=1&numOfRows=41&resultType=json`;

    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.getFestivalKr.item);
    setData(data.getFestivalKr.item);
  }

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    if(data.length == 0) return;

    let tm = data.map(item => item.GUGUN_NM);
    tm = [...new Set(tm)].sort(); // 중복 제거, 정렬
    tm = tm.map(item => <option key={item} value={item}>{item}</option>)
    setArea(tm);
    console.log(tm);
  }, [data]);

  const handleChange = () => {
    if(selRef.current.value == "") {
      setAreaFestival([]);
    }

    let tm = data.filter(item => item.GUGUN_NM == selRef.current.value);
    setAreaFestival(tm);
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-9/10 flex flex-col justify-center items-center p-5">
        <h1 className="text-2xl font-bold p-4">부산 축제 정보 서비스✨</h1>
        <select className="w-1/3 bg-gray-100 border border-gray-200 rounded" onChange={handleChange} ref={selRef}>
          <option className="text-center" value="">=== 지역을 선택하세요. ===</option>
          {area}
        </select>
        <div className="mt-4 w-9/10 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areaFestival.map(item => <TailCard key={item.UC_SEQ} imgUrl={item.MAIN_IMG_THUMB} title={item.MAIN_TITLE.includes('(') ? item.MAIN_TITLE.split('(')[0].trim() : item.MAIN_TITLE.trim()} subtitle={item.SUBTITLE} tag={item.PLACE}/>)}
        </div>
      </div>
    </div>
      
  )
}
