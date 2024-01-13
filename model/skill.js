import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  text: String,
  level: String,  
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}