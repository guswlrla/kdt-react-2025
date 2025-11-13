import { useState, useEffect ,useRef } from "react";
import SubwayBox from "./SubwayBox";
import TailSelect from "../components/TailSelect";
import sarea from "./sarea.json";

export default function Subway() {
  const [totalData, setTotalData] = useState([]);
  const subway = useRef();

  const handleSarea = () => {
    if(!subway.current.value) return;
    // console.log(subway.current.value);
    getFetchData();
  }

  const getFetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const date = new Date().toISOString().slice(0,10).replaceAll('-', '');
    // console.log(date)
    const baseUrl = "/api/6260000/IndoorAirQuality/getIndoorAirQualityByStation?";
    const url = `${baseUrl}serviceKey=${apiKey}&pageNo=1&numOfRows=50&resultType=json&controlnumber=${date}&areaIndex=${subway.current.value}`;

    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.response.body.items.item);
    setTotalData(data.response.body.items.item);
  }

  return (
    <div className="w-full flex flex-col justify-start mt-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <h1 className="w-full p-5 text-2xl font-bold text-center">부산 실내공기질 정보</h1>
        <TailSelect id="selArea" selectLabel="부산 지하철역" ref={subway}
                    optionKey={sarea.map(item => item["코드"])} optionVal={sarea.map(item => item["측정소"])} 
                    onHandle={handleSarea} />
      </div>
      {totalData && totalData.map((item, idx) => <SubwayBox key={item.controlnumber} idx={idx%2} item={item} />)}
    </div>
  )
}
