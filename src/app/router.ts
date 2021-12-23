import express from 'express'
import { auth } from './controllers/auth.controller'
import jwtAuthMiddleware from './middlewares/jwt.auth.middleware'

class Router {
    public router : express.Router

    constructor () {
      this.router = express.Router()
      this.users('/auth')
    }

    private users (prefix: string) {
      this.router.post(prefix + '/signup', auth.signup)
      this.router.post(prefix + '/signin', auth.signin)

      this.router.get('/token', jwtAuthMiddleware, (req, res) => {
        res.send(req?.user)
      })
    }
}

export const router = new Router().router
