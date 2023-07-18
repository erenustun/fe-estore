import {
  AtSymbolIcon,
  LockClosedIcon,
  UserIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/20/solid'
import {
  VALIDATION_EMAIL,
  VALIDATION_FIRST_NAME,
  VALIDATION_LAST_NAME,
  VALIDATION_PASSWORD,
  VALIDATION_PASSWORD_REPEAT,
} from '@feature/auth/constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ApolloError } from '@apollo/client'
import { pushUri } from '@shared/util'
import * as Yup from 'yup'
import { Button, Form, FormSub, FormTitle, Input, TextLink } from '@component'
import { routeConfig, themeConfig } from '@shared/config'
import useAuthStore from '@feature/auth/state/auth.store'
import cn from 'classnames'

type RegisterFormInputs = {
  apiErrors?: any
  email: string
  firstName: string
  lastName: string
  password: string
  passwordRepeat: string
  phone?: string
}

export const SignUpForm = () => {
  const { error, setError: setStoreError, signUp } = useAuthStore()

  const validationSchema = Yup.object().shape({
    ...VALIDATION_EMAIL,
    ...VALIDATION_FIRST_NAME,
    ...VALIDATION_LAST_NAME,
    ...VALIDATION_PASSWORD,
    ...VALIDATION_PASSWORD_REPEAT,
  })

  const formOptions = {
    name: 'auth.sign-up',
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
  } = useForm<RegisterFormInputs>(formOptions)

  const onSubmit: SubmitHandler<RegisterFormInputs> = data => {
    setStoreError(undefined)
    reset()
    const { apiErrors, passwordRepeat, phone, ...rest } = data
    signUp({ ...rest, ...(phone && { phone }) })
      .then(() =>
        pushUri(
          `${routeConfig.ACCOUNT.AUTH.SIGN_IN}?message=Account was created`
        )
      )
      .catch((error: ApolloError) =>
        setError('apiErrors', { message: error.message })
      )
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-1">
        <FormTitle>Sign up</FormTitle>
        <FormSub>Create an account to order products and such.</FormSub>
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
        required
        type="email"
      />
      <div className="flex flex-row space-x-2">
        <Input
          errors={errors}
          icon={<UserIcon className="w-5 h-5" />}
          label="First Name"
          name="firstName"
          placeholder="First Name"
          register={register}
          required
          type="text"
        />
        <Input
          errors={errors}
          icon={<UserIcon className="w-5 h-5" />}
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          register={register}
          required
          type="text"
        />
      </div>
      <Input
        autoFocus
        errors={errors}
        icon={<DevicePhoneMobileIcon className="w-5 h-5" />}
        label="Phone"
        name="phone"
        placeholder="Phone #"
        register={register}
        type="text"
      />
      <div className="flex flex-row space-x-2">
        <Input
          errors={errors}
          icon={<LockClosedIcon className="w-5 h-5" />}
          label="Password"
          name="password"
          placeholder="Password"
          register={register}
          required
          secretField
          type="password"
        />
        <Input
          errors={errors}
          icon={<LockClosedIcon className="w-5 h-5" />}
          label="Password (again)"
          name="passwordRepeat"
          placeholder="Password (again)"
          register={register}
          required
          secretField
          type="password"
        />
      </div>
      <div className={cn(themeConfig.dangerTextColor)}>{error}</div>
      <div className="flex flex-row-reverse">
        <Button>Sign up</Button>

        <TextLink
          onClick={() => {
            unregister('email')
            unregister('firstName')
            unregister('lastName')
            unregister('password')
            unregister('phone')
            pushUri(routeConfig.ACCOUNT.AUTH.SIGN_IN)
          }}
          className="self-end mr-auto"
          label="Already have an account? Login"
        />
      </div>
    </Form>
  )
}
