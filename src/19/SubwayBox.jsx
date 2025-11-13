import scode from "./scode.json";

export default function SubwayBox({idx, item}) {
  return (
    <div className="w-full flex flex-col justify-start my-2">
      <div className="w-full px-5 font-bold">
        {item.site} {item.city} (시각 : {item.controlnumber.slice(0,4)}.
                                 {item.controlnumber.slice(4,6)}.
                                 {item.controlnumber.slice(6,8)} &nbsp;
                                 {item.controlnumber.slice(8,10)}시)
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-2">
        {
            Object.keys(scode).map(sc => <div key={sc} className="w-full flex flex-col border border-gray-400">
                <div className="bg-blue-900 text-white font-bold text-sm p-2 flex flex-col justify-center items-center">
                  <p>{scode[sc]["name"]}</p>
                  <p>({sc})</p>
                </div>
                <div className="text-center text-gray-700">
                   {item[sc]}{item[sc] == '-' ? '' : scode[sc]["unit"]} 
                </div>
            </div>)
        }
      </div>
    </div>
  )
}
