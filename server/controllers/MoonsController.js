import BaseController from '../utils/BaseController'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAll)
  }

  getAll(req, res, next) {
    try {
      res.send()
    } catch (error) {
      next(error)
    }
  }
}
