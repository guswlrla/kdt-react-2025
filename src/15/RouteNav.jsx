import { Link, useNavigate } from "react-router-dom"

export default function RouteNav() {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/p2?item1=수박&item2=오이"); // 쿼리스트링 - 값이 있으면 넣고, 없으면 안넣는 방식
  }
  return (
    <div className='w-full h-40 flex justify-center items-center'>
        {/* 이동하는 방법 2가지 */}
        {/* 1. Link로 이동, 2. useNavigate 훅으로 이동  */}
        <Link to="/" className='py-2 px-5 mx-2 rounded-xl bg-blue-200 border border-gray-300 hover:bg-blue-300 hover:cursor-pointer'>
            홈
        </Link>
        <Link to="/p1/사과/바나나" className='py-2 px-5 mx-2 rounded-xl bg-blue-200 border border-gray-300 hover:bg-blue-300 hover:cursor-pointer'>
            페이지1
        </Link>
        {/* <Link to="/p2" className='py-2 px-5 mx-2 rounded-xl bg-blue-200 border border-gray-300 hover:bg-blue-300 hover:cursor-pointer'>
            페이지2
        </Link> */}
        <div className='py-2 px-5 mx-2 rounded-xl bg-blue-200 border border-gray-300 hover:bg-blue-300 hover:cursor-pointer' onClick={handleClick}>
            페이지2
        </div>
    </div>
    )
}
