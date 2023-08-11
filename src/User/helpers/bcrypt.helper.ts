import { hash, compare } from 'bcryptjs'

const encrypt = async (password: string): Promise <string> => {
  const hashPassword = await hash(password, 8)
  return hashPassword
}

const verified = async (password: string, hashPassword: string): Promise <boolean> => {
  const isCorrect = await compare(password, hashPassword)
  return isCorrect
}

export {
  encrypt,
  verified
}
