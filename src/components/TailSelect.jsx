import React from 'react'

export default function TailSelect({id, selectLabel, optionKey, optionVal, ref, onHandle}) {
    return (
      <div>
        <form className="max-w-sm mx-auto">
          <label htmlFor={optionKey} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{selectLabel}</label>
          <select id={id} ref={ref} onChange={onHandle} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" >{selectLabel}를 선택하세요.</option>
            {optionKey && optionKey.map((item, idx) => <option key={item} value={item}>{optionVal[idx]}</option>)}
          </select>
        </form>
      </div>
    )
}
