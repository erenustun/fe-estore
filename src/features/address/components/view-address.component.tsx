import { H1, H2 } from '@component'
import { useQuery } from '@apollo/client'
import FetchAddresses from '@src/features/address/graphql/fetch-addresses.graphql'
import {
  PencilSquareIcon as EditIcon,
  TrashIcon as DeleteIcon,
  CheckIcon as CheckIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Address, AddressType } from '@shared/model'
import { routeConfig, themeConfig } from '@shared/config'
import { FormattedMessage } from 'react-intl'

export const AccountAddress = () => {
  const { data, loading, error } = useQuery(FetchAddresses, {
    variables: {
      filterArgs: {
        type: AddressType.SHIPPING,
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  if (loading) return <H1>Loading</H1>

  if (error) return <h1>Error: {error.message}</h1>

  return (
    <div className="flex flex-col">
      <H2>
        <FormattedMessage
          id="address_index"
          values={{ count: data?.addresses?.length }}
        />
      </H2>

      <div className="flex px-1 font-medium">
        <div className="w-52">
          <FormattedMessage id="address_view_name" />
        </div>
        <div className="w-80">
          <FormattedMessage id="address_view_address" />
        </div>
        <div className="w-28">
          <FormattedMessage id="address_view_options" />
        </div>
        <div>
          <FormattedMessage id="address_view_main_address" />
        </div>
      </div>
      <div className="px-1">
        {data?.addresses?.map((address: Address, index: number) => {
          return (
            <div
              key={index}
              className={`flex items-center py-4 ${
                index + 1 !== data?.addresses?.length &&
                'border-b border-b-gray-500'
              }`}
            >
              <div className="w-52">
                <FormattedMessage
                  id={`address_form_update_title_${address?.title}`}
                />{' '}
                {address.firstName} {address.lastName}
              </div>
              <div className="w-80">{`${address.line1}, ${address.zipCode}, ${address.countryCode}`}</div>
              <div className="w-28 flex items-center space-x-2">
                <Link
                  href={`${routeConfig.ACCOUNT.ADDRESS.ADDRESS_EDIT}/${address.id}`}
                >
                  <EditIcon
                    className={`w-5 h-5 cursor-pointer ${themeConfig.primaryIconColor} ${themeConfig.animationTransition} ${themeConfig.animationDuration} ${themeConfig.animationEaseIn}`}
                  />
                </Link>
                <DeleteIcon
                  className={`w-5 h-5 cursor-pointer ${themeConfig.dangerIconColor} ${themeConfig.animationTransition} ${themeConfig.animationDuration} ${themeConfig.animationEaseIn}`}
                />
              </div>
              <div className="w-80">
                {address.primary && <CheckIcon className="w-5 h-5" />}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
