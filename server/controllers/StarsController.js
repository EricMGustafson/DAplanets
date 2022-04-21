import { Auth0Provider } from '@bcwdev/auth0provider'
import { planetsService } from "../services/PlanetsService"
import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('/:id', this.getById)
      .get('/:id', this.getPlanetByStar)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }

  async getById(req, res, next) {
    try {
      const star = await starsService.getById(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetByStar(req, res, next) {
    try {
      const starsPlanets = await planetsService.getPlanetbyStar(req.params.id)
      return res.send(starsPlanets)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const star = await starsService.create(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
