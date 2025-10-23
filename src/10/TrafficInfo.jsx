import React from 'react'

export default function TrafficInfo({ infoData }) {
    const show = ['사고건수', '사망자수', '경상자수', '부상신고자수'];
    return (
        <div className='w-full flex justify-center items-start p-3'>
            <table className='table-fixed w-8/10 border-1 border-gray-400 border-collapse text-sm'>
                <thead className='bg-gray-200 border-b-1 border-gray-400 '>
                    <tr>
                        <th>{ }</th>
                        {show.map(item => <th className='text-right border-l-1 border-gray-400 p-1' key={item}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-center border-r-1 border-gray-400'>{infoData["도로종류"]}</td>
                        {show.map(item => <td className='text-right border-l-1 border-gray-400 p-3' key={item}>{parseInt(infoData[item]).toLocaleString()}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
