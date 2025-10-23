import React from 'react'
import TailButton from '../components/TaliButton'

export default function TrafficNav({ title, category, selectC, setSelectC }) {
  return (
    <div className='w-full h-24 flex justify-between items-center py-2 px-4 bg-gray-100'>
      <div className='text-xl font-bold'>
        교통사고 {title}
      </div>
      <div className='flex justify-end gap-3'>
        {category.map(item => <TailButton key={item} color={selectC == item ? 'orange' : 'blue'} caption={item} onHandle={() => setSelectC(item)} />)}
      </div>
    </div>
  )
}
