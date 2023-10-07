export interface userType {
  avatarUrl?: string
  biography?: string
  email?: string
  id?: number
  location?: string
  name?: string
  role?: string
  username?: string
}

export interface responseUser {
  accessToken?: string
  successKey?: string
  user: userType
}
