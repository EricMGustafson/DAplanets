import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MoonSchema = new Schema({
  name: { type: String, required: true },
  moonId: { type: Schema.Types.ObjectId, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })
