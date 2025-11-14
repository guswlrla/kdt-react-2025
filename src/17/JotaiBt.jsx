import { useAtom } from "jotai"
import { atomCnt } from "./atomsCnt";
import TailButton from "../components/TailButton"

export default function JotaiBt() {
  const [cnt, setCnt] = useAtom(atomCnt);
  return (
    <div className="w-full flex justify-center gap-3">
        <TailButton caption="증가" color="blue" onHandle={()=> setCnt(cnt+1)} />
        <TailButton caption="감소" color="orange" onHandle={()=> setCnt(cnt-1)} />
    </div>
  )
}
