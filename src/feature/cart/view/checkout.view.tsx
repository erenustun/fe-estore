import React from 'react'
import { Button, Container, FlexBox, H2 } from '@shared/component'
import { FormattedMessage } from 'react-intl'
import { useCartItems } from '@feature/cart/state/cart.store'
import { OrderOverview, PaymentMethod, Shipping } from '@feature/cart'

export const CheckoutView = () => {
  const cartItems = useCartItems()

  return (
    <Container className="w-full space-y-5 py-8 md:w-7/12">
      <H2>
        <FormattedMessage id="checkout_index" /> {cartItems}{' '}
        <FormattedMessage id="cart_view_products" />
      </H2>
      <FlexBox direction="col" className="gap-y-14">
        <Shipping />
        <PaymentMethod />
        <OrderOverview />
        <Button className="-mt-5 ml-auto">
          <FormattedMessage id="checkout_view_cta" />
        </Button>
      </FlexBox>
    </Container>
  )
}
