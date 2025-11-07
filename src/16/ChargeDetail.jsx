import { useLocation } from "react-router-dom";

export default function ChargeDetail() {
  const location = useLocation();
  const contents = location.state.contents;
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h1>{contents.statNm}</h1>
    </div>
  )
}
