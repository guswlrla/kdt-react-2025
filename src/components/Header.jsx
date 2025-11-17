import { Link } from "react-router-dom"
import { isLoginAtom } from "../20/authAtom"
import { useAtomValue } from "jotai"

export default function Header() {
  const isLogin = useAtomValue(isLoginAtom);
  return (
    <header className='bg-gray-700 text-white shadow-md'>
      <nav className='container h-15 mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold text-blue-50'>KDT03</div>
        <ul className='flex space-x-4'>
          <li>
            <Link to='/' className='hover:text-lg'>홈</Link>
          </li>
          {isLogin && <>
          <li>
            <Link to='/lotto' className='hover:text-lg'>로또</Link>
          </li>
          <li>
            <Link to='/box' className='hover:text-lg'>박스오피스</Link>
          </li>
          <li>
            <Link to='/gallery' className='hover:text-lg'>사진정보</Link>
          </li>
          <li>
            <Link to='/festival' className='hover:text-lg'>축제정보</Link>
          </li>
          <li>
            <Link to='/charge' className='hover:text-lg'>전기차충전소</Link>
          </li>
          <li>
            <Link to='/todolist' className='hover:text-lg'>Todo</Link>
          </li>
          <li>
            <Link to='/subway' className='hover:text-lg'>부산실내공기질</Link>
          </li>
          </>}
        </ul>
      </nav>
    </header>
  )
}
