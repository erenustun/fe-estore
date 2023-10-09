import { Button, FlexBox, Loader, PageHeading } from '@component'
import { useQuery } from '@apollo/client'
import FetchProducts from '@feature/product/graphql/fetch-products.graphql'
import {
  ProductFilter,
  useFilterPrams,
  usePaginationParams,
  ProductGrid,
} from '@feature/product'
import { useRouter } from 'next/router'
import { PAGINATION_TAKE } from '@shared/constant'
import { NumberParam, useQueryParam, withDefault } from 'use-query-params'
import { FormattedMessage } from 'react-intl'

export const ViewProducts = () => {
  const [take] = useQueryParam(
    'take',
    withDefault(NumberParam, PAGINATION_TAKE)
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
    query.take = (take + 12).toString()

    replace(
      {
        pathname,
        query,
      },
      undefined,
      { scroll: false }
    )
  }

  if (loading) return <Loader loading={loading} />

  //const image = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/images/category/smartphone.jpg`
  const image = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/images/category/mobile.jpg`
  return (
    <PageHeading
      labelLocale="product_smartphone_view_index"
      image={image}
      subLabelLocale={
        data.products?.data && take !== PAGINATION_TAKE
          ? 'product_index_count_of'
          : data?.products?.count > 1
          ? 'product_index_count'
          : 'product_index_single_count'
      }
      subLabelValues={
        data.products?.data && take !== PAGINATION_TAKE
          ? {
              currentCount: data.products?.data?.length,
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
      {data?.products?.count > data.products?.data?.length && (
        <FlexBox
          className="mt-10 w-full items-center justify-center gap-y-2"
          direction="col"
        >
          <FormattedMessage
            id="product_index_count_of"
            values={{
              currentCount: data.products?.data?.length,
              total: data?.products?.count,
            }}
          />
          <Button onClick={() => showMoreItems(take)} style="primary">
            <FormattedMessage id="product_view_load_more" />
          </Button>
        </FlexBox>
      )}
    </PageHeading>
  )
}
