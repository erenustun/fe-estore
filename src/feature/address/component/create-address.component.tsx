import {
  Box,
  Button,
  Container,
  Form,
  H2,
  Input,
  Loader,
  Select,
} from '@component'
import {
  ArrowLongLeftIcon as BackIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  HomeIcon,
  GlobeAltIcon,
} from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
import cn from 'classnames'
import { themeConfig } from '@shared/config'
import { useMutation } from '@apollo/client'
import FetchAddresses from '@feature/address/graphql/fetch-addresses.graphql'
import CreateAddressMutation from '@feature/address/graphql/create-address.graphql'
import {
  VALIDATION_COUNTRY,
  VALIDATION_FIRST_NAME,
  VALIDATION_LAST_NAME,
  VALIDATION_LINE1,
  VALIDATION_PHONE,
  VALIDATION_STATE,
  VALIDATION_TITLE,
  VALIDATION_ZIP_CODE,
} from '@feature/address/constants/create-user.constant'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Country } from '@feature/address'

type AddressInputs = {
  countryCode: NonNullable<Country | undefined>
  firstName: string
  lastName: string
  line1: string
  phone?: string
  primary?: boolean
  state: string
  title?: string
  zipCode: string
}

export const CreateAddress = () => {
  const { back } = useRouter()
  const intl = useIntl()

  const [createAddress] = useMutation(CreateAddressMutation, {
    refetchQueries: [FetchAddresses],
    onCompleted: () => back(),
  })

  const validationSchema = Yup.object().shape({
    ...VALIDATION_COUNTRY,
    ...VALIDATION_FIRST_NAME,
    ...VALIDATION_LAST_NAME,
    ...VALIDATION_LINE1,
    ...VALIDATION_PHONE,
    ...VALIDATION_STATE,
    ...VALIDATION_TITLE,
    ...VALIDATION_ZIP_CODE,
  })

  const formOptions = {
    name: 'address.new',
    resolver: yupResolver(validationSchema),
    shouldUnregister: true,
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // @ts-ignore
  } = useForm<AddressInputs>(formOptions)

  const onSubmit: SubmitHandler<AddressInputs> = async data => {
    const {
      countryCode,
      firstName,
      lastName,
      line1,
      phone,
      primary,
      state,
      title,
      zipCode,
    } = data

    await createAddress({
      variables: {
        input: {
          countryCode,
          firstName,
          lastName,
          line1,
          state,
          zipCode,
          title,
          ...(phone && { phone }),
          primary,
          type: 'SHIPPING',
        },
      },
      refetchQueries: [FetchAddresses],
    })
  }

  return (
    <Container className="min-h-[62rem] flex-row">
      <div className="flex flex-col">
        <div className="flex items-center">
          <BackIcon
            className="mb-2 mr-2 h-5 w-5 cursor-pointer"
            onClick={() => back()}
          />
          <H2>
            <FormattedMessage id="address_form_create" />
          </H2>
        </div>

        <Box className="flex bg-opacity-5 px-1" darkborder>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="px-2"
            loading={isSubmitting}
          >
            <Select
              name="title"
              label={<FormattedMessage id="address_form_title" />}
              register={register}
              options={[
                {
                  name: 'Please choose',
                  value: 0,
                },
                {
                  name: 'Ms.',
                  value: 'ms',
                },
                {
                  name: 'Mr.',
                  value: 'mr',
                },
                {
                  name: 'Mrs.',
                  value: 'mrs',
                },
                {
                  name: 'Mx.',
                  value: 'mx',
                },
              ]}
              errors={errors}
              icon={<UserIcon className="h-5 w-5" />}
              required
            />
            <div className="flex flex-row space-x-2">
              <Input
                autoFocus
                errors={errors}
                label={<FormattedMessage id="address_form_firstName" />}
                name="firstName"
                placeholder={intl.formatMessage({
                  id: 'address_form_firstName',
                })}
                register={register}
                required
                type="text"
                noIcon
              />
              <Input
                errors={errors}
                label={<FormattedMessage id="address_form_lastName" />}
                name="lastName"
                placeholder={intl.formatMessage({
                  id: 'address_form_lastName',
                })}
                register={register}
                required
                type="text"
                noIcon
              />
            </div>
            <Input
              errors={errors}
              icon={<DevicePhoneMobileIcon className="h-5 w-5" />}
              label={<FormattedMessage id="address_form_phone" />}
              name="phone"
              placeholder={intl.formatMessage({ id: 'address_form_phone' })}
              register={register}
              type="text"
            />
            <Input
              errors={errors}
              icon={<HomeIcon className="h-5 w-5" />}
              label={<FormattedMessage id="address_form_street_address" />}
              name="line1"
              placeholder={intl.formatMessage({
                id: 'address_form_street_address',
              })}
              register={register}
              required
              type="text"
            />
            <section className="flex space-x-4">
              <Input
                className="w-11/12"
                errors={errors}
                label={<FormattedMessage id="address_form_state" />}
                name="state"
                placeholder={intl.formatMessage({ id: 'address_form_state' })}
                register={register}
                required
                type="text"
                noIcon
              />
              <Input
                errors={errors}
                label={<FormattedMessage id="address_form_zip_code" />}
                name="zipCode"
                placeholder={intl.formatMessage({
                  id: 'address_form_zip_code',
                })}
                register={register}
                required
                type="text"
                noIcon
              />
            </section>
            <section className="flex flex-col gap-y-5">
              <Select
                name="countryCode"
                label={<FormattedMessage id="address_form_country" />}
                register={register}
                required
                options={[
                  {
                    name: 'Please choose',
                    value: 0,
                  },
                  {
                    value: 'AT',
                    name: <FormattedMessage id="AT" />,
                  },
                  {
                    value: 'DE',
                    name: <FormattedMessage id="DE" />,
                  },
                  {
                    value: 'FR',
                    name: <FormattedMessage id="FR" />,
                  },
                  {
                    value: 'IT',
                    name: <FormattedMessage id="IT" />,
                  },
                  {
                    value: 'NL',
                    name: <FormattedMessage id="NL" />,
                  },
                  {
                    value: 'PL',
                    name: <FormattedMessage id="PL" />,
                  },
                  {
                    value: 'ES',
                    name: <FormattedMessage id="ES" />,
                  },
                  {
                    value: 'CH',
                    name: <FormattedMessage id="CH" />,
                  },
                  {
                    value: 'UK',
                    name: <FormattedMessage id="UK" />,
                  },
                ]}
                errors={errors}
                icon={<GlobeAltIcon className="h-5 w-5" />}
              />
              <Input
                className="ml-1 flex flex-row-reverse gap-x-2 self-start"
                errors={errors}
                label={<FormattedMessage id="address_form_primary" />}
                name="primary"
                register={register}
                type="checkbox"
              />
            </section>
            <Button className="flex self-end">
              <FormattedMessage id="address_form_create_save" />
            </Button>
            {isSubmitting && <H2>Loading</H2>}
          </Form>
          <Loader
            message={<FormattedMessage id="address_form_create_saving" />}
            loading={isSubmitting}
          />
        </Box>
      </div>
      <div className="flex w-64 self-start"></div>
      <section className={cn('w-4/5 pl-5', themeConfig.boxMargin)}></section>
    </Container>
  )
}
