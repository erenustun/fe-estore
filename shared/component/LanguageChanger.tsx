import { GlobeEuropeAfricaIcon as LanguageIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import useUserStore from '@feature/account/state/user.store'
import { Dropdown } from '@shared/component'
import { shallow } from 'zustand/shallow'
import { LANGUAGE_LIST } from '@shared/constant'

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
      label={<LanguageIcon className="ml-1 h-5 w-5" />}
      list={LANGUAGE_LIST}
      onClick={handleChange}
      preLabelComponent={settings?.language}
      transparentBackground
    />
  )
}
