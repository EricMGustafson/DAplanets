import { Auth0Provider } from '@bcwdev/auth0provider'
import { galaxyService } from '../services/GalaxysService'
import BaseController from '../utils/BaseController'

export class GalaxysController extends BaseController {
  constructor() {
    super('api/galaxys')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/stars', this.getStarsByGalaxy)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const galaxys = await galaxyService.getAll()
      return res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const galaxy = await galaxyService.getById(req.params.id)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getStarsByGalaxy(req, res, next) {
    try {
      return res.send()
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const galaxy = await galaxyService.create(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
