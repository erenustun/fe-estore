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
import { useState } from 'react'
import { DEFAULT_PAGE, DEFAULT_PAGE_LIMIT } from '@shared/constant'
import { NumberParam, useQueryParam, withDefault } from 'use-query-params'
import { FormattedMessage } from 'react-intl'

export const ViewProducts = () => {
  const [page] = useQueryParam('page', withDefault(NumberParam, DEFAULT_PAGE), {
    updateType: 'pushIn',
  })
  const [offset] = useQueryParam(
    'limit',
    withDefault(NumberParam, DEFAULT_PAGE_LIMIT)
  )
  const { query, pathname, replace } = useRouter()
  const filterArgs = useFilterPrams(query)
  const [products, setProducts] = useState<[]>([])
  const paginationArgs = usePaginationParams(query)

  const { data, loading, error } = useQuery(FetchProducts, {
    variables: {
      paginationArgs,
      filterArgs,
    },
    fetchPolicy: 'cache-and-network',
    // @ts-ignore
    onCompleted: data => {
      if (page > 1 && products.length < 6)
        replace({ pathname, query: { ...query, page: 1 } })
      if (products.length > data.products.count)
        setProducts(data.products.data as [])
      if (products.length < data.products.count)
        setProducts([...products, ...(data.products.data as [])])
      return data
    },
  })
  let pageCount = 0
  if (data) pageCount = Math.ceil(data.products?.count / offset)

  const showMoreItems = (page: number) => {
    query.page = (page + 1).toString()

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
        products && page !== 1
          ? 'product_index_count_of'
          : 'product_index_count'
      }
      subLabelValues={
        products && page !== 1
          ? { currentCount: products?.length, total: data?.products?.count }
          : { count: data?.products?.count }
      }
    >
      <ProductFilter />
      <ProductGrid
        error={error}
        loading={loading}
        productData={products ? products : data.products?.data}
      />
      {pageCount > page && (
        <FlexBox className="mt-10 w-full items-center justify-center">
          <Button onClick={() => showMoreItems(page)} style="primary-dark">
            <FormattedMessage id="product_view_load_more" />
          </Button>
        </FlexBox>
      )}
    </PageHeading>
  )
}
