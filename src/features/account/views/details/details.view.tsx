import { H2, Loader } from '@component'
import { FormattedMessage } from 'react-intl'
import { ViewDetails } from '@feature/account/components/details/view-details.component'
import { getNameFromEmail } from '@shared/util'
import { useQuery } from '@apollo/client'
import FetchUsername from '@src/features/account/graphql/details/fetch-username.graphql'

export const DetailsView = () => {
  const { data, loading } = useQuery(FetchUsername, {
    fetchPolicy: 'cache-and-network',
  })

  if (loading)
    return (
      <Loader
        loading={loading}
        message={<FormattedMessage id="account_view_fetching" />}
      />
    )

  return (
    <div className="flex flex-col">
      <H2>
        <FormattedMessage
          id="account_index"
          values={{ username: getNameFromEmail(data?.fetchCustomer?.email) }}
        />
      </H2>
      <ViewDetails />
    </div>
  )
}
