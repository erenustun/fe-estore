export const routeConfig = {
  HOME: '/',
  ACCOUNT: {
    INDEX: '/account',
    EDIT: '/account/edit',
    AUTH: {
      SIGN_IN: '/auth/sign-in',
      SIGN_UP: '/auth/sign-up',
    },
    ADDRESS: {
      INDEX: '/account/address',
      NEW: '/account/address/new',
      EDIT: '/account/address/edit',
    },
    UNAUTHORIZED: '/account/unauthorized',
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
    routeConfig.ACCOUNT.INDEX,
    routeConfig.ACCOUNT.ADDRESS.INDEX,
    routeConfig.ACCOUNT.ADDRESS.EDIT,
    routeConfig.ACCOUNT.ADDRESS.NEW,
  ],
  authRoutes: [
    routeConfig.ACCOUNT.AUTH.SIGN_IN,
    routeConfig.ACCOUNT.AUTH.SIGN_UP,
  ],
  publicRoutes: [
    routeConfig.PRODUCT.INDEX,
    routeConfig.PRODUCT.BRAND,
    routeConfig.PRODUCT.CATEGORY,
    routeConfig.ACCOUNT.UNAUTHORIZED,
  ],
}
