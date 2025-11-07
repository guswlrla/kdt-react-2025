import { useLocation, useNavigate } from "react-router-dom"
import TailButton from "../components/TailButton";

export default function FestivalContents() {
  const location = useLocation();
  const navigate = useNavigate();
  const contents = location.state.contents;
  console.log(contents);

  const handleHome = () => {
    navigate('/festival');
  }

  return (
    <div className="w-full flex flex-col justify-start items-center p-5">
        <h1 className="w-full text-2xl font-bold p-5 mt-5 mb-5">{contents.TITLE}</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="w-full h-90 flex flex-col justify-start items-center overflow-hidden border rounded-2xl shadow-sm bg-white border-gray-200">
          <img className="rounded-2xl w-full h-full object-cover" src={contents.MAIN_IMG_THUMB} />
        </div>
        <div className="md:col-span-2 border rounded-2xl shadow-sm bg-white border-gray-200 p-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-2">
              <div className="p-2 md:text-right">축제구군</div>
              <div className="text-lg md:col-span-5 p-2">{contents.GUGUN_NM}</div>
              <div className="p-2 md:text-right">주소</div>
              <div className="text-lg md:col-span-5 p-2">{contents.ADDR1}</div>
              <div className="p-2 md:text-right">연락처</div>
              <div className="text-lg md:col-span-5 p-2">{contents.CNTCT_TEL}</div>
              <div className="p-2 md:text-right">홈페이지 </div>
              <div className="text-lg md:col-span-5 p-2">{contents.HOMEPAGE_URL}</div>
              <div className="p-2 md:text-right">상세내용 </div>
              <div className="text-lg md:col-span-5 p-2">{contents.ITEMCNTNTS}</div>
          </div>
        </div>
      </div>
      <div className="mt-5"><TailButton color='gray' caption='목록으로' onHandle={handleHome} /></div>
    </div>
  )
}
