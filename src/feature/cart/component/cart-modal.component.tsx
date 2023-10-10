import useCartStore, {
  useCartItems,
  useCartTotal,
} from '@feature/cart/state/cart.store'
import { shallow } from 'zustand/shallow'
import { Button, Currency, Divider, H2, H3, H4 } from '@component'
import { FormattedMessage } from 'react-intl'
import { EmptyCart } from '@feature/cart'
import Image from 'next/image'
import { pushUri } from '@shared/util'
import { routeConfig, themeConfig } from '@shared/config'
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import cn from 'classnames'
import { FREE_SHIPPING_AFTER, SHIPPING_COST } from '@shared/constant'
import React from 'react'

export const CartModal = () => {
  const { cart, removeFromCart, increase, decrease, toggleCart } = useCartStore(
    state => state,
    shallow
  )

  const cartTotal = useCartTotal()
  const cartItems = useCartItems()

  return (
    <>
      {cart && (
        <div className="mb-2 max-h-[48rem] w-full space-y-2 overflow-y-auto">
          <div className="flex items-center justify-between">
            <H2>
              <FormattedMessage id="cart_index" values={{ items: cartItems }} />
            </H2>
            <XMarkIcon
              className={cn(
                'mr-1 h-5 w-5 cursor-pointer',
                themeConfig.dangerTextHover,
                themeConfig.dangerTextActive,
                themeConfig.animationTransition,
                themeConfig.animationDuration,
                themeConfig.animationEaseIn
              )}
              onClick={toggleCart}
            />
          </div>

          {cart.length === 0 && (
            <div className="text-left font-medium text-blue-700 dark:text-blue-50">
              <EmptyCart
                onExit={toggleCart}
                message={<FormattedMessage id="cart_view_empty" />}
              />
            </div>
          )}
          <div className="space-y-1">
            {cart.map((cartItem, i) => (
              <div
                key={i}
                className={`flex justify-between py-4 text-gray-100 dark:hover:bg-slate-900 ${
                  cart.length >= 6 ? 'px-3' : 'px-1'
                }`}
              >
                <div className="flex gap-x-2">
                  <div className="h-16 w-16">
                    <Image
                      alt="product image in cart"
                      src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}${cartItem.product?.thumbnail}`}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="h-16 w-16 bg-center bg-no-repeat object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <H4 className="flex cursor-default select-text flex-col gap-y-0.5">
                      <b>{cartItem.product.brand.name}</b>{' '}
                      {cartItem.product.name}
                    </H4>
                    <div className="mt-1.5 flex items-center space-x-2">
                      <MinusIcon
                        className={cn(
                          'h-5 w-5 cursor-pointer',
                          themeConfig.dangerTextHover,
                          themeConfig.dangerTextActive,
                          themeConfig.animationTransition,
                          themeConfig.animationDuration,
                          themeConfig.animationEaseIn
                        )}
                        onClick={() => {
                          if (cartItem.quantity === 1)
                            removeFromCart(cartItem.product.id as string)
                          decrease(cartItem.product.id as string)
                        }}
                      />
                      <H4 className="mt-1">{cartItem.quantity}</H4>
                      <PlusIcon
                        className={cn(
                          'h-5 w-5 cursor-pointer',
                          themeConfig.primaryTextHover,
                          themeConfig.infoTextActive,
                          themeConfig.animationTransition,
                          themeConfig.animationDuration,
                          themeConfig.animationEaseIn
                        )}
                        onClick={() => {
                          increase(cartItem.product.id as string)
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-y-3">
                  <Currency
                    amount={Math.round(
                      cartItem.product?.price * cartItem.quantity
                    )}
                    cart
                  />
                  <TrashIcon
                    className={cn(
                      'mb-2 mt-auto h-5 w-5 cursor-pointer',
                      themeConfig.dangerTextHover,
                      themeConfig.dangerTextActive,
                      themeConfig.animationTransition,
                      themeConfig.animationDuration,
                      themeConfig.animationEaseIn
                    )}
                    onClick={() => {
                      removeFromCart(cartItem.product.id as string)
                    }}
                  />
                </div>
              </div>
            ))}
            {cart.length > 0 && (
              <div className={'flex flex-col'}>
                <Divider />
                <div
                  className={
                    'dark:text-cool-gray-100 flex items-center justify-between py-1 font-light'
                  }
                >
                  <H4>
                    <FormattedMessage id="cart_view_price_shipping_estimate" />
                  </H4>
                  <H4>
                    {cartTotal < FREE_SHIPPING_AFTER ? (
                      <Currency amount={SHIPPING_COST} cart />
                    ) : (
                      <FormattedMessage id={'cart_view_free_of_charge'} />
                    )}
                  </H4>
                </div>
                <Divider />
                <div
                  className={
                    'dark:text-cool-gray-100 flex items-center justify-between py-1 font-light'
                  }
                >
                  <H4>
                    <FormattedMessage id="cart_view_price_total" />
                  </H4>
                  <Currency
                    amount={Math.round(
                      cartTotal +
                        (cartTotal < FREE_SHIPPING_AFTER ? SHIPPING_COST : 0)
                    )}
                    cart
                  />
                </div>
                <Button
                  onClick={() => pushUri(routeConfig.ACCOUNT.CART.INDEX)}
                  className={'m-2 self-end'}
                >
                  <FormattedMessage id="cart_view_to_cart" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
