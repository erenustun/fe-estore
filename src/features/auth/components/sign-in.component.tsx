import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import * as Yup from 'yup'
import { VALIDATION_EMAIL, VALIDATION_PASSWORD } from '@feature/auth/constant'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
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
import { routeConfig, themeConfig } from '@shared/config'
import useAuthStore from '@feature/auth/state/auth.store'
import cn from 'classnames'
import { ApolloError } from '@apollo/client'
import { FormattedMessage, useIntl } from 'react-intl'

type LoginFormInputs = {
  apiErrors?: any
  email: string
  password: string
}

export const SignIn = () => {
  const {
    query: { message },
  } = useRouter()
  const { error, setError: setStoreError, signIn } = useAuthStore()
  const intl = useIntl()

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
    setStoreError(undefined)
    reset()
    const { apiErrors, ...rest } = data
    signIn({ ...rest })
      .then(() => pushUri(routeConfig.ACCOUNT.INDEX))
      .catch((error: ApolloError) =>
        setError('apiErrors', { message: error.message })
      )
  }

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)} loading={isSubmitting}>
        <div className="flex flex-col space-y-1">
          <FormTitle>
            <FormattedMessage id="auth_form_login" />
          </FormTitle>
          <FormSub>
            <FormattedMessage id="auth_form_login_sub" />
          </FormSub>
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
          label={intl.formatMessage({ id: 'auth_form_email' })}
          name="email"
          placeholder={intl.formatMessage({ id: 'auth_form_email' })}
          register={register}
          type="email"
        />
        <Input
          errors={errors}
          icon={<LockClosedIcon className="w-5 h-5" />}
          label={intl.formatMessage({ id: 'auth_form_password' })}
          name="password"
          placeholder={intl.formatMessage({ id: 'auth_form_password' })}
          register={register}
          type="password"
          secretField
        />
        <div className={cn(themeConfig.dangerTextColor)}>{error}</div>
        <div className="flex flex-row-reverse">
          <Button>
            <FormattedMessage id="auth_form_login_button" />
          </Button>

          <TextLink
            onClick={() => {
              unregister('email')
              unregister('password')
              pushUri(routeConfig.ACCOUNT.AUTH.SIGN_UP)
            }}
            className="self-end mr-auto"
            label={intl.formatMessage({ id: 'auth_form_no_account_yet' })}
          />
        </div>
      </Form>
      <Loader
        loading={isSubmitting}
        message={intl.formatMessage({ id: 'auth_form_login_fetching' })}
      />
    </section>
  )
}
