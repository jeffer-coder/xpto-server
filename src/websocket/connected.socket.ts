import { Socket } from 'socket.io'
import disconnected from './disconnected.socket'

export default (socket: Socket) => {
  console.log(socket.decodedToken.sub)
  socket.on('disconnect', () => disconnected(socket))
}
