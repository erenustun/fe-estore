import { PAGINATION_TAKE } from '@shared/constant'

export const usePaginationParams = (query: any) => {
  const { take } = query
  return {
    take: take ? parseInt(take as string) : PAGINATION_TAKE,
  }
}
