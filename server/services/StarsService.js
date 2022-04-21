import { dbContext } from '../db/DbContext'
import { Forbidden } from '../utils/Errors'

class StarsService {
  async getAll() {
    return await dbContext.Stars.find({}).populate('creator', 'name')
  }

  async getById(id) {
    const star = dbContext.Stars.findById(id)
    if (!star) {
      throw new Forbidden('Invalid Id')
    }
    return star
  }

  async create(star) {
    const newStar = await dbContext.Stars.create(star)
    newStar.populate('creator', 'name')
    return newStar
  }
}

export const starsService = new StarsService()
