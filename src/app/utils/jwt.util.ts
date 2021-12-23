/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken'

const secret = (process.env.JWT_SECRET as string)

export const sign = (payload: any) => jwt.sign(payload, secret, { expiresIn: 84000 })
export const verify = (token: string) => jwt.verify(token, secret)
