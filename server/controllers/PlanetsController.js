import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
  }

  async getAll(req, res, next) {
    try {
      res.send()
    } catch (error) {
      next(error)
    }
  }
}
