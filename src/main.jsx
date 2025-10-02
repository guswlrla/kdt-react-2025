import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StricMode가 두 번 검사하기 때문에 콘솔에 두 번 찍힘
  <StrictMode>
    {/* App은 사용자 정의 태그 */}
    <App /> 
  </StrictMode>,
)
