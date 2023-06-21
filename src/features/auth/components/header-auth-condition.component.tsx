import { AccountIcon } from '@src/features/account/components/account-icon.component'
import Link from 'next/link'
import { Button } from '@components/Button'
import { useCookies } from 'react-cookie'
import { AccountDropdownComponent } from '@src/features/account/components/account-dropdown.component'

export const HeaderAuthConditionComponent = () => {
  const [cookies] = useCookies(['jwt'])

  if (cookies['jwt']) {
    return (
      <div className="relative">
        <AccountDropdownComponent />
      </div>
    )
  } else {
    return (
      <Link href={'/auth/sign-in'}>
        <Button $style="info">Sign in</Button>
      </Link>
    )
  }
}
