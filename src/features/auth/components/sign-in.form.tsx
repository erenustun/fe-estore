import { Input } from '@components/Form/Input'
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import * as Yup from 'yup'
import {
  VALIDATION_EMAIL,
  VALIDATION_PASSWORD,
} from '@src/features/auth/constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ApolloError, useMutation } from '@apollo/client'
import { useCookies } from 'react-cookie'
import SignInMutation from '@src/features/auth/graphql/sign-in.graphql'
import { pushUri } from '@util/router.util'
import { useRouter } from 'next/router'
import {
  Button,
  Form,
  FormSub,
  FormTitle,
  Notification,
  TextLink,
} from '@src/components'

type LoginFormInputs = {
  apiErrors?: any
  email: string
  password: string
}

export const SignInForm = () => {
  const [, setCookie] = useCookies(['jwt'])
  const {
    query: { message },
  } = useRouter()

  const [signIn] = useMutation(SignInMutation, {
    onCompleted: data => {
      if (localStorage) localStorage.setItem('jwt', data?.signIn?.accessToken)
      setCookie('jwt', data?.signIn?.accessToken, { path: '/' })
    },
  })

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
    formState: { errors },
    unregister,
  } = useForm<LoginFormInputs>(formOptions)

  const onSubmit: SubmitHandler<LoginFormInputs> = data => {
    const { email, password } = data

    signIn({
      variables: {
        data: {
          email,
          password,
        },
      },
    })
      .then(async () => {
        reset()
        await pushUri('/', '/home')
      })
      .catch((error: ApolloError) =>
        setError('apiErrors', { message: error.message })
      )
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
            pushUri('/auth/sign-up')
          }}
          className="self-end mr-auto"
          label="No account yet? Create account now."
        />
      </div>
    </Form>
  )
}
