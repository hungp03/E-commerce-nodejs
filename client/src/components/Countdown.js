import React, {memo} from 'react'

const Countdown = ({unit, number}) => {
  return (
    <div className='flex flex-col w-[30%] h-[60px] border justify-center items-center mb-4 bg-[#F4F4F4]'>
        <span className='text-[18px] text-gray-800'>{number}</span>
        <span className='text-xs text-gray-700'>{unit}</span>
    </div>
  )
}

export default memo(Countdown)