import { LanguageIcon } from '@heroicons/react/24/solid'
import cn from 'classnames'
import { useRouter } from 'next/router'
import useUserStore from '@feature/account/state/user.store'

interface LanguageChangeProps {
  className?: string
}

export const LanguageChange = ({ className }: LanguageChangeProps) => {
  const router = useRouter()
  const { pathname, asPath, query, push } = router

  const { settings, setLanguage } = useUserStore(state => state)

  const handleChange = (item: { intl: string }) => {
    setLanguage(item.intl)
    push({ pathname, query }, asPath, { locale: item.intl })
  }

  return (
    <div
      className={cn(
        'flex items-center space-x-1 cursor-pointer uppercase',
        className
      )}
    >
      <span>{settings?.language}</span>
      <LanguageIcon className="h-4 w-4" />
    </div>
  )
}
