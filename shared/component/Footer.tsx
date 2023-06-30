import Link from 'next/link'
import cn from 'classnames'
import { themeConfig } from '@shared/config'
import { InstagramIcon, Logo, MetaIcon, Slogan, WhatsappIcon } from '@component'

export const Footer = () => {
  const date = new Date()

  return (
    <div
      className={cn(
        'flex flex-col w-full justify-center shadow sm:py-12 md:py-2 font-inter text-slate-50 border-t-2',
        themeConfig.footerDividerBorder
      )}
    >
      <div
        className={
          'py-6 sm:py-8 md:py-8 flex items-center w-full justify-center'
        }
      >
        <Link href={'/'}>
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-center items-center lg:space-x-2">
            <Logo />
            <Slogan />
          </div>
        </Link>
      </div>

      <div className={cn('h-[2px] w-full', themeConfig.footerDivider)}></div>

      <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-10 py-8 md:py-8">
        <Link href={'/'}>
          <li className={'nav-item-container uppercase'}>Home</li>
        </Link>
        <Link href={'/about'}>
          <li className={'nav-item-container uppercase'}>About us</li>
        </Link>
        <Link href={'/careers'}>
          <li className={'nav-item-container uppercase'}>Careers</li>
        </Link>
        <Link href={'/support'}>
          <li className={'nav-item-container uppercase'}>Help</li>
        </Link>
        <Link href={'/contact'}>
          <li className={'nav-item-container uppercase'}>Contact us</li>
        </Link>
      </ul>

      <div className={cn('h-[2px] w-full', themeConfig.footerDivider)}></div>

      <div className="flex flex-wrap items-center justify-center gap-4 py-7 md:py-6">
        <MetaIcon />
        <InstagramIcon />
        <WhatsappIcon />
      </div>

      <div className={cn('h-[2px] w-full', themeConfig.footerDivider)}></div>

      <div className="flex items-center md:flex-nowrap flex-wrap justify-center gap-3 py-8 md:py-6 text-sm text-slate-50 select-none">
        <p>&copy; {date.getFullYear()} All Rights Reserved</p>
        <p>Terms & Conditions</p>
        <p>Blogs</p>
        <p>Customer Services</p>
      </div>
    </div>
  )
}
