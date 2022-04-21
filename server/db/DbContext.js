import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from '../models/Galaxy'
import { StarSchema } from '../models/Star'
// import { PlanetSchema } from '../models/Planet'
// import { MoonSchema } from '../models/Moon'
// import { SpecieSchema } from '../models/Specie'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts')
  Galaxys = mongoose.model('Galaxy;', GalaxySchema)
  Stars = mongoose.model('Star', StarSchema)
  // Planets = mongoose.model('Planet', PlanetSchema)
  // Moons = mongoose.model('Moons', MoonSchema)
  // Species = mongoose.model('Specie', SpecieSchema)
}

export const dbContext = new DbContext()
