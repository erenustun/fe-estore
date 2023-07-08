import Link from 'next/link'
import { Button } from '@component'
import { useCookies } from 'react-cookie'
import { AccountDropdownComponent } from '@feature/account/components/account-dropdown.component'
import { routeConfig } from '@shared/config'
import { tokenKey } from '@shared/constant'

export const HeaderAuthConditionComponent = () => {
  const [cookies, ,] = useCookies([tokenKey])

  return !cookies[tokenKey] ? (
    <Link href={routeConfig.ACCOUNT.AUTH.SIGN_IN}>
      <Button>Sign in</Button>
    </Link>
  ) : (
    <div className="relative">
      <AccountDropdownComponent />
    </div>
  )
}
