import { Loader } from '@component'
import { useRouter } from 'next/router'
import {
  FILTER_OPTIONS,
  useFilterPrams,
  FilterDropdown,
} from '@feature/product'
import { useRouterParams } from '@shared/util'
import { useQuery } from '@apollo/client'
import FetchGroupedBrands from '@feature/product/graphql/fetch-grouped-brand.graphql'
import { FormattedMessage } from 'react-intl'
import { PAGINATION_TAKE } from '@shared/constant'

export const BrandFilter = () => {
  const { query } = useRouter()

  /* eslint-disable-next-line react-hooks/rules-of-hooks */
  const { brand } = useFilterPrams(query)

  const { hasParam, removeParam, toggleParam } = useRouterParams()

  const { data, loading, error } = useQuery(FetchGroupedBrands, {
    fetchPolicy: 'cache-and-network',
  })

  const onChange = (value: number | string) => {
    hasParam('take') && removeParam('take', PAGINATION_TAKE)
    removeParam('take')
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
    <FilterDropdown
      activeList={brand}
      label={<FormattedMessage id="product_view_filter_select_brand" />}
      list={data?.groupedBrand}
      handleChange={(value: number | string) =>
        toggleParam(FILTER_OPTIONS.brand, value)
      }
      handleReset={() => removeParam(FILTER_OPTIONS.brand)}
    />
  )
}
