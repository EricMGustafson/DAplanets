import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SpecieSchema = new Schema({
  name: { type: String, required: true },
  specieId: { type: Schema.Types.ObjectId, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })
