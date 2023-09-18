import { PropsWithChildren } from 'react'
import { H2, FlexBox } from '@shared/component'
import { FormattedMessage } from 'react-intl'
import Image from 'next/image'

interface PageHeadingProps {
  image?: string
  labelLocale?: string
  labelValues?: Record<string | number, string | number>
  subLabelLocale?: string
  subLabelValues?: Record<string | number, string | number>
}

export const PageHeading = ({
  children,
  image,
  labelValues,
  labelLocale,
  subLabelLocale,
  subLabelValues,
}: PropsWithChildren<PageHeadingProps>) => {
  return (
    <FlexBox direction="col" className="mb-32 w-full">
      <H2 className="mb-4 font-bold">
        <FormattedMessage
          id={labelLocale}
          values={labelValues && labelValues}
        />
      </H2>
      {image && (
        <Image
          className="mb-6 h-80 w-full object-cover"
          src={image}
          alt="smartphone cover"
          width="1200"
          height="675"
          loading={'lazy'}
        />
      )}
      {subLabelLocale && (
        <H2 className="font-medium">
          <FormattedMessage
            id={subLabelLocale}
            values={subLabelValues && subLabelValues}
          />
        </H2>
      )}
      {children}
    </FlexBox>
  )
}
