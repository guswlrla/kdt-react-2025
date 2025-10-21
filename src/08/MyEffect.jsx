import { useState, useEffect } from 'react'
import TailButton from '../components/TaliButton';

export default function MyEffect() {
  const [isActive, setIsActive] = useState(false);
  const [tag, setTag] = useState();
  
  const handleClick = () => {
    setIsActive(!isActive);
    console.log("handleClick", isActive);
  }
  
  const handleShow = () => {
    if (isActive)
        setTag(<h1>상태 on</h1>)
    else
        setTag(<h1>상태 off</h1>)
  }

  useEffect(() => {
    // 컴포넌트 생성시 한번 실행
    console.log("컴포넌트 생성");
  }, []);

  useEffect(() => {
    // state변수가 변경될 때([isActive]가 바뀔 때마다)
    console.log("useEffect", isActive);
  }, [isActive]);

   useEffect(() => {
    // 상태가 변경될 때마다(매 렌더링마다 실행)
    console.log("useEffect 상태가 변경될 때", isActive);
  });


  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div>{tag}</div>
        {isActive ? <TailButton color="blue" caption="useEffect" onHandle={handleClick}/> : 
                    <TailButton color="orange" caption="useEffect" onHandle={handleClick}/> }
        <TailButton color="lime" caption="태그변경" onHandle={handleShow}/>
    </div>
  )
}
// useState는 변수, 변수가 바뀌면 실행함
// useEffect는 특정 시점에 함수를 실행할 때 사용
// useEffect(실행되는 함수(콜백함수), 실행시점 결정(의존성 배열))
// 두번째 인자는 세가지 경우가 있음 (1. 빈배열, 2. state변수를 지정했을 때(여러개 가능), 3. 아예 없을 때)
// 1. 컴포넌트가 화면에 처음 나타나는 한번만 실행, 2. 변수가 바뀔 때마다 3. 무조건 컴포먼트가 바뀌는 상황이 오면
