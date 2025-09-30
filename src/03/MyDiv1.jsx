import MyDiv2 from './MyDiv2';

export default function MyDiv1() {
  return (
    <div className='bg-lime-800 w-xl h-96 p-5'>
      <span className='text-white font-bold'>div1</span>
      <MyDiv2 />
    </div>
  )
}
