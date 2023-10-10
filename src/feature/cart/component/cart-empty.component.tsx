import { ReactNode } from 'react'

import Link from 'next/link'

import { FormattedMessage } from 'react-intl'
import { routeConfig } from '@shared/config'

interface CartEmptyProps {
  onExit?: any
  message: string | ReactNode
  mode?: 'cart' | 'wishlist'
}

export const EmptyCart = ({
  onExit,
  message,
  mode = 'cart',
}: CartEmptyProps) => (
  <p className={'flex flex-col space-y-1'}>
    <span>{message}</span>
    <Link
      href={`${routeConfig.PRODUCT.INDEX}${routeConfig.PRODUCT.INDEX_DEFAULT_PARAMS}`}
      onClick={onExit}
    >
      <FormattedMessage
        id={
          mode === 'cart'
            ? 'cart_view_empty_continue_browsing'
            : 'wishlist_empty_continueBrowsing'
        }
        values={{
          b: chunks => (
            <p
              className={
                'dark:text-blue-gray-300 dark:hover:text-blue-gray-400 dark:active:text-blue-gray-500 inline font-bold underline transition duration-150 ease-in'
              }
            >
              {chunks}
            </p>
          ),
        }}
      />
      .
    </Link>
  </p>
)
