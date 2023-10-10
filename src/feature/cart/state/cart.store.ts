import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { ICart, ICartStore } from '@feature/cart'
import { Product } from '@feature/product'
import { formatError } from '@shared/util'

const initial = {
  cart: [],
  fetching: false,
  error: null,
  showCart: false,
  favorites: [],
  showFavorites: false,
}

const useCartStore = create(
  devtools(
    persist<ICartStore>(
      set => ({
        ...initial,
        addToCart: (product: Product) => {
          try {
            set((state: ICartStore) => ({ ...state, fetching: true }))
            set((state: ICartStore) => {
              const cartItemIndex = state.cart.findIndex(
                cartItem => cartItem.product.id === product.id
              )
              if (cartItemIndex === -1) {
                return {
                  ...state,
                  cart: [
                    ...state.cart,
                    {
                      product,
                      quantity: 1,
                    },
                  ],
                  showCart: !state.showCart && true,
                }
              } else {
                // if product is already in cart --> quantity++
                // no more than 5 of the same products per order
                if (state.cart[cartItemIndex].quantity < 5) {
                  const newCart = state.cart
                  newCart[cartItemIndex].quantity =
                    newCart[cartItemIndex].quantity + 1
                  return {
                    ...state,
                    cart: newCart,
                    showCart: !state.showCart && true,
                  }
                } else {
                  return {
                    ...state,
                    showCart: !state.showCart && true,
                  }
                }
              }
            })
            set((state: ICartStore) => ({ ...state, fetching: false }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
        removeFromCart: (productId: string) => {
          try {
            set(state => ({ ...state, fetching: true }))
            set(state => {
              return {
                ...state,
                cart: state.cart.filter(
                  cartItem => cartItem.product.id !== productId
                ),
              }
            })
            set(state => ({ ...state, fetching: false }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
        toggleCart: () => {
          try {
            set(state => ({ ...state, showCart: !state.showCart }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
        increase: (productId: string) => {
          try {
            set(state => ({ ...state, fetching: true }))
            set(state => {
              const cartItemIndex = state.cart.findIndex(
                (e: ICart) => e.product.id === productId
              )
              const cart = [...state.cart]
              if (cart[cartItemIndex].quantity < 5) {
                cart[cartItemIndex] = {
                  ...cart[cartItemIndex],
                  quantity: cart[cartItemIndex].quantity + 1,
                }
              }

              return {
                ...state,
                cart,
              }
            })
            set(state => ({ ...state, fetching: false }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
        decrease: (productId: string) => {
          try {
            set(state => ({ ...state, fetching: true }))
            set(state => {
              const cartItemIndex = state.cart.findIndex(
                (e: ICart) => e.product.id === productId
              )
              const cart = [...state.cart]
              if (cart[cartItemIndex].quantity > 1) {
                cart[cartItemIndex] = {
                  ...cart[cartItemIndex],
                  quantity: cart[cartItemIndex].quantity - 1,
                }
              }

              return {
                ...state,
                cart,
              }
            })
            set(state => ({ ...state, fetching: false }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
        addToFavorites: (product: Product) => {
          try {
            set(state => ({ ...state, fetching: true }))
            set(state => {
              const wishlistItemIndex = state.favorites.findIndex(
                wishlistItem => wishlistItem.product.id === product.id
              )
              if (wishlistItemIndex === -1) {
                return {
                  ...state,
                  favorites: [
                    ...state.favorites,
                    {
                      product,
                    },
                  ],
                  showFavorites: !state.showFavorites && true,
                }
              } else return {}
            })
            set(state => ({ ...state, fetching: false }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
        removeFromFavorites: (productId: string) => {
          try {
            set(state => ({ ...state, fetching: true }))
            set(state => {
              return {
                ...state,
                favorites: state.favorites.filter(
                  wishlistItem => wishlistItem.product.id !== productId
                ),
              }
            })
            set(state => ({ ...state, fetching: false }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
        toggleFavorites: () => {
          try {
            set(state => ({ ...state, showFavorites: !state.showFavorites }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
      }),
      {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: 'Cart Store' }
  )
)

export const useCartItems = () =>
  useCartStore((state): number => {
    let total = 0
    Array.isArray(state.cart) &&
      state.cart.map(cartItem => {
        total += cartItem.quantity
      })
    return total
  })

export const useWishlistItems = () =>
  useCartStore((state): number => {
    return state.favorites.length
  })

export const useCartTotal = () =>
  useCartStore(state => {
    let total = 0
    Array.isArray(state.cart) &&
      state.cart.map(cartItem => {
        total += cartItem.product?.price * cartItem.quantity
      })
    return total
  })

export default useCartStore
