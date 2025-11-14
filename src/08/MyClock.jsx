import MyClockImage from '../02/MyClockImage';
import MyClockTime from './MyClockTime';

function MyClock() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center mt-40'>
            <MyClockImage />
            <MyClockTime />
        </div>
    )
}

export default MyClock
