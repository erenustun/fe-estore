import Image from 'next/image'
import { useSpring, animated } from '@react-spring/web'

interface AccountIconProps {
  isVisible: boolean
  onClick: () => void
}

export const AccountIcon = ({ isVisible, onClick }: AccountIconProps) => {
  const { y } = useSpring({
    y: isVisible ? 360 : 0,
  })

  return (
    <animated.button
      className="flex items-center justify-center rounded-full h-7 w-7 cursor-pointer"
      style={{
        transform: y.to(y => `rotateY(${y}deg)`),
      }}
      onClick={onClick}
    >
      <Image
        src="https://i.pravatar.cc/301"
        alt="user avatar"
        width="32"
        height="32"
        className="bg-cover bg-center rounded-full"
      />
    </animated.button>
  )
}
