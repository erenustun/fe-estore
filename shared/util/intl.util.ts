import Eng from '@shared/lib/intl/en.json'
import Ger from '@shared/lib/intl/de.json'

export const messageByLocale = (language: string) => {
  switch (language) {
    case 'en':
      return Eng
    case 'de':
      return Ger
    default:
      return Eng
  }
}
