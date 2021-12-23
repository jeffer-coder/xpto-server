import express from 'express'
import http from 'http'
import parser from 'body-parser'
import morgan from 'morgan'
import { router } from './app/router'
import './db/typeorm.db'
import { Server } from 'socket.io'
import { authorize } from '@thream/socketio-jwt'
import connection from './websocket/connected.socket'
export class App {
    public readonly app : express.Application
    public readonly server: http.Server;
    public readonly io: Server;
    constructor () {
      this.app = express()
      this.server = http.createServer(this.app)
      this.io = new Server(this.server, {
        cors: {
          origin: '*'
        }
      })
      this.middlewares()
      this.routers()
    }

    private middlewares () {
      this.app.use(parser.json())
      this.app.use(parser.urlencoded({ extended: true }))
      this.app.use(morgan('dev'))
      this.socket()
    }

    private socket () {
      this.io.use(authorize({ secret: process.env.JWT_SECRET }))
      this.io.on('connection', (socket) => connection(socket))
    }

    private routers () {
      this.app.use(router)
    }
}

export const app = new App()
