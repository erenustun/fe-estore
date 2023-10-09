import { LanguageIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import useUserStore from '@feature/account/state/user.store'
import { Dropdown } from '@shared/component'
import { shallow } from 'zustand/shallow'

const LANGUAGE_LIST = [
  {
    intl: 'cz',
  },
  {
    intl: 'de',
  },
  {
    intl: 'en',
  },
  {
    intl: 'fr',
  },
  {
    intl: 'it',
  },
  {
    intl: 'nl',
  },
]

interface LanguageChangerProps {
  className?: string
}

export const LanguageChanger = ({ className }: LanguageChangerProps) => {
  const router = useRouter()
  const { pathname, asPath, query, push } = router

  const { settings, setLanguage } = useUserStore(state => state, shallow)

  const handleChange = (item: { intl: string }) => {
    setLanguage(item.intl)
    push({ pathname, query }, asPath, { locale: item.intl })
  }

  return (
    <Dropdown
      className={className}
      label={<span>{settings?.language}</span>}
      list={LANGUAGE_LIST}
      onClick={handleChange}
      postLabelComponent={<LanguageIcon className="ml-1 h-4 w-4" />}
      transparentBackground
    />
  )
}
