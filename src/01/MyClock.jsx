import MyClockImage from './02/MyClockImage';
import MyClockTime from './02/MyClockTime';

function MyClock() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <MyClockImage />
            <MyClockTime />
        </div>
    )
}

export default MyClock
