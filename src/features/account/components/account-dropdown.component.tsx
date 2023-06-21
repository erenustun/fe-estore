import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { AccountIcon } from '@src/features/account/components/account-icon.component'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

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
        {isVisible ? <RadioContent /> : null}
      </animated.div>
    </div>
  )
}

const RadioContent = () => {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])

  return (
    <div className="absolute flex flex-col mt-5 w-28 bg-blue-900 rounded">
      <ul className="flex flex-col">
        <li className="w-full px-5 py-2 rounded-t hover:bg-blue-950 select-none cursor-pointer transition duration-200 ease-in">
          Account
        </li>
        <li className="w-full px-5 py-2 hover:bg-blue-950 select-none cursor-pointer transition duration-200 ease-in">
          Orders
        </li>
        <li
          className="w-full px-5 py-2 rounded-b hover:bg-blue-950 select-none cursor-pointer transition duration-200 ease-in"
          onClick={() => {
            removeCookie('jwt')
            localStorage.removeItem('jwt')
            router.push('/products')
          }}
        >
          Sign out
        </li>
      </ul>
    </div>
  )
}
