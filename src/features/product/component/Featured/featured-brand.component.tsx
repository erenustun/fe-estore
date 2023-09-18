import { List } from '@component'
import { useQuery } from '@apollo/client'
import FetchBrands from '@feature/product/graphql/fetch-grouped-brand.graphql'
import { useRouterParams } from '@shared/util'
import { FILTER_OPTIONS } from '@feature/product'

export const FeaturedBrand = () => {
  const { setParam } = useRouterParams()

  const { data, loading, error } = useQuery(FetchBrands, {
    fetchPolicy: 'cache-and-network',
  })

  const onClick = (param: string | number) =>
    setParam(FILTER_OPTIONS.brand, param)

  return (
    <List
      error={error}
      list={data?.groupedBrand}
      labelLocale="product_view_featured_brands"
      loading={loading}
      onClick={onClick}
    />
  )
}
