/* eslint-disable node/handle-callback-err */
import { verify } from '../utils/jwt.util'
import { Request, Response } from 'express'
import { userService } from '../services/user.service'

export default async (req: Request, res:Response, next: any) => {
  const authorization : string[] | any = req.headers.authorization?.split(' ')
  const token = authorization[1]

  try {
    const payload = verify(token)
    const user = await userService.findById(payload.sub)
    req.user = {
      id: user?.id,
      avatar: user?.avatar,
      username: user?.username,
      email: user?.email
    }
    next()
  } catch (error) {
    next(error)
  }

  console.log(authorization)
}
