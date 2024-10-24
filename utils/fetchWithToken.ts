import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'

export enum HttpMethod {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface RequestOptions {
  method?: HttpMethod
  body?: object
  queryParams?: string | string[][] | Record<string, string> | URLSearchParams
}

export default async function fetchWithToken(
  relativeUrl: string,
  options?: RequestOptions,
): Promise<Response> {
  const { method = HttpMethod.GET, body, queryParams } = { ...options }
  const session = await getServerSession(authOptions)
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Token ${session?.accessToken}`,
  }
  const searchParams = new URLSearchParams(queryParams)
  const fullUrl = new URL(
    `${process.env.API_URL}${relativeUrl}/?${searchParams.toString()}`,
  )

  const config: RequestInit = {
    method,
    headers,
  }

  if (![HttpMethod.GET, HttpMethod.HEAD].includes(method) && !!body) {
    config.body = JSON.stringify(body)
  }

  return fetch(fullUrl, config)
}
