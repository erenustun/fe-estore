import { Button, FlexBox, Loader } from '@component'
import { useMutation, useQuery } from '@apollo/client'
import FetchAddresses from '@src/features/address/graphql/fetch-addresses.graphql'
import { CheckIcon as CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { routeConfig } from '@shared/config'
import { FormattedMessage } from 'react-intl'
import DeleteAddressMutation from '@feature/address/graphql/remove-address.graphql'
import { Address, AddressType } from '@feature/address'
import { TableOptions } from '@feature/address/components/table-options.component'

export const ViewAddress = () => {
  const { data, loading, error } = useQuery(FetchAddresses, {
    variables: {
      filterArgs: {
        type: AddressType.SHIPPING,
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  const [deleteAddress] = useMutation(DeleteAddressMutation, {
    refetchQueries: [FetchAddresses],
  })

  if (loading)
    return (
      <Loader
        loading={loading}
        message={<FormattedMessage id="address_view_fetching" />}
      />
    )

  if (error) return <h1>Error: {error.message}</h1>

  return (
    <FlexBox direction="col">
      <div className="flex px-1 font-medium">
        <div className="w-52">
          <FormattedMessage id="address_view_name" />
        </div>
        <div className="w-80">
          <FormattedMessage id="address_view_address" />
        </div>
        <div className="w-96">
          <FormattedMessage id="address_view_main_address" />
        </div>
        <div className="w-28">
          <FormattedMessage id="address_view_options" />
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
                <FormattedMessage id={`address_form_title_${address?.title}`} />{' '}
                {address.firstName} {address.lastName}
              </div>
              <div className="w-80">{`${address.line1}, ${address.zipCode}, ${address.countryCode}`}</div>
              <div className="w-96">
                {address.primary && <CheckIcon className="h-5 w-5" />}
              </div>{' '}
              <div className="flex w-28 items-center space-x-2">
                <TableOptions />
                {/*<Link
                  href={`${routeConfig.ACCOUNT.ADDRESS.EDIT}/${address.id}`}
                >
                  <EditIcon
                    className={`h-5 w-5 cursor-pointer ${themeConfig.primaryIconColor} ${themeConfig.animationTransition} ${themeConfig.animationDuration} ${themeConfig.animationEaseIn}`}
                  />
                </Link>
                <DeleteIcon
                  onClick={() =>
                    deleteAddress({ variables: { id: address?.id } })
                  }
                  className={`h-5 w-5 cursor-pointer ${themeConfig.dangerIconColor} ${themeConfig.animationTransition} ${themeConfig.animationDuration} ${themeConfig.animationEaseIn}`}
                />*/}
              </div>
            </div>
          )
        })}
      </div>
      <Link href={routeConfig.ACCOUNT.ADDRESS.NEW} className="self-end">
        <Button>
          <FormattedMessage id="address_view_create_address" />
        </Button>
      </Link>
    </FlexBox>
  )
}
