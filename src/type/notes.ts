export interface task {
  content?: string
  createdAt?: string
  finishedAt?: string
  id?: number
  index?: number
  linkUrl?: string
  updatedAt?: string
}

export interface note {
  createdAt?: string
  description: string
  id: number
  index: number
  name: string
  priority: number
  tasks: task[]
  toped: boolean
  updatedAt: string
}
