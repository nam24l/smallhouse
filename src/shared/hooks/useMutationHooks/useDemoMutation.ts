import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import api from 'utils/api'

export interface DemoMutationType {
  body: string | FormData
}

const useDemoMutation = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  const mutation = useMutation({
    mutationKey: ['useDemo'],
    mutationFn: (bodyValues: DemoMutationType) => {
      const { body } = bodyValues
      return api.postRequest({
        url: '/verify/approve-ugc',
        body: body
      })
    },
    onMutate: () => {
      setIsLoading(true)
    },
    onSettled: () => {
      setIsLoading(false)
    },
    onError: (error: unknown) => {
      //unknown is not a proper way to handle types but it is one of more convenient ways to manage errors from an API you don't have immediate control over.
      setError(error)
    }
  })

  return { mutation, isLoading, error }
}

export { useDemoMutation }
