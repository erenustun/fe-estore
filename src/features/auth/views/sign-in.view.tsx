import { SignInForm } from '@feature/auth/components/sign-in.form'
import Image from 'next/image'
import { Box, Container } from '@component'
import { themeConfig } from '@shared/config'

export const SignInView = () => (
  <Container
    className="min-h-[55rem] bg-[url(/images/account-bg.jpg)] bg-cover"
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
      <SignInForm />
    </Box>
  </Container>
)
