function CurrentTime() {
    return(
        <div className='font-bold w-1/2 bg-black text-white flex justify-center '>
            현재시간 : 
            <span className='text-yellow-300'> {new Date().toLocaleTimeString()}</span>
        </div>
    )
}

export default CurrentTime;