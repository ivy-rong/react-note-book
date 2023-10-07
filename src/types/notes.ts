export interface Content {
  content?: string
  createdAt?: Date
  createdBy?: string
  deletedAt?: Date
  deletedBy?: string
  updatedAt?: Date
  updatedBy?: string
  id?: number
  noteId: number
}

export interface Note {
  createdAt?: Date
  createdBy?: string
  deletedAt?: Date
  deletedBy?: string
  updatedAt?: Date
  updatedBy?: string
  authorId: number
  id: number
  published: boolean
  contents: Content[]
  title: string
}
