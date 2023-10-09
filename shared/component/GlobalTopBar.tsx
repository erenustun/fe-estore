import {
  AnimateIn,
  Badge,
  Container,
  FlexBox,
  InstagramIcon,
  LanguageChanger,
  List,
  MetaIcon,
  MobileNavigation,
  WhatsappIcon,
} from '@component'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { pushUri } from '@shared/util'
import { BookmarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import cn from 'classnames'
import { routeConfig, themeConfig } from '@shared/config'
import { FormattedMessage } from 'react-intl'

export const GlobalTopBar = () => {
  const [menuOpen, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menuOpen)

  const handleNavClick = (label: string | number) => {
    pushUri(`/${label}`)
    setMenu(!menuOpen)
  }

  return (
    <div className="select-none bg-slate-900 py-1.5">
      <Container className={cn('dark:text-slate-300')}>
        <FlexBox className="mt-1 justify-between">
          <div className="ml-0 flex w-1/3 flex-wrap items-center justify-start space-x-2 sm:mt-0 sm:gap-x-3">
            <MetaIcon alternativeIcon={true} className="h-4 w-4" />
            <InstagramIcon className="h-5 w-5" />
            <WhatsappIcon className="h-5 w-5" />
          </div>

          <FlexBox className="hidden w-1/3 flex-col items-center gap-y-1 lg:flex lg:flex-row lg:justify-evenly">
            <FlexBox className="items-center gap-x-1">
              <PhoneIcon className="h-4 w-4 text-slate-50" />
              <Link
                href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_TEL}`}
                className="text-sm"
              >
                {process.env.NEXT_PUBLIC_SUPPORT_TEL}
              </Link>
            </FlexBox>
            <FlexBox className="items-center gap-x-1">
              <EnvelopeIcon className="h-4 w-4 text-slate-50" />
              <Link
                href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
                className="text-sm"
              >
                {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
              </Link>
            </FlexBox>
          </FlexBox>

          <FlexBox className="w-1/3 justify-end">
            <FlexBox className="mr-4 mt-0.5 items-center space-x-5">
              <div className="relative cursor-pointer">
                <BookmarkIcon
                  className={cn(
                    'h-5 w-5',
                    themeConfig.primaryTextHover,
                    themeConfig.infoTextActive,
                    themeConfig.animationTransition,
                    themeConfig.animationDuration,
                    themeConfig.animationEaseIn
                  )}
                />
                <Badge className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 pr-0.5 pt-0.5">
                  9
                </Badge>
              </div>
              <div className="relative cursor-pointer">
                <ShoppingCartIcon
                  className={cn(
                    'h-5 w-5',
                    themeConfig.primaryTextHover,
                    themeConfig.infoTextActive,
                    themeConfig.animationTransition,
                    themeConfig.animationDuration,
                    themeConfig.animationEaseIn
                  )}
                />
                <Badge className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 pt-0.5">
                  2
                </Badge>
              </div>
            </FlexBox>
            <LanguageChanger className="ml-2 mt-3 md:mt-0" />
            <div className="flex md:hidden">
              <Hamburger
                toggled={menuOpen}
                toggle={toggleMenu}
                direction="right"
                duration={0.5}
                size={18}
              />
            </div>
          </FlexBox>
        </FlexBox>
        <AnimateIn direction="to-bottom" show={menuOpen}>
          <MobileNavigation menuOpen={menuOpen} setMenu={setMenu} />
        </AnimateIn>
      </Container>
    </div>
  )
}
