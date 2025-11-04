import TailSelect from "../components/TailSelect";
import zcode from "./data/zcode.json"
import zscode from "./data/zscode.json"
import kind from "./data/kind.json"
import kinddetail from "./data/kinddetail.json"
import TailButton from "../components/TailButton";
import { useEffect, useState } from "react";

export default function ChargeInfo() {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h1 className="w-full text-2xl font-bold mt-3 p-5 mb-1 text-left">전기차 충전소 정보🔋</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 bg-gray-50 p-5">
        <TailSelect id="sel1" selectLabel="시도" optionKey={Object.keys(zcode)} optionVal={Object.values(zcode)}/>
        {/* <TailSelect id="sel2" selectLabel="지역동" optionKey={} optionVal={}/> */}
        {/* <TailSelect id="sel3" selectLabel="충전소구분"/> */}
        {/* <TailSelect id="sel4" selectLabel="충전소상세"/> */}
        <TailButton color='gray' caption='검색' onHandle={() => {}}/>
        <TailButton color='gray' caption='취소' onHandle={() => {}}/>
      </div>
    </div>
  )
}
