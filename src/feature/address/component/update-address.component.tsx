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
import { useMutation, useQuery } from '@apollo/client'
import UpdateAddressMutation from '@feature/address/graphql/update-address.graphql'
import FetchAddresses from '@feature/address/graphql/fetch-addresses.graphql'
import FetchAddress from '@feature/address/graphql/fetch-address.graphql'
import { AddressType, Country } from '@feature/address'

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

export const UpdateAddress = () => {
  const {
    back,
    query: { id },
  } = useRouter()
  const intl = useIntl()

  const [editAddress] = useMutation(UpdateAddressMutation, {
    refetchQueries: [FetchAddresses],
    onCompleted: () => back(),
  })

  const { data } = useQuery(FetchAddress, { variables: { id } })

  const formOptions = {
    name: 'address.edit',
    shouldUnregister: true,
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
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
          primary,
          ...(type && type !== '0' && { type }),
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
            <FormattedMessage id="address_form_update" />
          </H2>
        </div>

        <Box className="flex bg-opacity-5 px-1" darkborder>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="px-2"
            loading={isSubmitting && isLoading}
          >
            <Select
              name="title"
              label={<FormattedMessage id="address_form_title" />}
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
              icon={<UserIcon className="h-5 w-5" />}
            />
            <div className="flex flex-row space-x-2">
              <Input
                autoFocus
                errors={errors}
                label={<FormattedMessage id="address_form_firstName" />}
                name="firstName"
                placeholder={data?.address?.firstName}
                register={register}
                required
                type="text"
                noIcon
              />
              <Input
                errors={errors}
                label={<FormattedMessage id="address_form_lastName" />}
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
              icon={<DevicePhoneMobileIcon className="h-5 w-5" />}
              label={<FormattedMessage id="address_form_phone" />}
              name="phone"
              placeholder={data?.address?.phone}
              register={register}
              type="text"
            />
            <Input
              errors={errors}
              icon={<HomeIcon className="h-5 w-5" />}
              label={<FormattedMessage id="address_form_street_address" />}
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
                label={<FormattedMessage id="address_form_state" />}
                name="state"
                placeholder={data?.address?.state}
                register={register}
                required
                type="text"
                noIcon
              />
              <Input
                errors={errors}
                label={<FormattedMessage id="address_form_zip_code" />}
                name="zipCode"
                placeholder={data?.address?.zipCode}
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
                defaultChecked={data?.address?.primary}
                className="ml-1 flex flex-row-reverse gap-x-2 self-start"
                errors={errors}
                label={<FormattedMessage id="address_form_primary" />}
                name="primary"
                register={register}
                type="checkbox"
              />
            </section>
            <Button className="self-end">
              <input
                type="submit"
                value={intl.formatMessage({ id: 'address_form_update_save' })}
              />
            </Button>
          </Form>
          <Loader
            message={<FormattedMessage id="address_form_update_saving" />}
            loading={isSubmitting && isLoading}
          />
        </Box>
      </div>
      <div className="flex w-64 self-start"></div>
      <section className={cn('w-4/5 pl-5', themeConfig.boxMargin)}></section>
    </Container>
  )
}
