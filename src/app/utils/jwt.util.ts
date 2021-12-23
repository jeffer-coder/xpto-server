/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken'

export const sign = (payload: any) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 84000 })
export const verify = (token: string) => jwt.verify(token, process.env.JWT_SECRET)
