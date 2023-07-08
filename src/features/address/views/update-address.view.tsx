import { Container } from '@component'
import { themeConfig } from '@shared/config'
import cn from 'classnames'
import { UpdateAddress } from '@feature/address/components/update-address.component'

export const UpdateAddressView = () => (
  <Container className="flex-row min-h-[62rem]">
    <div className="flex w-64 self-start"></div>
    <section className={cn('w-4/5 pl-5', themeConfig.boxMargin)}>
      <UpdateAddress />
    </section>
  </Container>
)
