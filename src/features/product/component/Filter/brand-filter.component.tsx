import { Loader } from '@component'
import { useRouter } from 'next/router'
import { FILTER_OPTIONS, useFilterPrams, SelectFilter } from '@feature/product'
import { useRouterParams } from '@shared/util'
import { useQuery } from '@apollo/client'
import FetchGroupedBrands from '@feature/product/graphql/fetch-grouped-brand.graphql'
import { FormattedMessage } from 'react-intl'

export const BrandFilter = () => {
  const { query } = useRouter()

  /* eslint-disable-next-line react-hooks/rules-of-hooks */
  const { brand } = useFilterPrams(query)

  const { toggleParam, removeParam } = useRouterParams()

  const { data, loading, error } = useQuery(FetchGroupedBrands, {
    fetchPolicy: 'cache-and-network',
  })

  const onChange = (value: number | string) => {
    removeParam('page')
    removeParam('limit')
    toggleParam(FILTER_OPTIONS.brand, value)
  }

  if (loading)
    return (
      <Loader
        loading={loading}
        message={<FormattedMessage id="address_view_fetching" />}
      />
    )

  if (error) return <h1>Error: {error.message}</h1>

  return (
    <SelectFilter
      activeList={brand}
      label={<FormattedMessage id="product_view_filter_select_brand" />}
      list={data?.groupedBrand}
      handleChange={onChange}
    />
  )
}
