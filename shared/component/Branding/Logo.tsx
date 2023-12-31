import React from 'react'

import Image from 'next/image'
import { BRAND_NAME } from '@shared/component/Branding/constant'

export const Logo = () => {
  return (
    <>
      <div className={'font-inter hidden text-3xl dark:text-white md:block'}>
        <span className={'font-normal'}>{BRAND_NAME}</span>
      </div>
      <div className={'block md:hidden'}>
        <Image
          src="/images/web_store_hub_logo_info-blue.png"
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </div>
    </>
  )
}
