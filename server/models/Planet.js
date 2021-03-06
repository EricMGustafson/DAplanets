import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
  name: { type: String, required: true },
  species: { type: Number },
  moons: { type: Number },
  starId: { type: Schema.Types.ObjectId, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })

PlanetSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  ref: 'star',
  justOne: true
})
