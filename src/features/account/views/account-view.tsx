import { Box } from '@components/Layout/Box'
import { Container } from '@components/Layout/Container'
import { NavLink } from '@src/components'
import {
  UserCircleIcon as UserIcon,
  LockClosedIcon,
  ListBulletIcon,
  HomeIcon,
} from '@heroicons/react/20/solid'

export const AccountView = () => {
  return (
    <Container className="flex-row min-h-[62rem]">
      <Box className="flex flex-col space-y-5 w-60 self-start">
        <NavLink
          href="/account/details"
          label="Account details"
          icon={<UserIcon className="h-5 w-5" />}
        />
        <NavLink
          href="/account/orders"
          label="My orders"
          icon={<ListBulletIcon className="h-5 w-5" />}
        />
        <NavLink
          href="/account/address"
          label="My addresses"
          icon={<HomeIcon className="h-5 w-5" />}
        />
        <NavLink
          href="/account/security"
          label="Password and Security"
          icon={<LockClosedIcon className="h-5 w-5" />}
        />
      </Box>
      <section className="w-4/5 pl-4">Account view MVP</section>
    </Container>
  )
}
