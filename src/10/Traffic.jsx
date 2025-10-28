import { useEffect, useState } from 'react';
import TrafficNav from './TrafficNav'
import TrafficInfo from './TrafficInfo';
import trafficData from './교통사고통계.json';

export default function Traffic() {
    // 전체 데이터
    const [tdata, setTdata] = useState([]);
    // 대분류 데이터
    const [c1, setC1] = useState([]);
    const [selectC1, setSelectC1] = useState(); // 선택되면 색이 변하게
    // 중분류 데이터
    const [c2, setC2] = useState([]);
    const [selectC2, setSelectC2] = useState();
    // 사고 데이터
    const [tInfo, setTinfo] = useState([]);

    // const getFetchData = () => {
    //     setTdata(trafficData);
    // }

    const getFetchData = async () => {
        const api = import.meta.env.VITE_API_KEY;
        const baseUrl = "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=117&returnType=json&";
        let url = `${baseUrl}serviceKey=${api}`;

        const resp = await fetch(url);
        const data = await resp.json(); // 응답 온 것을 json으로 바꿔라
        setTdata(data.data);
    }

    useEffect(() => { // 렌더링 될 때 한 번만 실행 -> 데이터 보여주기
        getFetchData();
    }, []);

    // tdata가 변경될 때, 중복 제거 (의존성이 []인 곳에서 하면, 초기값이 빈 배열이라 결과가 안나옴)
    useEffect(() => {
        console.log(tdata);
    
        if(tdata.length == 0) return;
        let tm = tdata.map(item => item['사고유형대분류'])
        tm = [...new Set(tm)]; // 중복 제거, 배열로 바꾸기
        setC1(tm);
        
        console.log(tm);
    }, [tdata]);

    // 대분류 선택하면 하위에 있는 중분류 나타남
    useEffect(() => { 
        console.log(selectC1);

        let tm2 = tdata.filter(item => item['사고유형대분류'] === selectC1).map(item => item['사고유형중분류']);
        tm2 = [...new Set(tm2)];
        setC2(tm2);
        
        // 대분류를 다시 선택하면 초기화
        setSelectC2(); 
        setTinfo([]);
        
        console.log(tm2);
    }, [selectC1]);

    // 중분류 선택하면 사고 유형이 나타남
    useEffect(() => {
        if(!selectC1 || !selectC2) return;

        let tm3 = tdata.filter(item => item['사고유형대분류'] === selectC1 && item['사고유형중분류'] === selectC2);
        setTinfo(tm3);
    }, [selectC2])

    // 사고 데이터가 결정되면 출력
    useEffect(() => {
        console.log(tInfo);
    }, [tInfo])

  return (
    <div className='w-full flex flex-col justify-start items-center mt-10 gap-5'>
      {/* 앞 조건이 참일 때만 (앞 조건이 거짓이면 뒷 조건은 아예 보지도 않기 때문) */}
      {c1 && <TrafficNav title='대분류' category={c1} selectC={selectC1} setSelectC={setSelectC1}/>} 
      {c2 && <TrafficNav title='중분류' category={c2} selectC={selectC2} setSelectC={setSelectC2}/>}
      {tInfo && tInfo.map((item, idx) => <TrafficInfo key={item['도로종류']+idx} infoData={item}/>) }
    </div>
  )
}
