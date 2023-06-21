import { SignInComponent } from '@src/features/auth/components/sign-in.component'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import Image from 'next/image'
import { Container } from '@components/Container'

export const SignInView = () => {
  const router = useRouter()
  const [cookies, setCookie] = useCookies(['jwt'])

  useEffect(() => {
    if (cookies['jwt']) router.push('/')
  }, [cookies])

  return (
    <Container
      className="min-h-[55rem] bg-[url(/images/wallpaper.png)] bg-cover"
      fluid
    >
      <div className="flex justify-evenly -space-x-6 w-3/5 mx-auto py-5 bg-slate-900 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-50">
        <div className="scale-95 -mt-4 h-full bg-cover bg-center">
          <Image
            src="/images/1.jpg"
            width="500"
            height="1000"
            alt="login image"
            className="rounded-lg"
          />
        </div>
        <SignInComponent />
      </div>
    </Container>
  )
}
