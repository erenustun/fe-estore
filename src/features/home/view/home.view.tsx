import Link from 'next/link'
import { routeConfig } from '@shared/config'
import Image from 'next/image'
import { Container, FlexBox, H1, H2 } from '@component'
import { FormattedMessage } from 'react-intl'

export const HomeView = () => {
  return (
    <Container className="md:py-14 lg:py-20">
      <Link href={`${routeConfig.PRODUCT.INDEX}?brand=Apple`}>
        <Image
          className="rounded-lg"
          src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/images/home/hero-3.jpg`}
          alt="hero image"
          width="1920"
          height="1080"
        />
        <FlexBox
          direction="col"
          className="absolute left-1/2 top-1/2 -mt-20 hidden w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-y-4 rounded-lg bg-slate-950 px-1 py-10 text-center opacity-80 lg:flex lg:w-auto"
        >
          <H1>
            <FormattedMessage id="app_home_hero_heading" />
          </H1>
          <H2>
            <FormattedMessage id="app_home_hero_subheading" />
          </H2>
        </FlexBox>
        <FlexBox direction="col" className="mt-4 flex text-center lg:hidden">
          <H1>
            <FormattedMessage id="app_home_hero_heading" />
          </H1>
          <H2>
            <FormattedMessage id="app_home_hero_subheading" />
          </H2>
        </FlexBox>
      </Link>
    </Container>
  )
}
