import {
  Badge,
  Container,
  FlexBox,
  InstagramIcon,
  LanguageChanger,
  MetaIcon,
  WhatsappIcon,
} from '@component'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { pushUri } from '@shared/util'
import { BookmarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import cn from 'classnames'
import { themeConfig } from '@shared/config'

export const GlobalTopBar = () => {
  return (
    <div className="select-none bg-[#0A52C7] py-1.5">
      <Container>
        <FlexBox className="mt-1 justify-between">
          <div className="ml-0 flex w-1/3 flex-wrap items-center justify-start space-x-2 sm:mt-0 sm:gap-x-3">
            <MetaIcon alternativeIcon={true} className="h-4 w-4" />
            <InstagramIcon className="h-5 w-5" />
            <WhatsappIcon className="h-5 w-5" />
          </div>

          <FlexBox className="hidden w-1/3 flex-col items-center gap-y-1 sm:flex sm:flex-row sm:justify-evenly">
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

          <LanguageChanger className="mt-2 sm:mt-0" />
          <FlexBox className="w-1/3 justify-end">
            <FlexBox className="mr-4 mt-0.5 items-center space-x-5">
              <div className="relative cursor-pointer">
                <BookmarkIcon
                  className={cn(
                    'h-5 w-5',
                    themeConfig.navLinkTextHover,
                    themeConfig.navLinkTextActive,
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
                    themeConfig.navLinkTextHover,
                    themeConfig.navLinkTextActive,
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
          </FlexBox>
        </FlexBox>
      </Container>
    </div>
  )
}
