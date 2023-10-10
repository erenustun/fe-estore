import { Product } from '@feature/product'

export interface ICart {
  product: Product
  quantity: number
}

export interface IWishlist {
  product: Product
}

export interface ICartStore {
  cart: ICart[] | []
  showCart: boolean
  fetching: boolean
  error: string | null
  addToCart: (product: Product) => void | ICartStore | Partial<ICartStore>
  removeFromCart: (productId: string) => void
  toggleCart: () => void
  increase: (productId: string) => void
  decrease: (productId: string) => void
  favorites: IWishlist[] | []
  addToFavorites: (product: Product) => void | ICartStore | Partial<ICartStore>
  removeFromFavorites: (productId: string) => void
  showFavorites: boolean
  toggleFavorites: () => void
}
