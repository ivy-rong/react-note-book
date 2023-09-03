export interface Task {
  content?: string
  createdAt?: string
  finishedAt?: string
  id?: number
  index?: number
  linkUrl?: string
  updatedAt?: string
}

export interface Note {
  createdAt?: string
  description: string
  id: number
  index: number
  name: string
  priority: number
  tasks: Task[]
  toped: boolean
  updatedAt: string
}
