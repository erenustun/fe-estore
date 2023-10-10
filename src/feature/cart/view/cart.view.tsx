import React from 'react'

import { Container, H2 } from '@shared/component'
import { FormattedMessage } from 'react-intl'
import { useCartItems } from '@feature/cart/state/cart.store'
import { ViewCart } from '@feature/cart'

export const CartView = () => {
  const cartItems = useCartItems()

  return (
    <Container className="w-full space-y-5 py-8 md:w-7/12">
      <H2>
        <FormattedMessage id={'cart_index'} values={{ items: cartItems }} />
      </H2>
      <ViewCart />
    </Container>
  )
}
