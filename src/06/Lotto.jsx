import TailButton from "../components/TaliButton";
import TailBall from "../components/TailBall";
import { useState } from "react";

export default function Lotto() {
  const[numbers, setNums] = useState([]);
  const[bonus, setbonus] = useState(null);

  const handleNum = () => {
  let nums = [];
  while(nums.length < 7) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (nums.includes(n)) continue;
    nums.push(n);
  }
  const bonus = nums.pop();
  nums.sort((a, b) => a - b);

  setNums(nums);
  setbonus(bonus);

  console.log("숫자 " + numbers);
  console.log("보너스 " + bonus);
}
  return (
    <div>
      <TailBall />
      <TailButton caption="로또번호생성" color="blue" onHandle={handleNum}/>
    </div>
  )
}
