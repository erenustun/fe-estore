import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Button, Currency, Rating } from '@shared/component'
import { FormattedMessage } from 'react-intl'
import { ProductName, Product, ProductStock } from '@feature/product'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

export const Card = (product: Product) => (
  <Link
    key={product.id}
    className="mx-auto cursor-pointer transition duration-200 ease-in dark:bg-transparent dark:hover:bg-[#1f2238] dark:active:bg-[#0e0f1a]"
    href={`/products/${product.id}`}
  >
    <div className="relative overflow-hidden px-2 py-2 transition duration-200 ease-in hover:opacity-75">
      <Image
        alt="product image"
        src={`http://localhost:3000${product.thumbnail as string}`}
        className="fit h-80 w-full rounded-sm object-scale-down focus:outline-none"
        loading="lazy"
        width="512"
        height="512"
      />
    </div>
    <div
      className={`flex flex-row px-1.5 py-2 ${
        product.stock >= 0 && 'relative'
      }`}
    >
      <div className="relative min-h-[9rem] flex-1">
        <div className="my-1">
          {product.ratingAverage && <Rating rating={product.ratingAverage} />}
          {!product.ratingAverage && <Rating rating={0} />}
        </div>
        <div className={'flex items-center justify-between'}>
          <Currency
            className={'text-danger-default text-lg font-bold'}
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
            <div className="mt-2">
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
)
