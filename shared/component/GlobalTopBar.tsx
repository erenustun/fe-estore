import {
  Container,
  FlexBox,
  InstagramIcon,
  LanguageChanger,
  MetaIcon,
  WhatsappIcon,
} from '@component'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export const GlobalTopBar = () => {
  return (
    <div className="select-none bg-[#0A52C7] py-1.5">
      <Container>
        <FlexBox className="flex-col border border-b border-blue-600 pb-1.5 sm:hidden sm:flex-row">
          <FlexBox className="items-center justify-center gap-x-1 border">
            <PhoneIcon className="h-4 w-4 text-slate-50" />
            <Link
              href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_TEL}`}
              className="text-sm"
            >
              {process.env.NEXT_PUBLIC_SUPPORT_TEL}
            </Link>
          </FlexBox>
          <FlexBox className="items-center justify-center gap-x-1 border">
            <EnvelopeIcon className="h-4 w-4 text-slate-50" />
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
              className="text-sm"
            >
              {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
            </Link>
          </FlexBox>
        </FlexBox>
        <FlexBox className="justify-between">
          <div className="ml-0 mt-1 flex w-32 flex-wrap items-center justify-center gap-x-5 sm:mt-0 sm:gap-x-3">
            <MetaIcon alternativeIcon={true} className="h-4 w-4" />
            <InstagramIcon className="h-5 w-5" />
            <WhatsappIcon className="h-5 w-5" />
          </div>

          <FlexBox className="hidden w-4/6 flex-col items-center gap-x-5 gap-y-1 sm:flex sm:flex-row sm:justify-center">
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
        </FlexBox>
      </Container>
    </div>
  )
}
