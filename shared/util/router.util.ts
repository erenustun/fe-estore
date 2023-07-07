import router from 'next/router'

export const pushUri = async (href: string, as?: string, shallow?: boolean) => {
  await router.replace(href, as, {
    shallow,
  })
}
