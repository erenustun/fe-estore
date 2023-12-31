import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Button, Currency, Rating } from '@component'
import { FormattedMessage } from 'react-intl'
import { ProductName, Product, ProductStock } from '@feature/product'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import useCartStore from '@feature/cart/state/cart.store'
import { shallow } from 'zustand/shallow'

export const Card = (product: Product) => {
  const { addToCart, toggleCart } = useCartStore(store => store, shallow)

  return (
    <div className="w-full cursor-pointer transition duration-200 ease-in dark:bg-transparent dark:hover:bg-[#1f2238] dark:active:bg-[#0e0f1a]">
      <Link key={product.id} href={`/products/${product.id}`}>
        <div className="relative overflow-hidden py-2 transition duration-200 ease-in hover:opacity-75">
          <Image
            alt="product image"
            src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}${
              product.thumbnail as string
            }`}
            className="fit 8xl:h-80 h-60 w-full rounded-sm object-scale-down focus:outline-none md:h-64"
            loading="lazy"
            width="512"
            height="512"
          />
        </div>
        <div
          className={`flex flex-row p-2 ${product.stock >= 0 && 'relative'}`}
        >
          <div className="relative min-h-[9rem] flex-1">
            <div className="my-1">
              {product.ratingAverage && (
                <Rating rating={product.ratingAverage} />
              )}
              {!product.ratingAverage && <Rating rating={0} />}
            </div>
            <div className={'flex items-center justify-between'}>
              <Currency
                className={'text-lg font-bold text-red-600'}
                amount={product.price}
              />
              <ProductStock stock={product?.stock} />
            </div>
            <ProductName
              brand={product.brand}
              name={product.name}
              stock={product.stock}
              price={product.price}
              category={product.category}
              specification={product.specification}
              sku={product.sku}
            />
            <div className="mr-2 mt-2 flex items-center justify-end space-x-4">
              <i className="bx bx-sm dark:hover:text-blue-gray-500 dark:active:text-blue-gray-500 ml-2 cursor-pointer transition duration-200 ease-in"></i>
              {product.stock > 0 && (
                <div
                  className="mt-2"
                  onClick={(e: { preventDefault: () => void }) => {
                    if (product.stock > 0) {
                      e.preventDefault()
                      addToCart(product)
                      toggleCart()
                    }
                  }}
                >
                  <Button>
                    <ShoppingBagIcon className="mr-1 h-5" />
                    <FormattedMessage id="product_view_add_to_cart" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
