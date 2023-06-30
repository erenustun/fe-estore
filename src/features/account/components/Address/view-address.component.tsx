import { Button, H1, H2 } from '@component'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import FetchCustomerAddresses from '@src/features/account/graphql/address/fetch-customer-addresses.graphql'
import {
  PencilSquareIcon as EditIcon,
  TrashIcon as DeleteIcon,
  CheckIcon as CheckIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Address, AddressType } from '@shared/model'
import { routeConfig, themeConfig } from '@shared/config'

export const AccountAddress = () => {
  const [addresses, setAddressData] = useState<Address[]>([])
  const [count, setCount] = useState<number>()

  const { data, loading, error } = useQuery(FetchCustomerAddresses, {
    variables: {
      filterArgs: {
        type: AddressType.SHIPPING,
      },
    },
    onCompleted: response => {
      setAddressData(response.addresses as Address[])
      setCount(response.addresses?.length)
    },
  })

  if (loading) return <H1>Loading</H1>

  if (error) return <h1>Error: {error.message}</h1>

  return (
    <div className="flex flex-col">
      <H2>Manage addresses</H2>

      <div className="flex px-1 font-medium">
        <div className="w-52">Name</div>
        <div className="w-80">Address</div>
        <div className="w-28">Options</div>
        <div>Main address</div>
      </div>
      <div className="px-1">
        {addresses?.map((address, index) => {
          return (
            <div
              key={index}
              className={`flex items-center py-4 ${
                index + 1 !== addresses.length && 'border-b border-b-gray-500'
              }`}
            >
              <div className="w-52">
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
