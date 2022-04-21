import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class PlanetsService {


  async getById(id) {
    const planet = await dbContext.Planets.findById(id)
    if (!planet) {
      throw new Forbidden('Invalid Id')
    }
    return planet
  }

  getPlanetbyStar(id) {
    throw new Error("Method not implemented.")
  }

  create(body) {
    throw new Error("Method not implemented.")
  }

}

export const planetsService = new PlanetsService()
