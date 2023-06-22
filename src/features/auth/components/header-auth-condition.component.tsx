import Link from 'next/link'
import { Button } from '@components/Button'
import { useCookies } from 'react-cookie'
import { AccountDropdownComponent } from '@src/features/account/components/account-dropdown.component'

export const HeaderAuthConditionComponent = () => {
  const [cookies] = useCookies(['jwt'])

  return cookies['jwt'] ? (
    <div className="relative">
      <AccountDropdownComponent />
    </div>
  ) : (
    <Link href={'/auth/sign-in'}>
      <Button $style="info">Sign in</Button>
    </Link>
  )
}
