import { useState, useEffect } from "react"

function MyClockTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        let timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, []) // 컴포넌트가 실행될 때, 한번만 실행
    return (
        <div className='w-1/2 text-2xl font-bold p-5 m-5 text-center'>
            현재시간 : {new Date().toLocaleTimeString()}
        </div>
    )
}

export default MyClockTime
