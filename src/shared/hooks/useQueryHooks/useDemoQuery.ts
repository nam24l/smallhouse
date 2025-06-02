import { useQuery } from '@tanstack/react-query'
import api from 'utils/api'

export interface useDemoQueryType {
  param: string
}

const useDemoQuery = (params: useDemoQueryType) => {
  const { param } = params
  const query = useQuery({
    queryKey: ['useDemo', param],
    queryFn: async () => {
      const response = api.getRequest({
        url: `/url/${param}`,
        options: {
          headers: {
            Accept: 'application/json'
          }
        }
      })

      return response
    },
    enabled: !!param
  })

  return { query }
}

export { useDemoQuery }
