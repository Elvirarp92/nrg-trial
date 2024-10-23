import { useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { useCallback } from 'react'

export function useFilterQueries<T extends z.ZodTypeAny>() {
  const searchParams = useSearchParams()

  return useCallback(
    (values: z.infer<T>) => {
      const params = new URLSearchParams(searchParams.toString())

      for (const key in values) {
        if (Object.prototype.hasOwnProperty.call(values, key)) {
          if (!!values[key]) {
            params.set(key, values[key].toString())
          } else if (!values[key] && params.has(key)) {
            params.delete(key)
          }
        }
      }

      return params.toString()
    },
    [searchParams],
  )
}
