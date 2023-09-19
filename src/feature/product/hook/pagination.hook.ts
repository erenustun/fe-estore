import { DEFAULT_PAGE_LIMIT } from '@feature/product'

export const usePaginationParams = (query: any) => {
  const { take } = query
  return {
    page: 1,
    limit: take ? parseInt(take as string) : DEFAULT_PAGE_LIMIT,
  }
}
