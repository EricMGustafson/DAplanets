import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema({
  name: { type: String, required: true },
  planets: { type: Number },
  galaxyId: { type: Schema.Types.ObjectId, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })

StarSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
