import { FlexBox, Loader } from '@component'
import { useQuery } from '@apollo/client'
import FetchProducts from '@src/features/product/graphql/fetch-products.graphql'
import { FormattedMessage } from 'react-intl'
import { Card, Product, useFilterPrams } from '@feature/product'
import { useRouter } from 'next/router'

export const ViewProducts = () => {
  const { query } = useRouter()
  const filterArgs = useFilterPrams(query)

  const { data, loading, error } = useQuery(FetchProducts, {
    variables: {
      paginationArgs: { limit: 20, page: 1 },
      filterArgs,
    },
    fetchPolicy: 'cache-and-network',
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
      <div className="grid w-full grid-cols-1 gap-x-2 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
        {data.products?.data?.map((product: Product, i: number) => (
          <Card
            key={i}
            brand={product.brand}
            category={product.category}
            id={product.id}
            name={product.name}
            price={product.price}
            ratingAverage={product.ratingAverage}
            sku={product.sku}
            specification={product?.specification}
            stock={product.stock}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </FlexBox>
  )
}
