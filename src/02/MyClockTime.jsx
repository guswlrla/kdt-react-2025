function MyClockTime() {
    return (
        <div className='w-1/2 text-2xl font-bold p-5 m-5 text-center'>
            현재시간 : {new Date().toLocaleTimeString()}
        </div>
    )
}

export default MyClockTime
