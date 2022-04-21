import { Auth0Provider } from "@bcwdev/auth0provider"
import { moonsService } from "../services/MoonsService"
import { planetsService } from "../services/PlanetsService"
import { speciesService } from "../services/SpeciesService"
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('/:id', this.getById)
      .get('/:id', this.getSpeciesById)
      .get('/:id', this.getMoonsById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }

  async getById(req, res, next) {
    try {
      const planet = await planetsService.getById(req.params.id)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getSpeciesById(req, res, next) {
    try {
      const planetsSpecies = await speciesService.getSpeciesById(req.params.id)
      return res.send(planetsSpecies)
    } catch (error) {
      next(error)
    }
  }

  async getMoonsById(req, res, next) {
    try {
      const planetsMoons = await moonsService.getMoonsById(req.params.id)
      return res.send(planetsMoons)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const planet = await planetsService.create(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}
