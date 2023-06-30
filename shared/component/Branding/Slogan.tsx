import React from 'react'
import { BRAND_SLOGAN } from '@shared/component/Branding/constant'

export const Slogan = () => {
  return (
    <div
      className={
        'font-inter text-base dark:text-white text-center lg:text-left'
      }
    >
      <span className={'font-light flex gap-x-2'}>
        <span className={'hidden lg:block'}> | </span>
        {BRAND_SLOGAN}
      </span>
    </div>
  )
}
