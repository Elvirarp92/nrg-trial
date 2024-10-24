'use server'

import { RequestOptions, ClientResponse } from '@/types/requestTypes'
import fetchWithToken from '@/utils/fetchWithToken'

export default async function fetchWithTokenAction(
  relativeUrl: string,
  options?: RequestOptions,
): Promise<ClientResponse> {
  const req = await fetchWithToken(relativeUrl, options)
  const responseText = await req.text()

  if (!responseText) {
    return { status: req.status, ok: req.ok }
  }

  try {
    const body = await req.json()
    return {
      status: req.status,
      ok: req.ok,
      body,
    }
  } catch (error) {
    console.error(error)
    return {
      status: req.status,
      ok: req.ok,
    }
  }
}
