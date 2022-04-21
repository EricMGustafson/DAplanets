import { dbContext } from '../db/DbContext'
import { Forbidden } from '../utils/Errors'

class StarsService {

  async getById(id) {
    const star = dbContext.Stars.findById(id)
    if (!star) {
      throw new Forbidden('Invalid Id')
    }
    return star
  }

  async getStarsByGalaxy(galaxyId) {
    const stars = await dbContext.Stars.find({galaxyId: galaxyId}).populate('creator', 'name')
    return stars
  }

  async create(star) {
    const newStar = await dbContext.Stars.create(star)
    newStar.populate('creator', 'name')
    return newStar
  }
}

export const starsService = new StarsService()
