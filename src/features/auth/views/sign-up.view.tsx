import Image from 'next/image'
import { Box, Container } from '@component'
import { SignUpForm } from '@feature/auth/components/sign-up.form'
import { themeConfig } from '@shared/config'

export const SignUpView = () => (
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
