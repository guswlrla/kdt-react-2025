import MyDiv2 from './MyDiv2';

export default function MyDiv1() {
  // 변수 3개를 div2에 전달해야 함(MyDiv2,3에 또 변수를 쓰는게 아님)
  const d1 = 'div1';
  const d2 = 'div2';
  const d3 = 'div3';
  return (
    <div className='bg-lime-800 w-full md:w-7/10 h-2/3 flex flex-col justify-start items-start font-bold p-10 text-white text-2xl'>
      <h1>{d1}</h1>
      {/* 속성명은 마음대로 써도 됨 */}
      {/* MyDiv2도 태그니까 속성, 값을 써서 전달 가능 */}
      <MyDiv2 dv1={d1} dv2={d2} dv3={d3}/>
    </div>
  )
}
