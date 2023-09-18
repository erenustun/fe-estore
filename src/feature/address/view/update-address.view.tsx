import { Container } from '@component'
import { themeConfig } from '@shared/config'
import cn from 'classnames'
import { UpdateAddress } from '@feature/address/component/update-address.component'

export const UpdateAddressView = () => (
  <Container className="min-h-[62rem] flex-row">
    <div className="flex w-64 self-start"></div>
    <section className={cn('w-4/5 pl-5', themeConfig.boxMargin)}>
      <UpdateAddress />
    </section>
  </Container>
)
