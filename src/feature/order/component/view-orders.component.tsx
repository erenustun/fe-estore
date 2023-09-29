import { Box, FlexBox, H2, Loader } from '@component'
import { useQuery } from '@apollo/client'
import FetchOrders from '@feature/order/graphql/fetch-orders.graphql'
import { FormattedDate, FormattedMessage } from 'react-intl'
import { AddressType } from '@feature/address'
import { Order } from '@feature/order'
import Image from 'next/image'
import cn from 'classnames'
import { themeConfig } from '@shared/config'

export const ViewOrders = () => {
  const { data, loading, error } = useQuery(FetchOrders, {
    variables: {
      filterArgs: {
        type: AddressType.SHIPPING,
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  if (loading)
    return (
      <Loader
        loading={loading}
        message={<FormattedMessage id="order_view_fetching" />}
      />
    )

  if (error) return <h1>Error: {error.message}</h1>

  return (
    <FlexBox direction="col" className="space-y-4">
      {data.currentOrders.map((order: Order, index: number) => {
        const twoDaysAgo = new Date()
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)
        const created = new Date(order.created as unknown as string)
        return (
          <Box
            className="flex flex-col space-y-4 bg-opacity-5 px-0 py-3"
            darkborder
            notopmargin
            key={index}
          >
            <div className="mx-4 inline rounded bg-slate-700 px-3 py-1 text-sm">
              <FormattedMessage
                id="order_view_id"
                values={{
                  id: <b>{order.id}</b>,
                  created: (
                    <b>
                      <FormattedDate value={order.created} />
                    </b>
                  ),
                }}
              />
            </div>
            <div className="space-y-10">
              {order.products.map((orderHasProduct, i) => {
                console.log(orderHasProduct.product.thumbnail)
                return (
                  <>
                    <FlexBox key={i}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}${orderHasProduct.product.thumbnail}`}
                        height="158"
                        width="158"
                        alt=""
                      />
                      <FlexBox direction="col">
                        <FlexBox className="space-x-1">
                          <H2 className="font-bold">
                            {orderHasProduct.product.brand.name}
                          </H2>
                          <H2>{orderHasProduct.product.name}</H2>
                        </FlexBox>
                        <H2>
                          <FormattedMessage
                            id="order_view_quantity"
                            values={{ amount: orderHasProduct.quantity }}
                          />
                        </H2>
                        <H2
                          className={cn(
                            themeConfig.dangerTextColor,
                            'font-semibold'
                          )}
                        >
                          {orderHasProduct.product.price}.-
                        </H2>
                      </FlexBox>
                      <FlexBox direction="col" className="ml-20">
                        <H2>
                          <FormattedMessage id="order_view_status" />
                        </H2>
                        <H2 className={cn(themeConfig.warningTextColor)}>
                          In - Transit
                        </H2>
                      </FlexBox>
                      <FlexBox direction="col" className="ml-20">
                        <H2>
                          <FormattedMessage id="order_view_expected" />
                        </H2>
                        <H2 className="font-medium text-slate-300">
                          24. - 27. December
                        </H2>
                      </FlexBox>
                    </FlexBox>
                    {i + 1 < order.products.length && (
                      <div
                        className={cn(
                          'h-[2px] w-full',
                          themeConfig.footerDivider
                        )}
                      ></div>
                    )}
                  </>
                )
              })}
            </div>
            <div className="mr-4 flex justify-between px-4">
              {created > twoDaysAgo ? (
                <div className={themeConfig.dangerTextColor}>Cancel</div>
              ) : (
                <div></div>
              )}
              <H2 className={cn(themeConfig.dangerTextColor, 'font-semibold')}>
                {order.total}.-
              </H2>
            </div>
          </Box>
        )
      })}
    </FlexBox>
  )
}
