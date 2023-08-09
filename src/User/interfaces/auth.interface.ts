export interface Auth {
  email: string
  password: string
  role: 'admin' | 'professional' | 'company'
}
