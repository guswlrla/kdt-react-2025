import React from 'react'

export default function TailInput({type, name, ref}) {
  return (
    <div>
        <input type={type} name={name} ref={ref} className="w-full p-2 bg-white border border-gray-400 rounded"/>
    </div>
  )
}
