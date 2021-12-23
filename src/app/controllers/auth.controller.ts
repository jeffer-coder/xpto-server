import { userService } from '../services/user.service'
import { Request, Response } from 'express'

class Auth {
  public async signup (req:Request, res: Response) {
    const user = await userService.signup(req.body)
    res.status(201).send(user)
  }

  public async signin (req:Request, res: Response) {
    const user = await userService.signin(req.body.email, req.body.password)
    res.status(200).send(user)
  }
}

export const auth = new Auth()
