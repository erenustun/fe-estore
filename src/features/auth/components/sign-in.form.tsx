import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import * as Yup from 'yup'
import { VALIDATION_EMAIL, VALIDATION_PASSWORD } from '@feature/auth/constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ApolloError } from '@apollo/client'
import { useCookies } from 'react-cookie'
import { pushUri } from '@shared/util'
import { useRouter } from 'next/router'
import {
  Button,
  Form,
  FormSub,
  FormTitle,
  Input,
  Loader,
  Notification,
  TextLink,
} from '@component'
import { routeConfig } from '@shared/config'
import { useAuthHook } from '@shared/hook/auth.hook'
import { tokenKey } from '@shared/constant'

type LoginFormInputs = {
  apiErrors?: any
  email: string
  password: string
}

export const SignInForm = () => {
  const [cookies, setCookie, removeCookie] = useCookies([tokenKey])
  const {
    query: { message },
  } = useRouter()
  const { signIn } = useAuthHook()

  const validationSchema = Yup.object().shape({
    ...VALIDATION_EMAIL,
    ...VALIDATION_PASSWORD,
  })

  const formOptions = {
    name: 'auth.sign-in',
    resolver: yupResolver(validationSchema),
    shouldUnregister: true,
  }

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
    unregister,
  } = useForm<LoginFormInputs>(formOptions)

  const onSubmit: SubmitHandler<LoginFormInputs> = data => {
    const { email, password } = data

    signIn({ email, password })
      .then(async data => {
        const {
          accessToken,
          user: { authExpiresAt },
        } = data.data?.signIn
        if (cookies[tokenKey]) removeCookie(tokenKey)
        setCookie(tokenKey, accessToken, {
          expires: new Date(authExpiresAt),
          sameSite: 'none',
          path: '/',
        })
        reset()
        await pushUri(routeConfig.ACCOUNT.INDEX)
      })
      .catch((error: ApolloError) =>
        setError('apiErrors', { message: error.message })
      )
  }

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)} loading={isSubmitting}>
        <div className="flex flex-col space-y-1">
          <FormTitle>Sign in</FormTitle>
          <FormSub>Login to manage your orders.</FormSub>
          {message && (
            <Notification className="mt-2 -mb-5">{message}</Notification>
          )}
          {errors['apiErrors'] && (
            <span className="text-rose-400 -mt-5">
              {errors?.apiErrors?.message as string}
            </span>
          )}
        </div>

        <Input
          autoFocus
          errors={errors}
          icon={<AtSymbolIcon className="w-5 h-5" />}
          label="E-Mail"
          name="email"
          placeholder="E-Mail"
          register={register}
          type="email"
        />
        <Input
          errors={errors}
          icon={<LockClosedIcon className="w-5 h-5" />}
          label="Password"
          name="password"
          placeholder="Password"
          register={register}
          type="password"
          secretField
        />

        <div className="flex flex-row-reverse">
          <Button>Sign in</Button>

          <TextLink
            onClick={() => {
              unregister('email')
              unregister('password')
              pushUri(routeConfig.ACCOUNT.AUTH.SIGN_UP)
            }}
            className="self-end mr-auto"
            label="No account yet? Create account now."
          />
        </div>
      </Form>
      <Loader loading={isSubmitting} message="Signing in" />
    </section>
  )
}
