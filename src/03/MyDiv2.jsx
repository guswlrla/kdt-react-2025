import MyDiv3 from './MyDiv3';
// props = {dv1:'div1', dv2:'div2'}로 넘어옴(속성:값)
// export default function MyDiv2(props) {
export default function MyDiv2({dv1, dv2, dv3}) {
  return (
    <div className='bg-lime-600 w-9/10 h-9/10 flex flex-col justify-start items-start font-bold p-10 m-10 text-white text-2xl'>
      {/* <h1>{props.dv1} &gt; {props.dv2}</h1>
      <MyDiv3 dv1={props.dv1} dv2={props.dv2} dv3={props.dv3}/> */}
      <h1>{dv1} &gt; {dv2}</h1>
      <MyDiv3 div1={dv1} div2={dv2} div3={dv3}/>
    </div>
  )
}
