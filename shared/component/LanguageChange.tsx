import { useCookies } from 'react-cookie'
import { LanguageIcon } from '@heroicons/react/24/solid'
import cn from 'classnames'
import { useRouter } from 'next/router'

interface LanguageChangeProps {
  className?: string
}

export const LanguageChange = ({ className }: LanguageChangeProps) => {
  const { locale, locales, defaultLocale } = useRouter()

  const [cookies, setCookie, removeCookie] = useCookies(['locale'])

  /*  console.log('locale:')
  console.log(cookies['locale'])

  useEffect(() => {
    console.log(locale)
    console.log(locales)
    console.log(defaultLocale)
    /!*if (cookies['locale'])
      console.log(cookies['locale'])*!/
  })*/

  return (
    <div
      className={cn('flex items-center space-x-1 cursor-pointer', className)}
    >
      <span>EN</span>
      <LanguageIcon className="h-4 w-4" />
    </div>
  )
}
