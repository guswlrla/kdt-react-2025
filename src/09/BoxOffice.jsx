import { useState, useEffect } from "react";

export default function BoxOffice() {
    const [movie, setMovie] = useState([]);
    const [info, setInfo] = useState([]);

    const getYesterday = () => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        let year = yesterday.getFullYear(); // 연도 4자리
        let mon = yesterday.getMonth() + 1; // 월 1~12, 0부터 시작해서 1을 더해줬음
        let day = yesterday.getDate(); // 일 1~31

        return (year + '-' + String(mon).padStart(2,'0') + '-' + String(day).padStart(2,'0')); // padStart(목표길이, 채울문자)
    }

    const getFetchData = (targetDate) => {
        const api = import.meta.env.VITE_MV_API;
        // console.log(api);
        
        const baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        let date = targetDate || getYesterday().replaceAll('-', '')
        let url = `${baseUrl}key=${api}&targetDt=${date}`;
        // console.log(url);

        fetch(url).then(resp => resp.json())
        .then(data => {
            console.log(data.boxOfficeResult.dailyBoxOfficeList);
            setMovie(data.boxOfficeResult.dailyBoxOfficeList);
        })
        .catch(err => console.log(err));
    }

    const handleShowInfo = (mv) => {
        let temp = `[${mv.rankOldAndNew} : ${mv.openDt}] ${mv.movieNm}, 스크린 수 : ${parseInt(mv.scrnCnt).toLocaleString()}, 상영횟수 : ${parseInt(mv.showCnt).toLocaleString()}`;
        setInfo(temp);
    }

    const handleSelectDate = (e) => {
        let date = e.target.value.replaceAll('-', '');
        getFetchData(date);
    }

    // 컴포넌트 생성 시 한 번
    useEffect(() => {
        getFetchData();
    }, [])

    return (
    <div className="w-full h-full flex flex-col justify-start items-center mt-10">
        <h1 className="w-9/10 text-2xl font-bold text-center p-5">🎬일일 박스오피스</h1>
        <div className="w-9/10 flex justify-end">
            <input className="text-gray-700" type="date" onChange={handleSelectDate} max={getYesterday()}></input>
        </div>
        <table className="w-9/10 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-4 py-3">순위</th>
                    <th scope="col" className="px-4 py-3">영화명</th>
                    <th scope="col" className="px-4 py-3">매출액</th>
                    <th scope="col" className="px-4 py-3">관객수</th>
                    <th scope="col" className="px-4 py-3">누적 매출액</th>
                    <th scope="col" className="px-4 py-3">누적 관객수</th>
                    <th scope="col" className="px-4 py-3">증감율</th>
                </tr>
            </thead>
            <tbody>
                {movie.map(item =>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 hover:cursor-pointer dark:hover:bg-gray-600"
                    key={item.movieCd} onClick={() => handleShowInfo(item)}>
                    <td scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.rank}</td>
                    <td className="px-4 py-2">{item.movieNm}</td>
                    <td className="px-4 py-2 text-right">{parseInt(item.salesAmt).toLocaleString()}</td>
                    <td className="px-4 py-2 text-right"> {parseInt(item.audiCnt).toLocaleString()}</td>
                    <td className="px-4 py-2 text-right"> {parseInt(item.salesAcc).toLocaleString()}</td>
                    <td className="px-4 py-2 text-right"> {parseInt(item.audiAcc).toLocaleString()}</td>
                    <td className="px-4 py-2 text-center">{item.rankInten > 0 ? <span className="text-red-500">▲{item.rankInten}</span> : item.rankInten < 0 ? <span className="text-blue-500">▼{Math.abs(item.rankInten)}</span> : "-"} </td>
                </tr>
                )}
            </tbody>
        </table>
        <div className="w-9/10 h-14 p-5 flex justify-center items-center bg-gray-300 font-bold">
            {info}
        </div>
    </div>
  )
}
