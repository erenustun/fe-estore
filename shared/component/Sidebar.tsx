import { FeaturedBrand } from '@feature/product'
import React from 'react'
import { AnimateIn } from '@component'
import { CartModal } from '@feature/cart'
import useCartStore from '@feature/cart/state/cart.store'
import { shallow } from 'zustand/shallow'
import cn from 'classnames'
import { themeConfig } from '@shared/config'

interface SidebarProps {
  className?: string
  withBrands?: boolean
  withCart?: boolean
}

export const Sidebar = ({
  className,
  withBrands = false,
  withCart = false,
}: SidebarProps) => {
  const { showCart } = useCartStore(state => state, shallow)

  return (
    <div
      className={cn(
        'hidden px-2 xl:block',
        className,
        themeConfig.sidebarWidth
      )}
    >
      {withCart && (
        <AnimateIn direction="to-bottom" show={showCart}>
          <CartModal />
        </AnimateIn>
      )}
      {withBrands && <FeaturedBrand className={showCart ? 'mt-5' : ''} />}
    </div>
  )
}
