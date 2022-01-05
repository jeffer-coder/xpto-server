import { sign } from '../utils/jwt.util'
import { compare } from 'bcrypt'
import { CreateUserDto } from '../dto/create-user.dto'
import { userRepository } from '../repositories/user.repository'

class UserService {
  public async signup (createDto: CreateUserDto) {
    const user = await userRepository.insert(createDto)
    return {
      id: user.id,
      avatar: user.avatar,
      username: user.username,
      email: user.email
    }
  }

  public async signin (email: string, password: string) {
    const user = await userRepository.findOne({ email })

    if (!user || !await compare(password, user.password)) {
      return false
    }

    const token = sign({ sub: user.id })

    return {
      id: user.id,
      avatar: user.avatar,
      username: user.username,
      email: user.email,
      token: token
    }
  }

  public async findById (id: string | any) {
    return userRepository.findOne({ id })
  }
}

export const userService = new UserService()
