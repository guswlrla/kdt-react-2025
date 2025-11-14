// import { useEffect, useState } from "react"
import { useAtom } from "jotai";
import { atomCnt, dbAtomCnt } from "./AtomsCnt";
import { useAtomValue } from "jotai";
import JotaiBt from "./JotaiBt";

export default function JotaiCnt() {
// const [cnt, setCnt] = useState(0);
// const [dbCnt, setDbcnt] = useState(0);
  // atom은 useState 선언하는 것과 같지만, 상태 값만 읽어오기 때문에 useAtomValue를 써줌
  // const [cnt, setCnt] = useAtom(atomCnt);
  // const [dbCnt, setDbCnt] = useAtom(dbAtomCnt);
  const cnt = useAtomValue(atomCnt);
  const dbCnt = useAtomValue(dbAtomCnt);

//   useEffect(() => {
//     setDbcnt(cnt*2);
//   }, [cnt])
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="mt-10 text-3xl font-bold text-center">전역 상태관리</h1>
      <div className="w-full bg-gray-100 flex flex-col justify-start items-center p-4 my-8 text-2xl font-bold">
        <div>
          count : {cnt}
        </div>    
        <div>
          double count : {dbCnt}
        </div>                
      </div>
      {/* <JotaiBt cnt={cnt} setCnt={setCnt} /> */}
      <JotaiBt />
    </div>
  )
}