import { Box, Button, Container, Form, H2, Input, Select } from '@component'
import { AddressType, Country } from '@shared/model'
import {
  ArrowLongLeftIcon as BackIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  HomeIcon,
  GlobeAltIcon,
} from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import cn from 'classnames'
import { themeConfig } from '@shared/config'
import { useMutation, useQuery } from '@apollo/client'
import UpdateAddressMutation from '@feature/address/graphql/update-address.graphql'
import FetchAddresses from '@feature/address/graphql/fetch-addresses.graphql'
import FetchAddress from '@feature/address/graphql/fetch-address.graphql'

type AddressInputs = {
  apiErrors?: any
  companyName?: string
  countryCode?: Country | string
  firstName?: string
  lastName?: string
  line1?: string
  phone?: string
  primary?: boolean
  state?: string
  title?: string
  type?: AddressType | string
  zipCode?: string
}

export const AccountAddressEdit = () => {
  const {
    back,
    query: { id },
  } = useRouter()

  const [editAddress] = useMutation(UpdateAddressMutation, {
    refetchQueries: [FetchAddresses],
    onCompleted: () => back(),
  })

  const { data } = useQuery(FetchAddress, {
    variables: { id },
    onCompleted: () => {
      console.log(data?.address?.firstName)
    },
  })

  const formOptions = {
    name: 'address.edit',
    shouldUnregister: true,
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddressInputs>(formOptions)

  const onSubmit: SubmitHandler<AddressInputs> = data => {
    const {
      countryCode,
      firstName,
      lastName,
      line1,
      phone,
      primary,
      state,
      title,
      type,
      zipCode,
    } = data

    editAddress({
      variables: {
        id,
        input: {
          ...(firstName && { firstName }),
          ...(lastName && { lastName }),
          ...(title && title !== '0' && { title }),
          ...(line1 && { line1 }),
          ...(zipCode && { zipCode }),
          ...(state && { state }),
          ...(countryCode && countryCode !== '0' && { countryCode }),
          ...(phone && { phone }),
          ...(primary && { primary }),
          ...(type && type !== '0' && { type }),
        },
      },
      refetchQueries: [FetchAddresses],
    })

    reset()
  }

  return (
    <Container className="flex-row min-h-[62rem] border">
      <div className="flex w-64 self-start"></div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <BackIcon
            className="w-5 h-5 mb-2 mr-2 cursor-pointer"
            onClick={() => back()}
          />
          <H2>
            <FormattedMessage id="address_form_update" />
          </H2>
        </div>

        <Box className="flex px-1 bg-opacity-5">
          <Form onSubmit={handleSubmit(onSubmit)} className="mx-auto px-0">
            <Select
              name="title"
              label={<FormattedMessage id="address_form_update_title" />}
              register={register}
              options={[
                {
                  name: 'Ms.',
                  value: 'ms',
                  selected: data?.address?.title === 'ms',
                },
                {
                  name: 'Mr.',
                  value: 'mr',
                  selected: data?.address?.title === 'mr',
                },
                {
                  name: 'Mrs.',
                  value: 'mrs',
                  selected: data?.address?.title === 'mrs',
                },
                {
                  name: 'Mx.',
                  value: 'mx',
                  selected: data?.address?.title === 'mx',
                },
              ]}
              errors={errors}
              icon={<UserIcon className="w-5 h-5" />}
            />
            <div className="flex flex-row space-x-2">
              <Input
                autoFocus
                errors={errors}
                label={<FormattedMessage id="address_form_update_firstName" />}
                name="firstName"
                placeholder={data?.address?.firstName}
                register={register}
                required
                type="text"
                noIcon
              />
              <Input
                errors={errors}
                label={<FormattedMessage id="address_form_update_lastName" />}
                name="lastName"
                placeholder={data?.address?.lastName}
                register={register}
                required
                type="text"
                noIcon
              />
            </div>
            <Input
              errors={errors}
              icon={<DevicePhoneMobileIcon className="w-5 h-5" />}
              label={<FormattedMessage id="address_form_update_phone" />}
              name="phone"
              placeholder={data?.address?.phone}
              register={register}
              type="text"
            />
            <Input
              errors={errors}
              icon={<HomeIcon className="w-5 h-5" />}
              label={
                <FormattedMessage id="address_form_update_street_address" />
              }
              name="line1"
              placeholder={data?.address?.line1}
              register={register}
              required
              type="text"
            />
            <section className="flex space-x-4">
              <Input
                className="w-11/12"
                errors={errors}
                label={<FormattedMessage id="address_form_update_state" />}
                name="state"
                placeholder={data?.address?.state}
                register={register}
                required
                type="text"
                noIcon
              />
              <Input
                errors={errors}
                label={<FormattedMessage id="address_form_update_zip_code" />}
                name="zipCode"
                placeholder={data?.address?.zipCode}
                register={register}
                required
                type="text"
                noIcon
              />
            </section>
            <Select
              name="countryCode"
              label={<FormattedMessage id="address_form_update_country" />}
              register={register}
              required
              options={[
                {
                  value: 'AT',
                  name: <FormattedMessage id="AT" />,
                  selected: data?.address?.countryCode === 'AT',
                },
                {
                  value: 'DE',
                  name: <FormattedMessage id="DE" />,
                  selected: data?.address?.countryCode === 'DE',
                },
                {
                  value: 'FR',
                  name: <FormattedMessage id="FR" />,
                  selected: data?.address?.countryCode === 'FR',
                },
                {
                  value: 'IT',
                  name: <FormattedMessage id="IT" />,
                  selected: data?.address?.countryCode === 'IT',
                },
                {
                  value: 'NL',
                  name: <FormattedMessage id="NL" />,
                  selected: data?.address?.countryCode === 'NL',
                },
                {
                  value: 'PL',
                  name: <FormattedMessage id="PL" />,
                  selected: data?.address?.countryCode === 'PL',
                },
                {
                  value: 'ES',
                  name: <FormattedMessage id="ES" />,
                  selected: data?.address?.countryCode === 'ES',
                },
                {
                  value: 'CH',
                  name: <FormattedMessage id="CH" />,
                  selected: data?.address?.countryCode === 'CH',
                },
                {
                  value: 'UK',
                  name: <FormattedMessage id="UK" />,
                  selected: data?.address?.countryCode === 'UK',
                },
              ]}
              errors={errors}
              icon={<GlobeAltIcon className="w-5 h-5" />}
            />
            <Button>
              <FormattedMessage id="address_form_update_save" />
            </Button>
          </Form>
        </Box>
      </div>
      <div className="flex w-64 self-start"></div>
      <section className={cn('w-4/5 pl-5', themeConfig.boxMargin)}></section>
    </Container>
  )
}
