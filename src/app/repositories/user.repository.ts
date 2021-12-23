import { Users } from '../entities/users.entity'
import { DeepPartial, FindConditions, FindOneOptions, getManager, getRepository, ObjectID } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

class UserRepository {
  async insert (entity: DeepPartial<Users>) {
    const entityManager = getManager()
    const user = entityManager.create(Users, entity)
    return await entityManager.save(user)
  }

  async findAll (conditions?: FindConditions<Users>) {
    const repository = getRepository(Users)
    return await repository.find(conditions)
  }

  async findOne (conditions?: FindConditions<Users>, options?: FindOneOptions<Users>) {
    const repository = getRepository(Users)
    return await repository.findOne(conditions, options)
  }

  async update (criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Users>, partialEntity: QueryDeepPartialEntity<Users>) {
    const repository = getRepository(Users)
    return await repository.update(criteria, partialEntity)
  }

  async delete (criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Users>) {
    const repository = getRepository(Users)
    return await repository.delete(criteria)
  }
}

export const userRepository = new UserRepository()
