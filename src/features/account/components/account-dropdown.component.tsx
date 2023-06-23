import { FC, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { AccountIcon } from '@src/features/account/components/account-icon.component'
import { useCookies } from 'react-cookie'
import { pushUri } from '@util/router.util'
import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'

export const AccountDropdownComponent = () => {
  const [isVisible, setVisibility] = useState(false)
  const toggleDropdown = () => setVisibility(!isVisible)

  const dropdownAppears = useSpring({
    transform: isVisible ? 'translate3D(0,0,0)' : 'translate3D(0,-40px,0)',
    opacity: isVisible ? 1 : 0,
  })

  return (
    <div className="relative">
      <AccountIcon isVisible={isVisible} onClick={toggleDropdown} />
      <animated.div style={dropdownAppears} className="-ml-20">
        {isVisible ? <DropdownContent /> : null}
      </animated.div>
    </div>
  )
}

const MenuDropdown = tw.ul`
  absolute
  flex
  flex-col
  mt-5
  w-28
  rounded
  ${() => themeConfig.primaryBackgroundColorAlt}
`

const DropdownItem = tw.ul`
  w-full
  px-5
  py-2
  rounded-t
  select-none
  cursor-pointer
  ${() => themeConfig.primaryBackgroundHoverAlt}
  ${() => themeConfig.primaryBackgroundActiveAlt}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
`

const DropdownContent: FC = () => {
  const [, , removeCookie] = useCookies(['jwt'])

  const signOut = async () => {
    removeCookie('jwt', { path: '/' })
    if (localStorage) localStorage.removeItem('jwt')
    await pushUri('/', '/home')
  }

  const accountMenuList = [
    {
      label: 'Account',
    },
    {
      label: 'Orders',
    },
    {
      label: 'Sign out',
      onClick: signOut,
    },
  ]

  return (
    <MenuDropdown>
      {accountMenuList.map(({ label, onClick }, index: number) => (
        <DropdownItem
          key={index}
          onClick={onClick}
          className={
            index + 1 < accountMenuList.length
              ? themeConfig.primaryBorderBottomColor
              : ''
          }
        >
          {label}
        </DropdownItem>
      ))}
    </MenuDropdown>
  )
}
