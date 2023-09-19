import { Button, FlexBox, PageHeading } from '@component'
import { useQuery } from '@apollo/client'
import FetchProducts from '@feature/product/graphql/fetch-products.graphql'
import {
  ProductFilter,
  useFilterPrams,
  usePaginationParams,
  ProductGrid,
  DEFAULT_PAGE_LIMIT,
} from '@feature/product'
import { useRouter } from 'next/router'
import { NumberParam, useQueryParam, withDefault } from 'use-query-params'
import { FormattedMessage } from 'react-intl'
import { isWithinSixDigits } from '@shared/util'

export const ViewProducts = () => {
  const [take] = useQueryParam(
    'take',
    withDefault(NumberParam, DEFAULT_PAGE_LIMIT),
    {
      updateType: 'pushIn',
    }
  )

  const { query, pathname, replace } = useRouter()
  const filterArgs = useFilterPrams(query)
  const paginationArgs = usePaginationParams(query)

  const { data, loading, error } = useQuery(FetchProducts, {
    variables: {
      paginationArgs,
      filterArgs,
    },
    fetchPolicy: 'cache-and-network',
  })

  const showMoreItems = (take: number) => {
    query.take = !isWithinSixDigits(take, parseInt(data.products?.count))
      ? (take + 6).toString()
      : data.products?.count?.toString()

    replace(
      {
        pathname,
        query,
      },
      undefined,
      { scroll: false }
    )
  }

  if (loading) return null

  return (
    <PageHeading
      labelLocale="product_smartphone_view_index"
      image={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/images/category/smartphone.jpg`}
      subLabelLocale={
        data.products?.data && take > DEFAULT_PAGE_LIMIT
          ? 'product_index_count_of'
          : 'product_index_count'
      }
      subLabelValues={
        data.products?.data && take > DEFAULT_PAGE_LIMIT
          ? {
              currentCount: data.products?.data.length,
              total: data?.products?.count,
            }
          : { count: data?.products?.count }
      }
    >
      <ProductFilter />
      <ProductGrid
        error={error}
        loading={loading}
        productData={data.products?.data}
      />
      {data.products?.data.length < data?.products?.count && (
        <FlexBox className="mt-10 w-full items-center justify-center">
          <Button onClick={() => showMoreItems(take)} style="primary-dark">
            <FormattedMessage id="product_view_load_more" />
          </Button>
        </FlexBox>
      )}
    </PageHeading>
  )
}
