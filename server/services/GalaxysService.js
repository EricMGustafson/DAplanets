import { dbContext } from '../db/DbContext'
import { Forbidden } from '../utils/Errors'

class GalaxyService {
  async getAll() {
    return await dbContext.Galaxys.find({}).populate('creator', 'name')
  }

  getById(id) {
    const galaxy = dbContext.Galaxys.findById(id)
    if (!galaxy) {
      throw new Forbidden('Invalid Id')
    }
    return galaxy
  }

  async create(galaxy) {
    const newGalaxy = await dbContext.Galaxys.create(galaxy)
    newGalaxy.populate('creator', 'name')
    return newGalaxy
  }
}

export const galaxyService = new GalaxyService()
