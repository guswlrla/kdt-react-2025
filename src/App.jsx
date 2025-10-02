import './App.css'
import MyClock from './02/MyClock'
import MyDiv from './03/MyDiv1'
import MyList from './04/MyList'

/*
* 컴포넌트의 확장자는 jsx
* 컴포넌트를 만드는건 funtion을 만드는 것 
* 컴포넌트는 반드시 return이 있어야 함
*/

function App() {
  return ( // return 할 때 무조건 한 개의 태그만 쓸 수 있음
    // <></> - 프래그먼트 안의 태그들이 프레그먼트에 묶여서 return 됨
    // 컴포넌트는 재사용 가능 (컴포넌트는 UI 조각(모듈))
    <div className='w-full h-screen justify-center items-center flex flex-col'> 
      {/* <MyClock/> */}
      {/* <MyDiv /> */}
      <MyList />
    </div>
  )
}

// 컴포넌트를 import 하려면 export 해야함
export default App