import { useQuery } from '@tanstack/react-query'
import * as API from '../api/cafe'

export function useCafeById(id: string) {
  const query = useQuery({
    queryKey: ['cafe', id],
    queryFn: () => API.getCafeById(id),
  })
  return {
    ...query,
  }
}
