import Link from 'next/link'
import { Button } from '@component'
import { AccountDropdownComponent } from '@feature/account/components/account-dropdown.component'
import { routeConfig } from '@shared/config'
import useAuthStore from '@feature/auth/state/auth.store'
import { getCookie } from 'react-use-cookie'
import { FormattedMessage } from 'react-intl'

export const HeaderAuthConditionComponent = () => {
  const { token } = useAuthStore(state => state)

  return !getCookie('token') && getCookie('token').length === 0 && !token ? (
    <Link href={routeConfig.ACCOUNT.AUTH.SIGN_IN}>
      <Button>
        <FormattedMessage id="auth_form_login" />
      </Button>
    </Link>
  ) : (
    <div className="relative">
      <AccountDropdownComponent />
    </div>
  )
}
