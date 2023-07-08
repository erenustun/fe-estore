export const routeConfig = {
  HOME: '/',
  ACCOUNT: {
    INDEX: '/account',
    AUTH: {
      SIGN_IN: '/auth/sign-in',
      SIGN_UP: '/auth/sign-up',
    },
    ADDRESS: {
      INDEX: '/account/address',
      ADDRESS_NEW: '/account/address/new',
      ADDRESS_EDIT: '/account/address/edit',
    },
  },
  PRODUCT: {
    INDEX: '/products',
    CATEGORY: '/products/category',
    BRAND: '/products/brand',
  },
}

export const middlewareRouteConfig = {
  protectedRoutes: [
    routeConfig.ACCOUNT.INDEX,
    routeConfig.ACCOUNT.ADDRESS.INDEX,
    routeConfig.ACCOUNT.ADDRESS.ADDRESS_EDIT,
    routeConfig.ACCOUNT.ADDRESS.ADDRESS_NEW,
  ],
  authRoutes: [
    routeConfig.ACCOUNT.AUTH.SIGN_IN,
    routeConfig.ACCOUNT.AUTH.SIGN_UP,
  ],
  publicRoutes: [
    routeConfig.PRODUCT.INDEX,
    routeConfig.PRODUCT.BRAND,
    routeConfig.PRODUCT.CATEGORY,
  ],
}
