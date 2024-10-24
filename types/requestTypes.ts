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

export interface ClientResponse {
  status: number
  ok: boolean
  body?: object
}
