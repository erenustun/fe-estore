import { Loader } from '@component'
import { useRouter } from 'next/router'
import { FILTER_OPTIONS, useFilterPrams, SelectFilter } from '@feature/product'
import { useRouterParams } from '@shared/util'
import { useQuery } from '@apollo/client'
import FetchGroupedStorage from '@feature/product/graphql/fetch-grouped-storage.graphql'
import { FormattedMessage } from 'react-intl'

export const StorageFilter = () => {
  const { query } = useRouter()

  /* eslint-disable-next-line react-hooks/rules-of-hooks */
  const { storage } = useFilterPrams(query)

  const { toggleParam, removeParam } = useRouterParams()

  const { data, loading, error } = useQuery(FetchGroupedStorage, {
    fetchPolicy: 'cache-and-network',
  })

  const onChange = (value: number | string) => {
    removeParam('page')
    toggleParam(FILTER_OPTIONS.storage, value)
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
      activeList={storage}
      label={<FormattedMessage id="product_view_filter_select_storage" />}
      list={data?.groupedStorage}
      handleChange={onChange}
      unit="GB"
    />
  )
}
