import { Note } from '@/type'
import Request from '../axios'

interface NotesResult {
  notes: Note[]
  count: number
}

export class NotesAPI {
  /**
   * 获取记事数据
   */
  static getNotes() {
    return Request.get<NotesResult>('/notes')
  }

  /**
   * 获取归档数据
   */
  static getArchive() {
    return Request.get('archive/notes')
  }

  /**
   * 获取回收站数据
   */
  static getRecycleBin() {
    return Request.get('trash/notes')
  }
}
