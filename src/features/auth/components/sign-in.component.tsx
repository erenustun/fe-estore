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

type LoginFormInputs = {
  apiErrors?: any
  email: string
  password: string
}

export const SignInComponent = () => {
  const [, setCookie] = useCookies(['jwt'])

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

  const [signIn] = useMutation(SignInMutation, {
    onCompleted: data => {
      if (localStorage) localStorage.setItem('jwt', data?.signIn?.accessToken)
      setCookie('jwt', data?.signIn?.accessToken, { path: '/' })
    },
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col self-start text-slate-50 font-light space-y-10 w-[30rem] mx-auto relative px-5"
    >
      <div className="flex flex-col space-y-1">
        <h1 className={`text-3xl mb-1`}>Sign in</h1>
        <h4>Login to manage your orders.</h4>
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

      <div className={'flex flex-col space-y-6'}>
        <input
          className="bg-sky-500 hover:bg-sky-600 w-24 py-1.5 px-2 self-end rounded-md cursor-pointer transition duration-200 ease-in"
          type="submit"
          value="Sign in"
        />
        <a
          onClick={() => {
            unregister('email')
            unregister('password')
            pushUri('/auth/sign-up')
          }}
          className={
            'text-sm self-start text-slate-700 dark:text-slate-200 dark:hover:text-slate-50 dark:active:text-slate-400 hover:text-slate-300 active:text-blue-700 hover:underline cursor-pointer'
          }
        >
          No account yet? Create account now.
        </a>
      </div>
    </form>
  )
}
