import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import Image from 'next/image'
import { Container } from '@components/Layout/Container'
import { SignUpForm } from '@src/features/auth/components/sign-up.form'
import { pushUri } from '@util/router.util'
import { Box } from '@components/Layout/Box'
import { themeConfig } from '@src/config/theme.config'

export const SignUpView = () => {
  const [cookies] = useCookies(['jwt'])

  useEffect(() => {
    if (cookies['jwt']) pushUri('/', '/home')
  }, [cookies])

  return (
    <Container
      className="min-h-[55rem] bg-[url(/images/account-bg-2.jpg)] bg-cover"
      fluid
    >
      <Box className="flex justify-evenly -space-x-6">
        <div className="scale-95 -mt-4 h-full bg-cover bg-center">
          <Image
            src="/images/1.jpg"
            width="500"
            height="1000"
            alt="login image"
            className={themeConfig.radiusDefault}
          />
        </div>
        <SignUpForm />
      </Box>
    </Container>
  )
}
