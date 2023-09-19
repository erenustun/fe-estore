import { FC, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { AccountIcon } from '@feature/account'
import { pushUri } from '@shared/util'
import tw from 'tailwind-styled-components'
import {
  UserIcon,
  ListBulletIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/20/solid'
import { routeConfig, themeConfig } from '@shared/config'
import useAuthStore from '@feature/auth/state/auth.store'

export const AccountDropdownComponent = () => {
  const [isVisible, setVisibility] = useState(false)
  const toggleDropdown = () => setVisibility(!isVisible)

  const dropdownAppears = useSpring({
    transform: isVisible ? 'translate3D(0,16px,0)' : 'translate3D(0,-74px,0)',
    opacity: isVisible ? 1 : 0,
  })

  return (
    <div className="relative z-50">
      <AccountIcon isVisible={isVisible} onClick={toggleDropdown} />
      <animated.div style={dropdownAppears} className="-ml-20">
        {isVisible ? <DropdownContent toggleDropdown={toggleDropdown} /> : null}
      </animated.div>
    </div>
  )
}

const MenuDropdown = tw.ul`
  absolute
  flex
  flex-col
  w-28
  rounded
  ${() => themeConfig.primaryBackgroundColorAlt}
`

const DropdownItem = tw.ul`
  w-full
  flex
  items-center
  space-x-1
  px-3
  py-2
  rounded-t
  select-none
  cursor-pointer
  hover:transform
  hover:scale-110
  ${() => themeConfig.primaryBackgroundHoverAlt}
  ${() => themeConfig.primaryBackgroundActiveAlt}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
`

interface DropdownContentProps {
  toggleDropdown: () => void
}

const DropdownContent: FC<DropdownContentProps> = ({
  toggleDropdown,
}: DropdownContentProps) => {
  const { signOut } = useAuthStore()

  const accountMenuList = [
    {
      label: 'Account',
      icon: () => <UserIcon className="h-4 w-4" />,
      onClick: async () => {
        await pushUri(routeConfig.ACCOUNT.INDEX)
        toggleDropdown()
      },
    },
    {
      label: 'Orders',
      icon: () => <ListBulletIcon className="h-4 w-4" />,
      onClick: async () => {
        await pushUri('/account/orders')
        toggleDropdown()
      },
    },
    {
      label: 'Sign out',
      icon: () => <ArrowLeftOnRectangleIcon className="h-4 w-4" />,
      onClick: () => signOut().then(() => pushUri(routeConfig.HOME)),
    },
  ]

  return (
    <MenuDropdown>
      {accountMenuList.map(({ label, icon, onClick }, index: number) => (
        <DropdownItem
          key={index}
          onClick={onClick}
          className={
            index + 1 < accountMenuList.length
              ? themeConfig.primaryBorderBottomColor
              : ''
          }
        >
          <div>{icon()}</div>
          <div>{label}</div>
        </DropdownItem>
      ))}
    </MenuDropdown>
  )
}
