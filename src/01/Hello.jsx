function Hello() {
    let name = '김현지';
    return (
        // <div className='font-bold text-4xl' style={{color:"blue"}}>
        // tailwind 쓰면 위처럼 안해도 됨
        <div className='font-bold text-4xl text-cyan-600'>
            Hello React! {`${name}님 안녕하세요.` /* 표현식은 중괄호 안에 씀 */} 
        </div>
    )
}

export default Hello;