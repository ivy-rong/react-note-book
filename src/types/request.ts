import { Note } from '@/types'
export interface Response {
  code?: number | string
  message?: string
}

export interface BaseResponse<T = unknown> extends Response {
  data: T
}

export interface PageResponse<T = unknown> extends Response {
  data: T
  pageCount: number
  pageSize: number
  total: number
}

export interface NotesResponse extends Response {
  notes: Note[]
  pageCount: number
  pageSize: number
  total: number
}
