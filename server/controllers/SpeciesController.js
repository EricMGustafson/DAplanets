import BaseController from '../utils/BaseController'
export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
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
