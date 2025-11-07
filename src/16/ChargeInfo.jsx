import TailSelect from "../components/TailSelect";
import zcode from "./data/zcode.json";
import zscode from "./data/zscode.json";
import kind from "./data/kind.json";
import kinddetail from "./data/kinddetail.json";
import stat from "./data/stat.json";
import TailButton from "../components/TailButton";
import { useEffect, useRef, useState } from "react";
import ChargeCard from "./ChargeCard";
import ChargeStat from "./ChargeStat";
import { Link } from "react-router-dom";

export default function ChargeInfo() {
  const [zsc, setZsc] = useState(); // 시도를 선택한 뒤 지역동 목록
  const [kdc, setKdc] = useState(); // 충전소구분을 선택한 뒤 충전소 상세 목록

  // select 박스
  const sel1Ref = useRef();
  const sel2Ref = useRef();
  const sel3Ref = useRef();
  const sel4Ref = useRef();

  const [cData, setCdata] = useState([]); // 전체 데이터

  const [isLoading, setIsLoading] = useState(false); // 로딩중 표시

  // 선택한 시도의 지역동 목록을 보이게 함
  const handleZcode = () => {
    if(!zscode[sel1Ref.current.value]) {
      setZsc(null);
      return;
    }
    setZsc(zscode[sel1Ref.current.value]);
  }

  // 선택한 충전소구분의 충전소 상센 목록을 보이게 함
  const handleKind = () => {
    if(!kinddetail[sel3Ref.current.value]) {
      setKdc(null);
      return;
    }
    setKdc(kinddetail[sel3Ref.current.value]);
  }

  // 확인버튼
  const handleClick1 = () => {
    if(sel1Ref.current.value == "") {
      alert("시도를 선택해주세요.");
      sel1Ref.current.focus();
      return;
    }
    if(sel2Ref.current.value == "") {
      alert("지역동을 선택해주세요.");
      sel2Ref.current.focus();
      return;
    }
    if(sel3Ref.current.value == "") {
      alert("충전소구분을 선택해주세요.");
      sel3Ref.current.focus();
      return;
    }
    if(sel4Ref.current.value == "") {
      alert("충전소상세를 선택해주세요.");
      sel4Ref.current.focus();
      return;
    }

    getFetchData();
  }

  // 취소버튼
  const handleClick2 = () => {
    sel1Ref.current.value = "";
    sel2Ref.current.value = "";
    sel3Ref.current.value = "";
    sel4Ref.current.value = "";

    setZsc();
    setKdc();
    setCdata([]);
  }

  // 데이터 가져오기
  const getFetchData = async () => {
    const api = import.meta.env.VITE_API_KEY;
    const url = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=${api}&pageNo=1&numOfRows=100&zcode=${sel1Ref.current.value}&zscode=${sel2Ref.current.value}&kind=${sel3Ref.current.value}&kindDetail=${sel4Ref.current.value}&dataType=JSON`;

    setIsLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();

    setCdata(data.items.item);
    setIsLoading(false);
  }

  // fetch가 완료되면
  useEffect(() => {
    if(cData.length == 0) return;

    console.log(cData);
  }, [cData])

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h1 className="w-full text-2xl font-bold mt-3 p-5 mb-1 text-left">전기차 충전소 정보🔋</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 bg-gray-50 p-5">
        <TailSelect id="sel1" selectLabel="시도" ref={sel1Ref} optionKey={Object.keys(zcode)} optionVal={Object.values(zcode)} onHandle={handleZcode}/>
        <TailSelect id="sel2" selectLabel="지역동" ref={sel2Ref} optionKey={zsc ? Object.values(zsc) : "" } optionVal={zsc ? Object.keys(zsc) : "" } onHandle={()=>{}}/>
        <TailSelect id="sel3" selectLabel="충전소구분" ref={sel3Ref} optionKey={Object.keys(kind)} optionVal={Object.values(kind)} onHandle={handleKind}/>
        <TailSelect id="sel4" selectLabel="충전소상세" ref={sel4Ref} optionKey={kdc ? Object.values(kdc) : ""} optionVal={kdc ? Object.keys(kdc) : ""} onHandle={()=>{}}/>
        <TailButton color='gray' caption='검색' onHandle={handleClick1}/>
        <TailButton color='gray' caption='취소' onHandle={handleClick2}/>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 mt-5">
        <ChargeCard color="white" title="충전소 수" num={cData.length} />
        {Object.keys(stat).map(item => <ChargeCard key={stat[item]+item} color="white" title={stat[item]} num={cData.filter(item2 => item2.stat == item).length} />)}
      </div>
      <div>
        {isLoading && <div className="w-full text-2xl font-bold mt-3 p-5 mb-1 text-left"><img src="/img/loading.gif" alt="로딩중"/></div>}
        {cData.map((item, idx) => <Link to='/charge/detail' state={{contents:item}} key={item.chgerId + idx}><ChargeStat key={idx} title={item.statNm} id={item.chgerId} /></Link>)}
      </div>
    </div>
  )
}
