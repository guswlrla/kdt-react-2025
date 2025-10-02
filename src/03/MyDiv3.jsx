export default function MyDiv3({div1, div2, div3}) {
  return (
    <div className='bg-lime-400 w-9/10 h-9/10 flex flex-col justify-start items-start font-bold p-10 m-10 text-white text-2xl'>
      {/* <h1>{props.dv1} &gt; {props.dv2} &gt; {props.dv3}</h1> */}
      <h1>{div1} &gt; {div2} &gt; {div3}</h1>
    </div>
  )
}
