import { Container } from '@component'
import { themeConfig } from '@shared/config'
import cn from 'classnames'
import { CreateAddress } from '@feature/address/components/create-address.component'

export const CreateAddressView = () => (
  <Container className="min-h-[62rem] flex-row">
    <div className="flex w-64 self-start"></div>
    <section className={cn('w-4/5 pl-5', themeConfig.boxMargin)}>
      <CreateAddress />
    </section>
  </Container>
)
