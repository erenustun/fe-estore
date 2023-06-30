import router from 'next/router'

export const pushUri = async (href: string, as?: string, shallow?: boolean) => {
  await router.push(href, as, {
    shallow,
  })
}
