import TailCard from "../components/TailCard";
import TailInput from "../components/TailInput";
import TailButton from "../components/TaliButton";
import { useRef, useEffect, useState } from "react";

export default function Gallery() {
  const kwRef = useRef();
  const [data, setData] = useState([]); // 데이터 보여주기

  const getFetchData = async (txt) => {


    const api = import.meta.env.VITE_API_KEY;
    let keyWord = encodeURIComponent(txt);
    const baseUrl = "/photo-api/gallerySearchList1?";
    const url = `${baseUrl}serviceKey=${api}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyWord}&_type=json`;

    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.response.body.items.item);
    setData(data.response.body.items.item);
  }

  useEffect(() => { // 처음 렌더링 될 때, 자동으로 input에 포커스 두기
    kwRef.current.focus();
  }, [])

  const handleClick = () => { // 확인 버튼이 눌려지면, 데이터 가지고 오기
    if (kwRef.current.value == "") {
      alert("키워드를 입력해주세요.");
      kwRef.current.focus();
      return;
    }

    getFetchData(kwRef.current.value);
  }

  const handleClick2 = () => { // 취소 버튼이 눌려지면, 내용 지우기
    kwRef.current.value = ""; // input 내용 지우기
    setData([]); // 화면 내용 지우기
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-9/10 p-5 h-1/4 flex flex-col justify-center items-center">
        <h1 className="w-9/10 p-4 text-2xl font-bold text-center">
          한국관광공사 사진 정보 서비스
        </h1>
        <div className="grid grid-cols-2 gap-5">
          <TailInput type="text" name="txt1" ref={kwRef} />
          <div className="flex gap-2">
            <TailButton color="gray" caption="확인" onHandle={handleClick} />
            <TailButton color="gray" caption="취소" onHandle={handleClick2} />
          </div>
        </div>
      </div>
      <div className="mt-4 w-9/10 h-3/4 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(item => <TailCard key={item.galContentId} imgUrl={item.galWebImageUrl} title={item.galTitle} subtitle={item.galPhotographyLocation} tag={item.galSearchKeyword} />)}
      </div>
    </div>

  )
}
