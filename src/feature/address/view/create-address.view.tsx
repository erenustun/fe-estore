import { Container, Divider, FlexBox, H2 } from '@component'
import { themeConfig } from '@shared/config'
import cn from 'classnames'
import { CreateAddress } from '@feature/address/component/create-address.component'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router'

export const CreateAddressView = () => {
  const router = useRouter()

  return (
    <Container className="min-h-[62rem] flex-row pt-8">
      <FlexBox direction="col" className={themeConfig.sidebarWidth}>
        <section className="flex w-11/12 flex-col space-y-3">
          <H2
            className={cn(
              'flex cursor-pointer items-center',
              themeConfig.bodyTextColor,
              themeConfig.infoTextActive,
              themeConfig.animationTransition,
              themeConfig.animationDuration,
              themeConfig.animationEaseIn
            )}
            onClick={() => router.back()}
          >
            <ArrowLeftCircleIcon className="mr-2 h-5 w-5" />
            <FormattedMessage id="address_form_create_index" />
          </H2>
          <Divider />
        </section>
      </FlexBox>
      <section className="w-4/5">
        <CreateAddress />
      </section>
    </Container>
  )
}
