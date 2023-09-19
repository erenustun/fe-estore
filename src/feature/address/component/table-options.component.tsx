import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export const TableOptions = () => {
  const [options, setOptions] = useState(false)
  const toggleOptions = () => setOptions(!options)

  return (
    <>
      <EllipsisVerticalIcon
        className="relative h-5 w-5 cursor-pointer text-white hover:text-slate-200 active:text-slate-300"
        onClick={toggleOptions}
      />
      {/*{options ? 'true' : 'false'}*/}
      <div
        className={`bg-secondary-500 absolute right-0 top-0 z-10 mt-10 transform-gpu rounded border border-slate-800 shadow-lg transition duration-300 ease-in-out dark:bg-slate-300 sm:top-full sm:mt-2 ${
          options
            ? 'translate-y-0 opacity-100'
            : '-z-10 -translate-y-[5rem] select-none opacity-100'
        }`}
      ></div>
    </>
  )
}
