import MyDiv3 from './MyDiv3';

export default function MyDiv2() {
  return (
    <div className='bg-lime-600 w-11/12 h-72 p-5'>
      <span className='text-white font-bold'>div1 &gt; div2</span>
      <MyDiv3 />
    </div>
  )
}
